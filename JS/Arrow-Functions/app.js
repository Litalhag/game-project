//1

const getPlayerName = (player) => player.name;

// //2

function getPlayerHealth(health) {
  health > 70 ? "High" : health > 40 ? "Medium" : "Low";
}

// //3

const getTotalInventoryValue = (items) => {
  let totalValue = 0;
  for (let i = 0; i < items.length; i++) {
    totalValue += items[i].value;
  }
  return `Total inventory value is ${totalValue}`;
};

//4

let sortedItems = items.sort((a, b) => { // CR - why let? Only const!!!
  return b.value - a.value;
});

//5

const getItemNames = (items) => {
  items.map((item) => item.name);
};
