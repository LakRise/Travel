const feedback = document.querySelector('[data-swiper="feedback"]');

let feedbackSwiper = '';

const setSwiperFeedback = () => {
  feedbackSwiper = new window.Swiper(feedback, {
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
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: '[data-feedback="next"]',
      prevEl: '[data-feedback="previous"]',
    },
  });
};

export {setSwiperFeedback, feedbackSwiper};
