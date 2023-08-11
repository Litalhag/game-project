function createInventory() {
  let inventory = [];
  return {
    addItem(strToAdd) {
      inventory.push(strToAdd);
    },
    removeItem: function (strToRemove) {
      let index = inventory.indexOf(strToRemove);
      if (index !== -1) {
        inventory.splice(index, 1);
        console.log(`${strToRemove} removed from the inventory.`);
      } else {
        console.log(`${strToRemove} is not in the inventory.`);
      }
    },
    getItems() {
      return inventory;
    },
  };
}

const bag = createInventory();

console.log(bag);

bag.addItem("Axe");

bag.addItem("Shield");

console.log(bag);

console.log(bag.getItems());

bag.removeItem("Shield");

console.log(bag.getItems());

console.log(bag.inventory);
