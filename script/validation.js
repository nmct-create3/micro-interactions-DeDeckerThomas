let email = {},
  password = {},
  signInButton;

const fakeSignIn = function () {
  console.log(email.input.value, password.input.value);
};

const isValidPassword = function (password) {
  return password.length() > 1;
};

const isValidEmailAddress = function (emailAddress) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function (fieldValue) {
  return !fieldValue || !fieldValue.length;
};

const doubleCheckPassword = function () {
  if (isEmpty(password.input.value)) {
    addErrors(password.field, password.errorMessage, 'This field is required');
  } else {
    removeErros(password.field, password.errorMessage);
  }
};

const doubleCheckEmailAddress = function () {
  if (!isEmpty(email.input.value) && isValidEmailAddress(email.input.value)) {
    removeErros(email.field, email.errorMessage);
  } else {
    addErrors(email.field, email.errorMessage, 'Invalid emailaddress');
  }
};

const removeErros = function (formField, errorField) {
  formField.classList.remove('has-error');
  errorField.innerHTML = '';
};

const addErrors = function (formField, errorField, errorMessage) {
  formField.classList.add('has-error');
  errorField.innerHTML = errorMessage;
};

const enableListeners = function () {
  email.input.addEventListener('blur', () => {
    if (isEmpty(email.input.value) || !isValidEmailAddress(email.input.value)) {
      addErrors(email.field, email.errorMessage, isEmpty(email.input.value) ? 'This field is required' : 'Invalid emailaddress');
      email.input.addEventListener('input', doubleCheckEmailAddress);
    } else {
      removeErros(email.field, email.errorMessage);
      email.input.removeEventListener('input', doubleCheckEmailAddress);
    }
  });
  password.input.addEventListener('blur', () => {
    if (isEmpty(password.input.value)) {
      addErrors(password.field, password.errorMessage, 'This field is required');
      password.input.addEventListener('input', doubleCheckPassword);
    } else {
      removeErros(password.field, password.errorMessage);
      password.input.removeEventListener('input', doubleCheckPassword);
    }
  });
  signInButton.addEventListener('click', (e) => {
    if (isEmpty(email.input.value) && !isValidEmailAddress(email.input.value) && isEmpty(password.input.value)) {
      e.preventDefault();
    }
  });
};

const getDOMElements = function () {
  email.field = document.querySelector('.js-email-field');
  email.input = document.querySelector('.js-email-input');
  email.errorMessage = document.querySelector('.js-email-error-message');
  password.field = document.querySelector('.js-password-field');
  password.input = document.querySelector('.js-password-input');
  password.errorMessage = document.querySelector('.js-password-error-message');
  signInButton = document.querySelector('.js-sign-in-button');
};

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM loaded 🥳');
  getDOMElements();
  enableListeners();
});
