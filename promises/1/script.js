const btn = document.getElementById("triggerPromise");
const checkbox = document.getElementById("triggerRejection");
const messageDiv = document.getElementById("message");
btn.addEventListener("click", function () {
  const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!checkbox.checked) {
        resolve("The Promise has been resolved!");
      } else {
        reject("The Promise has been rejected!");
      }
    }, 1000);
  });
  prom.then((message) => {
    messageDiv.innerText = message;
    messageDiv.classList.remove("rejected");
    messageDiv.classList.add("resolved");
  });
  prom.catch((message) => {
    messageDiv.innerText = message;
    messageDiv.classList.remove("resolved");
    messageDiv.classList.add("rejected");
  });
});
