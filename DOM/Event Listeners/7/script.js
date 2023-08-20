const showModalBtn = document.querySelector("#showModalBtn");
const overlay = document.querySelector("#overlay");
const modal = document.querySelector("#modal");
showModalBtn.addEventListener("click", function () {
  overlay.style.display = "block";
});
overlay.addEventListener("click", function (event) {
  if (event.target.id === "overlay" || event.target.id === "closeBtn") {
    this.style.display = "none";
  }
});
