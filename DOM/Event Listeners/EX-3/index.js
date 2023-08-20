const button = document.getElementById("clickButton");
const counter = document.getElementById("counter");
const container = document.querySelector(".container");
const resetButton = document.createElement("button");
resetButton.textContent = "reset";

function biggerCounter() {
  counter.textContent++;
}
function reset() {
  counter.textContent = 0;
}
button.addEventListener("click", biggerCounter);
resetButton.addEventListener("click", reset);
container.appendChild(resetButton);
