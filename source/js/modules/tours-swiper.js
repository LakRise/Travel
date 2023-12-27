const tours = document.querySelector('[data-swiper="tours"]');

const setSwiperTours = () => {
  const toursSwiper = new window.Swiper(tours, {
    direction: 'horizontal',
    loop: false,
    autoHeight: false,
    initialSlide: 1,
    grid: {
      rows: 1,
    },
    breakpoints: {
      1200: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
      768: {
        spaceBetween: 18,
        slidesPerView: 2,
      },
      320: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: '[data-tours="next"]',
      prevEl: '[data-tours="previous"]',
    },
  });
  return toursSwiper;
};

export {setSwiperTours};
