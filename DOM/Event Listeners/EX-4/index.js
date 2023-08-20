const paragraphes = document.querySelectorAll(".highlightable");
const container = document.querySelector(".container");

paragraphes.forEach((p) => {
  p.addEventListener("mouseover", function () {
    p.classList.add("highlighted");
  });
});

paragraphes.forEach((p) => {
  p.addEventListener("mouseout", function () {
    p.classList.remove("highlighted");
  });
});
