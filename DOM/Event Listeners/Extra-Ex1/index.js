const container = document.querySelector(".container");
const categories = document.getElementById("categories");
const items = document.querySelector(".items");

const data = {
  fruits: ["Apple", "Banana", "Cherry"],
  vegetables: ["Carrot", "Broccoli", "Lettuce"],
  dairy: ["Milk", "Cheese", "Yogurt"],
};

categories.addEventListener("click", function (event) {
  items.innerHTML = "";
  const clickedCategory = event.target.closest(".category");
  const itemsList = data[clickedCategory.dataset.category];
  itemsList.forEach((item) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = item;
    items.appendChild(newDiv);
  });
});
