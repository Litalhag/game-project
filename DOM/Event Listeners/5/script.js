const display = document.querySelector("#keyDisplay");
console.log(display);
window.addEventListener("keydown", function (event) {
  display.innerText = event.key === " " ? "space" : event.key;
});
