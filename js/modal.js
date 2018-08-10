'use strict';

(function() {
  var escCode = 27;

  var link = document.querySelector('.nav-user__link');
  var authorizationPopup = document.querySelector('.authorization');
  var login = authorizationPopup.querySelector('[name=user-login]');
  var authorizationClose = authorizationPopup.querySelector('.modal__close');

  var mapLink = document.querySelector('.map-link');
  var mapPopup = document.querySelector('.map');
  var mapClose = mapPopup.querySelector('.modal__close');

  var escPressHandler = function (evt) {
    if (evt.keyCode === escCode) {
      authorizationPopup.classList.remove('show');
      authorizationPopup.classList.remove('error');
    }
  };

  var escPressMapHandler = function (evt) {
    if (evt.keyCode === escCode) {
      if (mapPopup.classList.contains('show')) {
        mapPopup.classList.remove('show');
      }
    }
  };

  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    authorizationPopup.classList.add('show');
    login.focus();

    window.addEventListener('keydown', escPressHandler);
  });

  authorizationClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    authorizationPopup.classList.remove('show');
    authorizationPopup.classList.remove('error');
  });

  mapLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.add('show');

    window.addEventListener('keydown', escPressMapHandler);
  });

  mapClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove('show');
  });
})();
