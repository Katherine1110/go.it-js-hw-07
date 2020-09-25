let counterValue = 0;

const increment = () => {
  return (counterValue += 1);
};

const decrement = () => {
  return (counterValue -= 1);
};

const counter = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

incrementBtn.addEventListener('click', () => {
  counter.textContent = increment();
});

decrementBtn.addEventListener('click', () => {
  counter.textContent = decrement();
});
