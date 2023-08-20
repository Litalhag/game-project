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
  let times;
  char.addEventListener("click", function () {
    if (char.classList.contains("character-center")) return;
    else {
      console.log("i:", i);
      times = i - positions.indexOf(1) < 1 ? 2 : 1;
      // times = Math.abs(positions.indexOf(1) - i);
      // times = i === 0 ? 1 : 2;
      console.log(times);
      // if (event.target.id === "char1") times = 2;
      // else if (event.target.id === "char3") times = 1;
      for (let j = 0; j < times; j++) {
        positions.push(positions.shift());
        console.log(positions);
      }
    }
    updateCarousel();
  });
});
