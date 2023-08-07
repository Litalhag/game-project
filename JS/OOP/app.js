class Character {
  constructor(name, health, strenght, inventory = []) {
    this.name = name;
    this.health = health;
    this.strenght = strenght;
    this.inventory = inventory;
  }

  attack(target) {
    target.health -= this.strenght;
    return `${this.name} attacked ${target.name} successfully and his remaining hp is ${target.health}`;
  }

  addItem(item) {
    return this.inventory.push(item);
  }
  removeItem(item) {
    if (this.inventory.indexOf(item) !== -1) {
      const idx = this.inventory.indexOf(item);
      return this.inventory.splice(idx, 1);
    } else {
      return `The ${item} that you insert wasn't found and can't be removed insert a different item`;
    }
  }

  displayCharacter() {
    return `The character is ${this.name} he has ${this.health} hp , ${
      this.strenght
    } attack power and has ${this.inventory.join(" and ")} in his inventory`;
  }
}

const cloud = new Character("CloudStrife", 100, 75, [
  "buster sword",
  "healing potion",
]);
const sephiroth = new Character("Sephiroth", 100, 10, [
  "The Masamune",
  "healing potion",
]);

//tests
console.log(cloud.attack(sephiroth));
cloud.addItem("iron shield");
console.log(cloud);
console.log(cloud.removeItem("healing potion"));
console.log(cloud);
console.log(cloud.removeItem("healing potion"));
console.log(cloud);
console.log(cloud.displayCharacter());
