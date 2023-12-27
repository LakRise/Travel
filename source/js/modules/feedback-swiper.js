const feedback = document.querySelector('[data-swiper="feedback"]');

const setSwiperFeedback = () => {
  const feedbackSwiper = new window.Swiper(feedback, {
    direction: 'horizontal',
    loop: true,
    autoHeight: false,
    initialSlide: 0,
    grid: {
      rows: 1,
    },
    breakpoints: {
      1200: {
        spaceBetween: 120,
        slidesPerView: 'auto',
      },
      768: {
        spaceBetween: 30,
        slidesPerView: 'auto',
      },
      320: {
        spaceBetween: 40,
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: '[data-feedback="next"]',
      prevEl: '[data-feedback="previous"]',
    },
  });
  return feedbackSwiper;
};

export {setSwiperFeedback};
