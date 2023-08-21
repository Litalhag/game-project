const keyDisplay = document.querySelector('#keyDisplay');
console.log(keyDisplay);

document.addEventListener('keypress', function (event) {
  let key = event.key;
  if (key === ' ') {
    key = 'space';
  }
  keyDisplay.textContent = key;
});
