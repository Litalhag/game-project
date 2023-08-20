const menu = document.getElementById("contextMenu");
const viewDet = document.getElementById("viewDetails");
const text = document.getElementById("copyText");

addEventListener("contextmenu", function (event) {
  event.preventDefault();
  menu.style.left = event.clientX + "px";
  menu.style.top = event.clientY + "px";
  menu.style.display = "block";
  addEventListener("click", function () {
    menu.style.display = "none";
  });
});
viewDet.addEventListener("click", function () {
  alert("view Details click!");
});
text.addEventListener("click", function () {
  alert("copy text click!");
});
