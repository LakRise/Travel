const audioWrapper = document.querySelector('[data-hero="audio-wrapper"]');
const audio = audioWrapper.querySelector('[data-hero="audio"]');
const button = audioWrapper.querySelector('[data-hero="audio-button"]');

const onButtonClick = () => {
  audioWrapper.classList.add('is-active');
  audio.setAttribute('src', 'https://music.yandex.ru/iframe/#album/25474374?dir=desc&activeTab=track-list');
  button.removeEventListener('click', onButtonClick);
};

const setAudio = () => {
  if (button === null || audioWrapper === null || audio === null) {
    return;
  }
  button.addEventListener('click', onButtonClick);
};

export {setAudio};
