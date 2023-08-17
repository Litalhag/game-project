const showModalBtn = document.querySelector('#showModalBtn');
const overlay = document.querySelector('#overlay');
console.log(showModalBtn, overlay);
showModalBtn.addEventListener('click', function () {
  overlay.style.display = 'block';
});

overlay.addEventListener('click', function (event) {
  const clickedItem = event.target;
  if (clickedItem.classList.contains('modal') || clickedItem.classList.contains('close-btn')) {
    overlay.style.display = 'none';
  }
});
