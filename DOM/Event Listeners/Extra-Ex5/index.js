const myItem = document.getElementById("item");
const targetBox = document.getElementById("targetBox");
const sourceBox = document.getElementById("sourceBox");

myItem.addEventListener("dragstart", function (ev) {
  ev.dataTransfer.setData("text", ev.target.id);
});

targetBox.addEventListener("drop", function (ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
});

targetBox.addEventListener("dragover", function (ev) {
  ev.preventDefault();
});

sourceBox.addEventListener("drop", function (ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
});

sourceBox.addEventListener("dragover", function (ev) {
  ev.preventDefault();
});
