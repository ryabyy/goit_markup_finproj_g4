(function () {
  const mobileMenuOpenButton = document.querySelector('.menu-button');
  const mobileMenuCloseButton = document.querySelector('.menu-close');
  const mobileMenuNavButtons = document.querySelectorAll('.menu-link');
  const menuOverlay = document.querySelector('.menu-overlay');
  const menuLinks = document.querySelectorAll('.menu-navigation li a');

  menuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  function toggleMenu() {
    menuOverlay.classList.toggle('is-shown');
  }

  if (mobileMenuOpenButton) {
    mobileMenuOpenButton.addEventListener('click', toggleMenu);
  }
  if (mobileMenuCloseButton) {
    mobileMenuCloseButton.addEventListener('click', toggleMenu);
  }
  if (mobileMenuNavButtons) {
    mobileMenuNavButtons.forEach(button => {
      button.addEventListener('click', toggleMenu);
    });
  }
})();
