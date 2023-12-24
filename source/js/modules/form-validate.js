const form = document.querySelector('[data-form="form"]');
const tel = form.querySelector('[data-form="tel"]');
const email = form.querySelector('[data-form="email"');
const button = form.querySelector('[data-form="submit"]');

const validateItem = (item, value, expression, message) => {
  if (!expression.test(value)) {
    item.setCustomValidity(message);
  } else {
    item.setCustomValidity('');
  }
};

const validateTel = () => {
  const value = tel.value.replaceAll(' ', '');
  const expression = /^[+]?[0-9]{1}[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
  validateItem(tel, value, expression, 'Неверный номер.');
};

const validateEmail = () => {
  const expression = /^[A-za-zА-яа-я0-9_\-\.]+@([A-za-zА-яа-я0-9_-]+\.)+[A-za-zА-яа-я-]{2,}$/gm;
  validateItem(email, email.value, expression, 'Неверный email.');
};

const validateForm = () => {
  if (tel.value === '' && email.value === '') {
    tel.setCustomValidity('Заполните одно из полей.');
    email.setCustomValidity('Заполните одно из полей.');
  } else {
    tel.setCustomValidity('');
    email.setCustomValidity('');
    if (tel.value !== '') {
      validateTel();
    }
    if (email.value !== '') {
      validateEmail();
    }
  }
};

const setFormValidation = () => {
  button.addEventListener('click', validateForm);
};

export {setFormValidation};
