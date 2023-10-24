// Required field constants
const formName = document.getElementById('name');
const formEmail = document.getElementById('email');

const error =
  '<span class="form-error"><img src="../assets/images/icon-cross.svg"></span>';

function createError(element) {
  const span = document.createElement('span');
  const img = document.createElement('img');

  span.classList.add('form-error');
  img.setAttribute('src', '../assets/images/icon-cross.svg');

  span.appendChild(img);
  element.parentElement.appendChild(span);
  element.parentElement.classList.add('form-alert');
}

function removeError(element) {
  const errorElement = document.querySelector('form-error');
  errorElement?.remove();
  element.parentElement?.classList.remove('form-alert');
}

formName.addEventListener('blur', () => {
  if (formName.value === '' || formName.value === null) {
    createError(formName);
  } else {
    removeError(formName);
  }
});

formEmail.addEventListener('blur', () => {
  if (!formEmail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    createError(formEmail);
  } else {
    removeError(email);
  }
});
