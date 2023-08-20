const myButton = document.getElementById("toggleButton");

function toggleBackgroundColor() {
  const body = document.body;
  body.classList.toggle("dark");
}
myButton.addEventListener("click", toggleBackgroundColor);
