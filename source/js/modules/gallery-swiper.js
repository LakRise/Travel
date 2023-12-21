const gallery = document.querySelector('[data-swiper="gallery"]');

const setSwiperGallery = () => {
  const gallerySwiper = new window.Swiper(gallery, {
    direction: 'horizontal',
    loop: true,
    autoHeight: false,
    initialSlide: 0,
    slidesPerGroup: 2,
    loopAddBlankSlides: true,
    breakpoints: {
      1200: {
        spaceBetween: 5,
        slidesPerView: 'auto',
      },
      768: {
        spaceBetween: 5,
        slidesPerView: 'auto',
      },
      320: {
        spaceBetween: 3,
        slidesPerView: 2,
      },
    },
    navigation: {
      nextEl: '[data-gallery="next"]',
      prevEl: '[data-gallery="previous"]',
    },
  });
  return gallerySwiper;
};

export {setSwiperGallery};
