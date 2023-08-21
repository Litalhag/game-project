class Character {
  #health = 0;
  constructor(name, health, strength, defense) {
    this.name = name;
    this.#health = health;
    this.strength = strength;
    this.defense = defense;
  }
  get health() {
    return this.#health;
  }
  set health(characterHp) {
    return characterHp < 0 ? (this.#health = 0) : (this.#health = characterHp);
  }
  attack(target) {
    target.#health = target.#health + target.defense - this.strength;
    return `${this.name} attacked ${
      target.name
    } successfully and his remaining hp is ${target.#health}`;
  }
  receiveDamage(damage) {
    return this.#health < 1
      ? (this.#health -= damage)
      : `The damage of ${damage} is to great, insert a different number`;
  }
}

const theHero = new Character("Zidane Tribal", 100, 95, 50);
const theVillain = new Character("Necron", 100, 60, 70);
console.log(theHero.attack(theVillain));
console.log(theVillain.receiveDamage(200));
