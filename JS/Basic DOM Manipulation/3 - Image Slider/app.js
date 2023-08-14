// Initialization

const slides = document.querySelectorAll("img");

console.log(slides);

const currentIndex = 0;
console.log(currentIndex);

const moveSlide = (direction) => {
  slides.remove(".active");
  slides.forEach((img, idx) => {
    console.log(img);
  });
};
moveSlide();
