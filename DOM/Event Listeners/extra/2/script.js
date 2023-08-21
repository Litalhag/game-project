const characters = document.querySelectorAll(".character");
console.log(characters);
const positions = [0, 1, 2];

function updateCarousel() {
  characters.forEach((char, i) => {
    const pos = positions[i];
    char.style.transform = `translateX(${(pos - 1) * 180}px)`;
    // char.style.transform += pos === 1 ? "scale(1.2)" : "";
    if (pos === 1) {
      char.style.transform += "scale(1.2)";
      char.style.zIndex = "2";
      char.classList.add("character-center");
    } else {
      char.style.transform += "";
      char.style.zIndex = "1";
      char.classList.remove("character-center");
    }
  });
}

updateCarousel();

characters.forEach((char, i) => {
  char.addEventListener("click", function () {
    let times;
    const pos = positions[i];
    if (pos === 1) return;
    else {
      if (pos == 2) times = 2;
      else if (pos == 0) times = 1;
      for (let j = 0; j < times; j++) {
        positions.push(positions.shift());
      }
    }
    updateCarousel();
  });
});
