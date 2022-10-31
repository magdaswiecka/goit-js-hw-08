import throttle from "lodash.throttle";

const form = document.querySelector('form.feedback-form');
let inputEmail = document.querySelector('input[name=email]');
let inputMess = document.querySelector('textarea[name=message]');
const submitBtn = document.querySelector('button[type=submit]');

let formData = {
  email: '',
  message: '',
}

form.addEventListener('input', throttle(inputChange, 500));
submitBtn.addEventListener('click', clearStorage);

checkStorage();

function inputChange(event) {
  event.preventDefault();
  
  formData.email = inputEmail.value;
  formData.message = inputMess.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function checkStorage() {
  const localStorageValue = localStorage.getItem('feedback-form-state');

  if(localStorageValue) {
    formData = JSON.parse(localStorageValue);
    inputEmail.value = formData.email;
    inputMess.value = formData.message;
  }
}

function clearStorage(event) {
  event.preventDefault();
  localStorage.clear();
  form.reset();
  console.log(formData);
}
