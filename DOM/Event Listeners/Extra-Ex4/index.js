const filterInput = document.getElementById("filterInput");
const items = document.querySelectorAll(".item");

filterInput.addEventListener("keyup", function () {
  const lowerCaseInput = filterInput.value.toLowerCase();
  items.forEach((item) => {
    if (!item.innerText.toLowerCase().includes(lowerCaseInput)) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
});
