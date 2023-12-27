const coaching = document.querySelector('[data-swiper="coaching"]');

const setSwiperCoaching = () => {
  const swiperCoaching = new window.Swiper(coaching, {
    direction: 'horizontal',
    loop: false,
    autoHeight: false,
    initialSlide: 1,
    grid: {
      rows: 1,
    },
    breakpoints: {
      1200: {
        spaceBetween: 20,
        slidesPerView: 4,
      },
      768: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      320: {
        spaceBetween: 0,
        slidesPerView: 1,
        initialSlide: 3,
      },
    },
    navigation: {
      nextEl: '[data-coaching="next"]',
      prevEl: '[data-coaching="previous"]',
    },
  });
  return swiperCoaching;
};

export {setSwiperCoaching};
