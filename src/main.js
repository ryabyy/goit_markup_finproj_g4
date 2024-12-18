import 'modern-normalize/modern-normalize.css';

(function () {
    const mobileMenuOpenButton = document.querySelector('.header__mobile_menu_button');
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
