const advantages = document.querySelector('[data-swiper="advantages"]');

const setSwiperAdvantages = () => {
  const advantagesSwiper = new window.Swiper(advantages, {
    direction: 'horizontal',
    loop: false,
    autoHeight: false,
    initialSlide: 2,
    centeredSlides: true,
    slidesPerView: 'auto',
    breakpoints: {
      1200: {
        enabled: true,
        virtualTranslate: false,
        spaceBetween: 30,
      },
      768: {
        enabled: false,
        virtualTranslate: true,
        spaceBetween: 0,
      },
      320: {
        enabled: false,
        virtualTranslate: true,
        spaceBetween: 0,
      },
    },
    navigation: {
      nextEl: '[data-advantages="next"]',
      prevEl: '[data-advantages="previous"]',
    },
  });
  return advantagesSwiper;
};

export {setSwiperAdvantages};
