const inputId = document.querySelector('#validation-input');

// inputId.addEventListener('focus', onInputFocus);
inputId.addEventListener('blur', onInputBlur);

// function onInputFocus(event) {
//   console.log('Инпут получил фокус - событие focus');
// }
function onInputBlur(event) {
  if (event.currentTarget.value.length === 6) {
    inputId.classList.add('valid');
    inputId.classList.remove('invalid');
  } else {
    inputId.classList.remove('valid');
    inputId.classList.add('invalid');
  }

  console.log(inputId);
}
