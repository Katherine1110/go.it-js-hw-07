const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  const listEl = document.createElement('li');
  listEl.textContent = ingredient;
  list.append(listEl);
}
