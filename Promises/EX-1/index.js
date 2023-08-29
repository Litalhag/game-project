const button = document.getElementById("triggerPromise");

button.addEventListener("click", function () {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const triggerCheckbox = document.getElementById("triggerRejection");
      if (triggerCheckbox.checked) {
        reject("The Promise has been rejected!");
      } else {
        resolve("The Promise has been resolved!");
      }
    }, 1000);
  });
  promise
    .then((message) => {
      const messageDiv = document.getElementById("message");
      messageDiv.textContent = message;
      messageDiv.classList.add("resolved");
      messageDiv.classList.remove("rejected");
    })
    .catch((error) => {
      const messageDiv = document.getElementById("message");
      messageDiv.textContent = error;
      messageDiv.classList.add("rejected");
      messageDiv.classList.remove("resolved");
    });
});
