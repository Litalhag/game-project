class Character {
    #health=0;
    constructor (name,health,strength,defense){
        this.name=name;
        this.#health=health;
        this.strength=strength;
        this.defense=defense;
        this.quests=[];
    }
    get health(){
        return this.#health;
    }
    set health(newHealth){
        newHealth<0 ? this.#health=0: this.#health=newHealth;
    }
    attack (target){
        if (target instanceof Character && target!== this){
            let damage=this.strength-target.defense;
            damage= damage<0 ? 0 : damage;
            target.receiveDamage(damage);
        }
    }
    receiveDamage (damage){
        this.#health-=damage;
        if (this.#health<0) this.#health=0;

    }
    displayStats(){
        console.log(`character: ${this.name}, health: ${this.#health}, strength: ${this.strength}, defense: ${this.defense}.`);
    }
    characterType(){
        return 'This is a basic character.';
    }
    acceptQuest (quest){
        this.quests.push(new Quest(quest));
    }
}
// check
console.log("== Testing Character ==");
const basicChar = new Character("John", 100, 50, 20);
basicChar.displayStats();
const basicChar2 = new Character("Haim", 40, 50, 0);
basicChar.attack(basicChar2);
basicChar2.displayStats();
console.log(basicChar.health);
basicChar.receiveDamage (150);
basicChar.displayStats();
// end of check

class Knight extends Character{
    constructor (name,health,strength,defense,armor){
        super (name,health,strength,defense)
        this.armor=armor;
    }
    shieldAttack (target){
        if (target instanceof Character && target !==this){
            let damage=this.strength+this.armor-target.defense;
            damage= damage<0? 0 :damage;
            target.receiveDamage(damage);
        }
    }
    displayStats(){
        const info=super.displayStats;
        return `${info} and armor: ${this.armor}`;
    }
    characterType (){
        return 'This is a knight.';
    }
}
class Mage extends Character{
    constructor (name,health,strength,defense,mana){
        super (name,health,strength,defense)
        this.mana=mana;
    }
    castSpell (target){
        if (target instanceof Character && target !==this && this.mana>10){
            let damage=this.strength+10;
            this.mana-=10;
            damage= damage<0? 0 :damage;
            target.receiveDamage(damage);
        }
    }
    displayStats(){
        const info=super.displayStats;
        return `${info} and mana: ${this.mana}`;
    }
    characterType (){
        return 'This is a mage.';
    }
}
class Quest {
    constructor (name, description, reward,requiredEnemies){
        this.name=name;
        this.description=description;
        this.reward=reward;
        this.requiredEnemies=requiredEnemies;
        this.completed=false;
    }
    completeQuest(){
        this.completed=true;
    }
}