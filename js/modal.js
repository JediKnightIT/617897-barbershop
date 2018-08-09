'use strict';

(function() {
  var escCode = 27;

  var link = document.querySelector('.nav-user__link');
  var authorizationPopup = document.querySelector('.authorization');
  var login = document.querySelector('[name=user-login]');
  var modalClose = document.querySelector('.modal__close');

  var escPressHandler = function (evt) {
    if (evt.keyCode === escCode) {
      authorizationPopup.classList.remove('show');
      authorizationPopup.classList.remove('error');
    }
  };

  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    authorizationPopup.classList.add('show');
    login.focus();

    document.addEventListener('keydown', escPressHandler);
  });

  modalClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    authorizationPopup.classList.remove('show');
    authorizationPopup.classList.remove('error');
  });
})();
