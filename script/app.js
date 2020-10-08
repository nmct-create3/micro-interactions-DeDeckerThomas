const isEmpty = function (fieldValue) {
  return !fieldValue || !fieldValue.length;
};

function handleFloatingLabel() {
  const floatingLabelInput = document.querySelector('.js-floating-label-input');
  const floatingLabel = document.querySelector('.js-floating-label');
  floatingLabelInput.addEventListener('blur', () => {
    if (!isEmpty(floatingLabelInput.value)) {
      floatingLabel.classList.add('is-floating');
    } else {
      floatingLabel.classList.remove('is-floating');
    }
  });
}

function handlePasswordSwitcher() {
  const passwordInput = document.querySelector('.js-password-input');
  const passwordToggle = document.querySelector('.js-password-toggle');
  passwordToggle.addEventListener('click', () => {
    if (passwordToggle.checked) {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded!');
  handleFloatingLabel();
  handlePasswordSwitcher();
});
