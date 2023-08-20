// Get references to carousel elements
const carouselContainer = document.getElementById("carousel-container");
const carousel = document.getElementById("carousel");
const characters = Array.from(document.querySelectorAll(".character"));

// Initialize positions array
const positions = [0, 1, 2];

// Update carousel function
function updateCarousel() {
  characters.forEach((character, index) => {
    const pos = positions[index];

    // Apply translation and scaling based on the position
    character.style.transform = `translateX(${(pos - 1) * 180}px) scale(${
      pos === 1 ? 1.2 : 1
    })`;

    character.classList.toggle("character-center", pos === 1);
  });
}

// Handle character clicks
characters.forEach((character, index) => {
  character.addEventListener("click", () => {
    if (positions[index] === 1) {
      return; // Do nothing if the clicked character is already in the center
    }

    // Determine the clicked position and rotations
    const clickedPosition = positions[index];
    const rotations = clickedPosition === 0 ? 1 : 2;

    // Rotate the positions array
    for (let i = 0; i < rotations; i++) {
      positions.push(positions.shift());
    }

    // Update the carousel to reflect the changes
    updateCarousel();
  });
});

// Initial setup of the carousel
updateCarousel();
