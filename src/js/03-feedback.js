import throttle from 'lodash.throttle';
const formRef = document.querySelector('form');
const emailRef = formRef.elements.email;
const messageRef = formRef.elements.message;

const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
if (formData) {
  const { email, message } = formData;
  emailRef.value = email || '';
  messageRef.value = message || '';
}

const formHandler = function (e) {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const formSubmit = function (e) {
  e.preventDefault();
  const email = emailRef.value.trim();
  const message = messageRef.value.trim();
  if (!email || !message) {
    !email
      ? console.log('Error! Input email!')
      : console.log('Error! Input message!');
    return;
  }

  console.log('email:', email, 'message:', message);
  localStorage.removeItem('feedback-form-state');
  formRef.reset();
  formData.email = '';
  formData.message = '';
};

formRef.addEventListener('input', throttle(formHandler, 500));
formRef.addEventListener('submit', formSubmit);
