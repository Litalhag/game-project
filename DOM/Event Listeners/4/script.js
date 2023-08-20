const allP = document.querySelectorAll(".highlightable");
allP.forEach((p) => {
  p.addEventListener("mouseover", function () {
    this.classList.add("highlighted");
  });
  p.addEventListener("mouseout", function () {
    this.classList.remove("highlighted");
  });
});
