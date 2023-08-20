const toggleButton = document.getElementById("toggleButton");
function toggleBackgroundColor() {
  document.body.classList.toggle("dark");
}
toggleButton.addEventListener("click", toggleBackgroundColor);
