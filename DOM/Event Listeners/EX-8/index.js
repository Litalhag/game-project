const parentElement = document.getElementById("navList");
const massage = document.getElementById("message");

parentElement.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    const clicked = event.target.dataset.link;
    if (clicked) {
      massage.style.display = "block";
      massage.textContent = `You clicked the ${clicked} link.`;
      setTimeout(function () {
        massage.textContent = "";
      }, 2000);
    }
  }
});
