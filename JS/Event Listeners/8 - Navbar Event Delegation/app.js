const ul = document.querySelector('#navList');
const message = document.querySelector('#message');

console.log(message, ul);

ul.addEventListener('click', function (event) {
  const clickedItem = event.target;
  const tagName = clickedItem.tagName;
  console.log(tagName);
});
