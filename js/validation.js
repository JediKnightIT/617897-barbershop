'use strict';

(function () {
  var authorizationPopup = document.querySelector('.authorization');
  var form = document.querySelector('.authorization__form');
  var userLogin = form.querySelector('[name=user-login]');
  var userPassword = form.querySelector('[name=user-password]');

  form.addEventListener('submit', function (evt) {
    if (!userLogin.value || !userPassword.value) {
      evt.preventDefault();
      authorizationPopup.classList.remove('error');
      void authorizationPopup.offsetWidth;
      authorizationPopup.classList.add('error');
    }
  });
})();
