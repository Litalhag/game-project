const ul = document.querySelector('#navList');
const message = document.querySelector('#message');

console.log(message, ul);

ul.addEventListener('click', function (event) {
  const clickedItem = event.target;
  const tagName = clickedItem.tagName;
  if (tagName === 'A') {
    let value = clickedItem.getAttribute('data-link');
    setTimeout(() => {
      message.style.display = 'block';
      message.textContent = `Hi you have clicked on ${value}`;
    }, 3000);
  }
});
