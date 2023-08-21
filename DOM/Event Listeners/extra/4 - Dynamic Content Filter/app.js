const filterInput = document.querySelector('#filterInput');
const itemList = document.querySelectorAll('.item');
console.log(itemList);

filterInput.addEventListener('keyup', function () {
  let inputVal = filterInput.value.toLowerCase();
  console.log(inputVal); // for testing
  itemList.forEach((item) => {
    if (item.innerText.toLowerCase().indexOf(inputVal) === -1) {
      item.style.display = 'none';
    } else {
      item.style.display = 'block';
    }
  });
});
