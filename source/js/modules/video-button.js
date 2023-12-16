const videoWrapper = document.querySelector('[data-hero="video-wrapper"]');
const video = videoWrapper.querySelector('[data-hero="video"]');
const button = videoWrapper.querySelector('[data-hero="video-button"]');

const onButtonClick = () => {
  videoWrapper.classList.add('is-active');
  video.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  button.removeEventListener('click', onButtonClick);
};

const setVideo = () => {
  if (button === null || videoWrapper === null || video === null) {
    return;
  }
  button.addEventListener('click', onButtonClick);
};

export {setVideo};
