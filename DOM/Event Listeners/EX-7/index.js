const showModalBtn = document.getElementById("showModalBtn");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");

showModalBtn.addEventListener("click", function () {
  overlay.style.display = "block";
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  overlay.style.display = "none";
  modal.style.display = "none";
});

overlay.addEventListener("click", function (event) {
  if (event.target === overlay) {
    overlay.style.display = "none";
    modal.style.display = "none";
  }
});
