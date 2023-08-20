const textElement = document.querySelectorAll(".text");
window.addEventListener("scroll", function () {
  textElement.forEach((el) => {
    if (el.getBoundingClientRect().top < this.innerHeight) {
      el.classList.add("active");
    }
  });
});
