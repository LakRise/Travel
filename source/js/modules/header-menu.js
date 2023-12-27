const main = document.querySelector('[data-main="main"]');
const header = document.querySelector('[data-menu="header"]');
const button = header.querySelector('[data-menu="button"]');

const options = {
  attributes: true,
};

const closeMenu = () => {
  header.classList.remove('is-active');
  main.classList.remove('modal-opened');
  document.body.style.position = '';
  document.body.style.top = '';
};

const onLinkClick = (evt) => {
  if (evt.target.matches('[data-menu="link"]') || !evt.target.closest('[data-menu="header"]')) {
    closeMenu();
  }
};

const openMenu = () => {
  header.classList.add('is-active');
  main.classList.add('modal-opened');
  document.body.style.position = 'fixed';
  document.body.style.top = `-${window.scrollY}px`;
};

const onBurgerClick = () => {
  if (button === null) {
    return;
  }
  if (!header.classList.contains('is-active')) {
    openMenu();
  } else {
    closeMenu();
  }
};

const initMenu = () => {
  if (button !== null) {
    button.addEventListener('click', onBurgerClick);
  }
};

const observeClassChange = (mutationList) => {
  mutationList.forEach((mutation) => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      if (header.classList.contains('is-active')) {
        main.addEventListener('click', onLinkClick);
      } else {
        main.removeEventListener('click', onLinkClick);
      }
    }
  });
};

const observer = new MutationObserver(observeClassChange);
observer.observe(header, options);

export {initMenu};
