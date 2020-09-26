// const controls = document.querySelector('#controls');
// const render = document.querySelector('button[data-action="render"]');
// const destroy = document.querySelector('button[data-action="destroy"]');
// const boxes = document.querySelector('#boxes');
// const input = document.querySelector('input');

// function createBoxes(amount) {
//   for (let boxes = 0; amount < array.length; boxes++) {
//     //const element = array[index];
//     boxes.createElement('div');
//     let amount = +document.querySelector('#controls input').value;
//   }
// }

const render = document.querySelector('[data-action="render"]');
const destroy = document.querySelector('[data-action="destroy"]');
const boxes = document.getElementById('boxes');
render.addEventListener('click', getAmount);
destroy.addEventListener('click', destroyBoxes);

render.addEventListener('click', createBoxes);

function getAmount() {
  var amount = +document.querySelector('#controls input').value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const firstBoxSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const size = firstBoxSize + i * 10;
    const div = document.createElement('div');
    div.style = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function random() {
  return Math.floor(Math.random() * 256);
}
