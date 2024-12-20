(function () {
  const mobileMenuOpenButton = document.querySelector('.menu-button');
  const mobileMenuCloseButton = document.querySelector('.menu-close');
  const mobileMenuNavButtons = document.querySelectorAll('.menu-link');
  const menuOverlay = document.querySelector('.menu-overlay');
  const applicationButtons = document.querySelectorAll('.application-button');
  const applicationBtnTarget = document.querySelector('#contact-us');

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
  if (applicationButtons) {
    applicationButtons.forEach(button => {
      button.addEventListener('click', () => {
        history.pushState(null, '', '#contact-us');
        applicationBtnTarget.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }
})();
