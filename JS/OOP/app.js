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

// part 4 game class

class Game {
  constructor() {
    (this.player = null), (this.enemies = []), (this.items = []);
  }
  startGame(playerName) {
    this.player = new Player(playerName, 100, 80, 50);
    console.log(this.player);
  }
  endGame() {
    this.player = null;
    this.enemies = [];
    this.items = [];
  }
  spawnEnemy(enemyName, enemyHealth, enemyStrength) {
    const newEnemy = new Enemy(enemyName, enemyHealth, enemyStrength, "Beast");
    this.enemies.push(newEnemy);
    console.log(this.enemies);
  }
  spawnItem(itemName, itemDescription) {
    let item;
    if (itemName === "Health Potion") {
      const newHpPotion = new HealthPotion(itemName, itemDescription);
      item = newHpPotion;
    } else if (itemName === "Strength Elixir") {
      const newStrBooster = new StrengthElixir(itemName, itemDescription);
      item = newStrBooster;
    } else {
      const newItem = new Item(itemName, itemDescription);
      item = newItem;
    }
    this.items.push(item);
    console.log(this.items);
  }
  playerPickUpItem(item) {
    const idx = this.items.indexOf(item);
    if (idx !== -1) {
      this.items.splice(idx, 1);
      this.player.addItem(item);
      return `The ${item} that you insert was removed successfully and was added to the ${this.player.name} inventory`;
    } else {
      console.log(this.items);
      return `The ${item} that you insert wasn't found and can't be removed insert a different item`;
    }
  }
  playerUseItem(item, target) {
    if (this.player.inventory.includes(item)) {
      item.use(target);
      this.player.removeItem(item);
    }
  }
  playerAttack(enemy) {
    this.player.attack(enemy);
  }
}

const firstGame = new Game();

//tests
firstGame.startGame("Barret Wallace");
firstGame.spawnEnemy("behemoth", 200, 150);
firstGame.spawnItem("Strength Elixir", "increase the strength by 60 points");
console.log(firstGame.playerPickUpItem(firstGame.items[0]));
firstGame.playerUseItem(firstGame.player.inventory[0], firstGame.enemies[0]);
firstGame.playerAttack(firstGame.enemies[0]);
console.log(firstGame);
