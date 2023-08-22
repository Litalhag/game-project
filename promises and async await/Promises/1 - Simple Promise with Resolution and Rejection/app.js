const btn = document.querySelector('#triggerPromise');
const checkBox = document.querySelector('#triggerRejection');
const message = document.querySelector('#message');
console.log(message);

btn.addEventListener('click', function () {
  let checkBoxPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!checkBox.checked) {
        resolve('The Promise has been resolved!');
      } else {
        reject('The Promise has been rejected!');
      }
    }),
      1000;
  });
  checkBoxPromise.then((messageSuccess) => {
    message.textContent = messageSuccess;
    message.classList.add('resolved');
    message.classList.remove('rejected');
  });
  checkBoxPromise.catch((error) => {
    message.textContent = error;
    message.classList.add('rejected');
    message.classList.remove('resolved');
  });
});
