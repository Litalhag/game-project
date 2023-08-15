const btn = document.querySelector('#clickButton');
let p = document.querySelector('#counter');
let counter = p.innerHTML;
btn.addEventListener('click', function () {
  counter++;
  p.innerHTML = counter;
});
