const button = document.querySelector("#clickButton");
button.addEventListener("click", function () {
  const counter = document.querySelector("#counter");
  currentCount = parseInt(counter.innerText);
  console.log("itt", currentCount);
  currentCount++;
  counter.innerText = currentCount;
});
const container = document.querySelector(".container");
const resetButton = document.createElement("button");
resetButton.innerText = "reset";
container.appendChild(resetButton);
resetButton.addEventListener("click", function () {
  counter.innerText = 0;
});
