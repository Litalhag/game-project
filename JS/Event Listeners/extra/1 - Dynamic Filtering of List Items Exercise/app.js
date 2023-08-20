const data = {
  fruits: ['Apple', 'Banana', 'Cherry'],
  vegetables: ['Carrot', 'Broccoli', 'Lettuce'],
  dairy: ['Milk', 'Cheese', 'Yogurt'],
};

const categories = document.querySelector('.categories');
const items = document.querySelector('#items');

console.log(categories, items);

categories.addEventListener('click', function (event) {
  const clickedItem = event.target;
  let value = clickedItem.getAttribute('data-category');
  const selectedCategory = data[value];
  console.log(selectedCategory); // for testing only
  items.innerHTML = '';
  selectedCategory.forEach((category) => {
    const newItem = document.createElement('div');
    newItem.innerHTML = category;
    newItem.classList.add('item');
    items.appendChild(newItem);
  });
});
