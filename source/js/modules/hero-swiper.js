const hero = document.querySelector('[data-swiper="hero"]');

const setSwiperHero = () => {
  const swiperHero = new window.Swiper(hero, {
    direction: 'horizontal',
    loop: true,
    slidesPerView: '1',
    autoHeight: false,
    grid: {
      rows: 1,
    },
    pagination: {
      el: '[data-swiper="hero-pagination"]',
      clickable: true,
      bulletClass: 'hero__pagination-bullet',
      bulletActiveClass: 'hero__pagination-bullet--active',
    },
    breakpoints: {
      1200: {
        allowTouchMove: false,
      },
      768: {
        allowTouchMove: true,
      },
      320: {
        allowTouchMove: true,
      },
    },
  });
  return swiperHero;
};

export {setSwiperHero};
