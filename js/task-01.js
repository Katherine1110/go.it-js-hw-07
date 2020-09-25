const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');

items.forEach(element => {
  //console.log(element.innerHTML);
  const title = element.querySelector('h2').innerHTML;
  const itemsLength = element.querySelectorAll('li').length;
  console.log(`Категория: ${title}`);
  console.log(`Количество элементов: ${itemsLength}`);
});
