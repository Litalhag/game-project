//Step-1
class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.inventory = [];
  }
  attack(target) {
    target.health -= this.strength;
    console.log(this.name + " attacked: " + target.name);
    return `${this.name} attacks ${target.name}. ${target.name} has ${target.health} health left.`; // CR - the exercise says "It should return a string stating who attacked who and the remaining health of the target character."
    // CR- like this -  return `${this.name} attacks ${target.name}. ${target.name} has ${target.health} health left.`;
  }
  addItem(item) {
    this.inventory.push(item);
  }
  removeItem(item) {
    const index = this.inventory.indexOf(item);
    if (index !== -1) {
      this.inventory.splice(index, 1);
      console.log(`${this.name} removes ${item} from their inventory.`);
    } else {
      console.log(`${this.name} doesn't have ${item} in their inventory.`);
    }
  }
  displayCharacter() {
    console.log(`${this.name}'s Details:`);
    console.log(`Health: ${this.health}`);
    console.log(`Strength: ${this.strength}`);
    console.log(`Inventory: ${this.inventory.join(", ")}`);
  }
}

const character = new Character("nadia", 100, 100);
character.addItem("apple");
console.log(character);

const character2 = new Character("didi", 555, 333);
character2.addItem("peach");
character2.addItem("pear");
console.log(character2);

//step-2
class Player extends Character {
  constructor(name, health, strength, level) {
    super(name, health, strength);
    this.level = level;
  }
  upgrade() {
    this.level += 1;
    this._health += 10;
    this._strength += 5;
  }
}
class Enemy extends Character {
  constructor(name, health, strength, type) {
    super(name, health, strength);
    this.type = type;
  }
  displayCharacter() {
    super.displayCharacter() + console.log("The Type is:" + this.type); // CR - good job using super!
  }
}

const player1 = new Player("nadia", 100, 100, 5);
player1.addItem("banana");
player1.displayCharacter();
const enemy1 = new Enemy("dd", 100, 90, "happy");
enemy1.displayCharacter();

//Step 3
class Item {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
  use(target) {
    console.log("This item was used on:" + target.name);
  }
}
class HealthPotion extends Item {
  constructor(itemName, itemDescription) {
    // CR - no need if there is no additional properties. If a child class does not specify a constructor, then the default constructor is used.
    // This default constructor calls the parent class constructor with all of the provided arguments.
    super(itemName, itemDescription);
  }

  use(character) {
    // CR- no need to call super. Polymorphism means that the child changes the parent's implementation.
    character.health += 30;
    console.log(`${character.name} health is now ${character.health}.`);
  }
}
class StrengthElixir extends Item {
  constructor(itemName, itemDescription) {
    super(itemName, itemDescription);
  }

  use(character) {
    // CR- no need to call super. Polymorphism means that the child changes the parent's implementation.
    character.strength += 10;
    console.log(`${character.name}'s strength is now ${character.strength}.`);
  }
}

const player = new Character("Player", 100, 20);
const healthPotion = new HealthPotion();
const strengthElixir = new StrengthElixir();

healthPotion.use(player);
strengthElixir.use(player);
console.log(player);

class Game {
  constructor() {
    this.player = null;
    this.enemies = [];
    this.items = [];
  }
  startGame(playerName) {
    this.player = new Player(playerName, 100, 15, 1);
  }
  endGame() {
    this.player = null;
    this.enemies = [];
    this.items = [];
  }
  spawnEnemy(enemyName, enemyHealth, enemyStrength) {
    this.enemies.push(new Enemy(enemyName, enemyHealth, enemyStrength));
    /*
      CR - this version is more readable:
      const enemy = new Enemy(enemyName, enemyHealth, enemyStrength);
      this.enemies.push(enemy);
    */
  }
  spawnItem(itemName, itemDescription) {
    let item = null;
    if (itemName === "Health Potion") {
      item = new HealthPotion(itemName, itemDescription);
    } else if (itemName === "Strength Elixir") {
      item = new StrengthElixir(itemName, itemDescription);
    } else {
      item = new Item(itemName, itemDescription);
    }
    this.items.push(item);
  }
  playerPickUpItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.player.addItem(item);
      console.log(`${item} removed from Items.`);
    } else {
      console.log(`${item} not exists in Items.`);
    }
  }
  playerUseItem(item, target) {
    if (this.player.inventory.includes(item)) {
      item.use(target);
      this.player.removeItem(item);
    }
  }
  playerAttack(enemy) {
    return this.player.attack(enemy);
  }
}

const game1 = new Game();
game1.startGame("nadia");
// console.log("check function and start a game \n");
// console.log(game1);

game1.spawnEnemy("dd", 100, 60);
// console.log("check function spawn enemy :\n");
// console.log(game1);
game1.spawnItem("apple", "This item is so tasty");
game1.spawnItem("Health Potion", "this item help the health of player");
// console.log("check function and start a game \n");
// console.log(game1);
// console.log(
//   "check function remove item from the items , and add it to the player's inventory \n"
// );
game1.playerPickUpItem(game1.items[0]);
//console.log(game1);

game1.playerUseItem(game1.player.inventory[0], game1.enemies[0]);
//console.log(game1);

game1.playerAttack(game1.enemies[0]);
console.log(game1);
