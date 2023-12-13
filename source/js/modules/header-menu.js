const main = document.querySelector('[data-main="main"');
const header = document.querySelector('[data-menu="header"]');
const button = header.querySelector('[data-menu="button"]');
const menu = header.querySelector('[data-menu="menu"]');

const closeMenu = () => {
  header.classList.remove('is-active');
  main.classList.remove('modal-opened');
  menu.removeEventListener('click', onLinkClick);
  document.body.style.position = '';
  document.body.style.top = '';
};

const onLinkClick = (evt) => {
  if (evt.target.matches('[data-menu="link"]')) {
    closeMenu();
  }
};

const openMenu = () => {
  header.classList.add('is-active');
  main.classList.add('modal-opened');
  menu.addEventListener('click', onLinkClick);
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

export {initMenu};
