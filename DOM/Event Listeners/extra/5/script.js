const draggableDiv = document.querySelector(".draggable");
const sourceBox = document.querySelector("#sourceBox");
const targetBox = document.querySelector("#targetBox");

function dragOver(event) {
  event.preventDefault();
}
function dropFunc(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}

draggableDiv.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData("text", event.target.id);
});

targetBox.addEventListener("dragover", dragOver);
targetBox.addEventListener("drop", dropFunc);
sourceBox.addEventListener("dragover", dragOver);
sourceBox.addEventListener("drop", dropFunc);
