const hero = document.querySelector('[data-swiper="hero"]');

let swiperHero = '';

const setSwiperHero = () => {
  swiperHero = new window.Swiper(hero, {
    direction: 'horizontal',
    loop: false,
    slidesPerView: '1',
    autoHeight: true,
    pagination: {
      el: '[data-swiper="hero-pagination"]',
      clickable: true,
      bulletClass: 'hero__pagination-bullet',
      bulletActiveClass: 'hero__pagination-bullet--active',
    },
  });
};

export {setSwiperHero, swiperHero};
