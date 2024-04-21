(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  /**
   * Scroll to section
   */
  function scrollToSection() {
    function smoothScroll(targetEl, duration) {
      let target = document.querySelector(targetEl);
      if (!target) {
        console.log('елемент куди скролити не знайдено:', targetEl);
        return;
      }
      let targetPosition = target.getBoundingClientRect().top;
      let startPosition = window.pageYOffset;
      let startTime = null;
      const ease = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };
      const animation = function (currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);
    }
    const links = document.querySelectorAll('a.scroll-to');
    if (links) {
      links.forEach(link => {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          const currentTarget = this.getAttribute('href');
          !refs.modal.classList.contains('is-hidden')
            ? refs.modal.classList.add('is-hidden')
            : null;
          smoothScroll(currentTarget, 1000);
        });
      });
    }
  }
  scrollToSection();

  /**
   *  modal for mob-menu
   */

  let mobmenu = document.querySelector('.mob-menu');
  let openmodal = document.querySelector('.open-modal');
  let backdropmobmenu = document.querySelector('.backdrop-mob-menu ');
  let mobbackdropp = document.querySelector('.mob-backdropp ');
  let closemobmenu = document.querySelector('.close-mob-menu');
  let closemobmodal = document.querySelector('.close-mob-modal');

  mobmenu.addEventListener('click', () => {
    backdropmobmenu.classList.add('is-open');
  });

  openmodal.addEventListener('click', () => {
    mobbackdropp.classList.remove('is-hidden');
  });

  closemobmenu.addEventListener('click', e => {
    e.preventDefault();
    backdropmobmenu.classList.remove('is-open');
  });

  closemobmodal.addEventListener('click', e => {
    e.preventDefault();
    mobbackdropp.classList.add('is-hidden');
  });
})();
