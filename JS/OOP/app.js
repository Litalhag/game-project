// part 1
class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.inventory = [];
  }

  attack(target) {
    target.health -= this.strength;
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
    return `Character's name: ${this.name} , health points: ${this.health}  , strength points: ${this.strength} , items in the inventory: ${this.inventory}`;
  }
}

const cloud = new Character("CloudStrife", 100, 75, [
  "healing potion",
  "buster sword",
]);
const sephiroth = new Character("Sephiroth", 100, 10, [
  "The Masamune",
  "healing potion",
]);

//tests
console.log(cloud.attack(sephiroth));
cloud.addItem("iron shield");
cloud.addItem("strength potion");
console.log(cloud.removeItem("healing potion"));
console.log(cloud.displayCharacter());
console.log(cloud);
//part 2 - extending the character class and creating 2 new classes Player and Enemy Subclasses

class Player extends Character {
  constructor(name, health, strength, level) {
    super(name, health, strength);
    this.level = level;
  }

  upgrade() {
    this.level += 1;
    this.health += 10;
    this.strength += 5;
  }
}

const tifa = new Player("tifa lockhart", 100, 65, 99);

// player tests
console.log(tifa.upgrade());
console.log(tifa.upgrade());
console.log(tifa.upgrade());
console.log(tifa);

class Enemy extends Character {
  constructor(name, health, strength, type) {
    super(name, health, strength);
    this.type = type;
  }

  displayCharacter() {
    return (
      super.displayCharacter() +
      console.log(`Type of the enemy is: ${this.type}`)
    );
  }
}

const bahamut = new Enemy("Bahamut Zero", 100, 99, "mystical dragon");

//enemy tests

console.log(bahamut.displayCharacter());

// part 3 Item adding HealthPotion and StrengthElixir Classes

class Item {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
  use(target) {
    console.log(`${this.name} was used successfully on ${target.name}`);
  }
}

const hpBooster = new Item(
  "hp booster",
  " increase the hp by 70 health points"
);

hpBooster.use(sephiroth);

class HealthPotion extends Item {
  use(character) {
    const increasedHealth = character.health + 30;
    return `${this.name} was used successfully on ${character.name} and his hp is now ${increasedHealth}`;
  }
}

const hpPotion = new HealthPotion(
  "hp potion",
  " increase the hp by 30 health points"
);

console.log(hpPotion.use(cloud));

class StrengthElixir extends Item {
  use(character) {
    const increasedStrength = character.strength + 10;
    return `${this.name} was used successfully on ${character.name} and his strength is now ${increasedStrength}`;
  }
}

const strBooster = new StrengthElixir(
  "strength booster",
  "increase the strength by 30 points"
);

console.log(strBooster.use(cloud));
