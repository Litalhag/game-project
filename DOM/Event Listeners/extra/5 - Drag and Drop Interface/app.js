const boxToDrag = document.querySelector('.draggable');

const boxToDrop = document.querySelector('#targetBox');

const sourceBox = document.querySelector('#sourceBox');

boxToDrag.addEventListener('dragstart', (event) => {
  event.dataTransfer.setData('div', event.target.id);
});

boxToDrop.addEventListener('dragover', (event) => {
  event.preventDefault();
});

boxToDrop.addEventListener('drop', (event) => {
  event.preventDefault();
  let data = event.dataTransfer.getData('div');
  event.target.appendChild(document.getElementById(data));
});

sourceBox.addEventListener('dragover', (event) => {
  event.preventDefault();
});

sourceBox.addEventListener('drop', (event) => {
  event.preventDefault();
  let data = event.dataTransfer.getData('div');
  event.target.appendChild(document.getElementById(data));
});
