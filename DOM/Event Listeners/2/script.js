const container = document.querySelector(".faq-container");
container.addEventListener("click", function (event) {
  const clickedFaqItem = event.target;
  clickedFaqItem.parentElement.classList.toggle("active");
});
