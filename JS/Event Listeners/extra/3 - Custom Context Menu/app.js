const menu = document.querySelector('.context-menu');
const viewDetails = document.querySelector('#viewDetails');
const copyText = document.querySelector('#copyText');
document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  menu.style.display = 'block';
  let x = event.clientX;
  let y = event.clientY;
  console.log(x, y);
  menu.style.top = `${y}px`;
  menu.style.left = `${x}px`;
});

document.addEventListener('click', function () {
  menu.style.display = 'none';
});

viewDetails.addEventListener('click', function () {
  alert('here are the the Details');
});
copyText.addEventListener('click', function () {
  alert('item was copied');
});
