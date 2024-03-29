const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputFocus);
refs.input.addEventListener('input', onInputChange);

function onInputFocus() {
  console.log('Инпут получил фокус - событие focus');
}

function onInputChange(event) {
  if (event.currentTarget.value === '') {
    refs.output.textContent = 'незнакомец';
  } else {
    refs.output.textContent = event.currentTarget.value;
  }
}
