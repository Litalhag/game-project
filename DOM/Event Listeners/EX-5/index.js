const divkeydisplay = document.getElementById("keyDisplay");

addEventListener("keydown", (event) => {
  divkeydisplay.textContent = event.key;
  if (event.key === " ") {
    divkeydisplay.textContent = "Space";
  } else {
    divkeydisplay.textContent = event.key;
  }
});
