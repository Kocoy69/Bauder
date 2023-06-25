import keyBy from 'lodash/keyBy.js';
import has from 'lodash/has.js';
import isEmpty from 'lodash/isEmpty.js';
import * as yup from 'yup';
import onChange from 'on-change';
import axios from 'axios';

const routes = {
  usersPath: () => '/users',
};

const schema = yup.object().shape({
  name: yup.string().trim().required(),
  email: yup.string().required('email must be a valid email').email(),
  password: yup.string().required().min(6),
  passwordConfirmation: yup.string()
    .required('password confirmation is a required field')
    .oneOf(
      [yup.ref('password'), null],
      'password confirmation does not match to password',
    ),
});

// Используйте эту функцию для выполнения валидации.
// Выведите в консоль её результат, чтобы увидеть, как получить сообщения об ошибках.
const validate = (fields) => {
  try {
    schema.validateSync(fields, { abortEarly: false });
    return {};
  } catch (e) {
    return keyBy(e.inner, 'path');
  }
};

// BEGIN

const formHandler = () => {
  const form = document.querySelector('form');
  const signUpElements = {
    name: document.getElementById('sign-up-name'),
    email: document.getElementById('sign-up-email'),
    password: document.getElementById('sign-up-password'),
    passwordConfirmation: document.getElementById('sign-up-password-confirmation'),
  };

  const updateInputs = () => {
    const { name, email, password, passwordConfirmation } = signUpElements;
    const inputsText = {
      name: name.value,
      email: email.value,
      password: password.value,
      passwordConfirmation: passwordConfirmation.value,
    };

    const errors = validate(inputsText);

    form.querySelectorAll('.is-invalid').forEach(element => {
      element.classList.remove('is-invalid');
    });
    form.querySelectorAll('.invalid-feedback').forEach(element => {
      element.remove();
    });

    Object.entries(errors).forEach(([key, error]) => {
      const input = signUpElements[key];
      if (input) {
        const divWithError = document.createElement('div');
        divWithError.className = 'invalid-feedback';
        divWithError.textContent = error.message;
        input.classList.add('is-invalid');
        input.after(divWithError);
      }
    });

    const complitingAllFields = Object.values(signUpElements).every(input => input.value !== '');

    const sentFormButton = form.querySelector('[type="submit"]');

    if (isEmpty(errors) && complitingAllFields) {
      sentFormButton.removeAttribute('disabled');
    } else {
      sentFormButton.setAttribute('disabled', true);
    }
  };

  form.querySelectorAll('.form-control').forEach(field => {
    field.addEventListener('input', (event) => {  
      event.preventDefault();
      updateInputs();
    });
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const {name, email, password} = signUpElements;
    const signUpData = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    await axios.post(routes.usersPath(), signUpData);
    form.innerHTML = 'User Created!';
  });
};

export default formHandler;

// END
