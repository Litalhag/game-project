const characters = document.querySelectorAll('.character');
const positions = [0, 1, 2];
console.log(characters); // for testing only

function updateCarousel() {
  characters.forEach((character, index) => {
    const currentCharPosition = positions[index];
    console.log(currentCharPosition);
  });
}

updateCarousel();
