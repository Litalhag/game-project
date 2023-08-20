const input = document.querySelector("#filterInput");
const listItems = document.querySelectorAll(".item");
input.addEventListener("keyup", function () {
  const text = this.value.toLowerCase();
  for (item of listItems) {
    if (item.innerText.toLowerCase().indexOf(text) === -1) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  }
});
