'use strict';

(function() {
  var escCode = 27;

  var escPressHandler = function (evt) {
    if (evt.keyCode === escCode) {
      authorizationPopup.classList.remove('show');
    }
  };

  var link = document.querySelector('.nav-user__link');
  var authorizationPopup = document.querySelector('.authorization');
  var modalClose = document.querySelector('.modal__close');
  var login = document.querySelector('[name=user-login]')

  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    authorizationPopup.classList.add('show');
    login.focus();

    document.addEventListener('keydown', escPressHandler);
  });

  modalClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    authorizationPopup.classList.remove('show');
  });
})();
