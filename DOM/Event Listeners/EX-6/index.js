const texts = document.querySelectorAll(".text");

window.addEventListener("scroll", function () {
  texts.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
});
