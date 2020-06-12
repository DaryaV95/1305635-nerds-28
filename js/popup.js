var btnMap = document.querySelector('.btn-map');
var modal = document.querySelector('.modal');
var modalClose = modal.querySelector('.modal-close');
var modalForm = modal.querySelector('.modal-form');
var modalLogin = modal.querySelector('.modal-login-name');
var modalEmail = modal.querySelector('.modal-email');
var storage = localStorage.getItem('modal-login-name');

btnMap.addEventListener('click', function (evt) {
    event.preventDefault();
    modal.classList.add('modal-show');
      if (storage) {
        modalLogin.value = storage;
        modalEmail.focus();
    } else {
        modalLogin.focus();
    }
});

modalClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.remove('modal-show');
    modal.classList.remove('modal-error');
});

modalForm.addEventListener('submit', function (evt) {
    if (!modalLogin.value || !modalEmail.value) {
        evt.preventDefault();
        modal.classList.remove('modal-error');
        modal.offsetWidth = modal.offsetWidth;
        modal.classList.add('modal-error');
        
    } else {
        if (isStorageSupport) {
            localStorage.setItem('login', modalLogin.value);
            localStorage.setItem('mail', modalEmail.value);
        }
    }
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (modal.classList.contains('modal-show')) {
        modal.classList.remove('modal-show');
        modal.classList.remove('modal-error');
      }
    }
  });