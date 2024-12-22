import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

(function () {
  const mobileMenuOpenButton = document.querySelector('.menu-button');
  const mobileMenuCloseButton = document.querySelector('.menu-close');
  const mobileMenuNavButtons = document.querySelectorAll('.menu-link');
  const menuOverlay = document.querySelector('.menu-overlay');
  const applicationButtons = document.querySelectorAll('.application-button');
  const applicationBtnTarget = document.querySelector('#contact-us');
  let menuIsShown = false;

  function toggleMenu() {
    menuOverlay.classList.toggle('is-shown');
    menuIsShown = !menuIsShown;
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

  function handleResize() {
    if (window.innerWidth > 1280 && menuIsShown) {
      menuOverlay.classList.remove('is-shown');
      menuIsShown = false;
    }
  }

  window.addEventListener('resize', handleResize);

  handleResize();
})();

const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
    reverseDirection: false,
  },
  slidesPerView: 1,
  spaceBetween: 32,
  centeredSlides: false,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
  modules: [Autoplay],
});
