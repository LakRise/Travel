const feedback = document.querySelector('[data-swiper="feedback"]');

const setSwiperFeedback = () => {
  const feedbackSwiper = new window.Swiper(feedback, {
    direction: 'horizontal',
    loop: true,
    autoHeight: false,
    initialSlide: 0,
    slidesPerView: 'auto',
    breakpoints: {
      1200: {
        spaceBetween: 120,
      },
      768: {
        spaceBetween: 30,
      },
      320: {
        spaceBetween: 40,
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
