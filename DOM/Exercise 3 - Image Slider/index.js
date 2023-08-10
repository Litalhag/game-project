const slides = document.querySelectorAll(".slider img");
const currentIndex = 0;

function moveSlide(direction) {
  slides[currentIndex].classList.remove("active");
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex >= slides.length) {
    currentIndex = slides.length - 1;
  }
}
