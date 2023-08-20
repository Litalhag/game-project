const heading = document.querySelector("h1");
const contextmenu = document.querySelector("#contextMenu");
heading.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  contextmenu.style.top = `${event.pageY}px`;
  contextmenu.style.left = `${event.pageX}px`;
  contextmenu.style.display = "block";
});
document.addEventListener("click", function () {
  contextmenu.style.display = "none";
});
const viewDetails = document.querySelector("#viewDetails");
const copyText = document.querySelector("#copyText");
viewDetails.addEventListener("click", function () {
  alert("you clicked view details");
});
copyText.addEventListener("click", function () {
  alert("you clicked copy text");
});
