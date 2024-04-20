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
   *  modal for mob-menu
   */

  let mobmenu = document.querySelector('.mob-menu');
  let backdropmobmenu = document.querySelector('.backdrop-mob-menu ');
  let closemobmenu = document.querySelector('.close-mob-menu');

  mobmenu.addEventListener('click', () => {
    backdropmobmenu.classList.add('is-open');
  });

  closemobmenu.addEventListener('click', e => {
    e.preventDefault();
    backdropmobmenu.classList.remove('is-open');
  });
})();
