const btn = document.querySelector('#toggleButton');
let body = document.querySelector('body');
btn.addEventListener('click', function () {
  body.classList.toggle('dark');
});

console.log(body, btn);
