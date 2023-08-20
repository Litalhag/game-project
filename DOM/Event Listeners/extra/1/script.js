const data = {
  fruits: ["Apple", "Banana", "Cherry"],
  vegetables: ["Carrot", "Broccoli", "Lettuce"],
  dairy: ["Milk", "Cheese", "Yogurt"],
};
const categories = document.querySelector("#categories");
const items = document.querySelector("#items");
categories.addEventListener("click", function (event) {
  const selectedCategory = event.target.dataset.category;
  const selectedArr = data[selectedCategory];
  items.innerHTML = "";
  selectedArr.forEach((itemName) => {
    const item = document.createElement("div");
    item.innerText = itemName;
    item.classList.add("item");
    items.appendChild(item);
  });
});
