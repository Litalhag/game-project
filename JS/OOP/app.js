class Character {
  constructor(name, health, strenght, inventory = []) {
    this.name = name;
    this.health = health;
    this.strenght = strenght;
    this.inventory = inventory;
  }

  attack(target) {
    let targetRemaingHp = target.health - this.strenght;
    return `${this.name} attacked ${target.name} successfully and his remaining hp is ${targetRemaingHp}`;
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

console.log(cloud, sephiroth);

console.log(cloud.attack(sephiroth));
