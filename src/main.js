(function () {
  const mobileMenuOpenButton = document.querySelector('.menu-button');
  const mobileMenuCloseButton = document.querySelector('.menu-close');
  const menuOverlay = document.querySelector('.menu-overlay');

  function toggleMenu() {
    menuOverlay.classList.toggle('is-shown');
  }

  if (mobileMenuOpenButton) {
    mobileMenuOpenButton.addEventListener('click', toggleMenu);
  }
  if (mobileMenuCloseButton) {
    mobileMenuCloseButton.addEventListener('click', toggleMenu);
  }
})();
