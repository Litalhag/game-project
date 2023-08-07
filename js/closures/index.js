// Exercise 1: Creating a Player Character

function createPlayerCharacter(name,level) {
    let xp=0;
    
    return {
        level,
        xp,
        levelUp () {
            this.level=level+1;
            console.log(`Hero leveled up to level ${this.level}!`);
        },
        addXP(passedXP) {
            this.xp+=passedXP;
            console.log(`the XP added ${passedXP}`);
        },
        getName() {return name},    
    };
};

let playerCharacter = createPlayerCharacter("Hero",1);
playerCharacter.levelUp();
playerCharacter.addXP(100);
console.log(playerCharacter);
console.log(playerCharacter.getName());
console.log('-----------------------------------------------');

// 2
function createInventory (){
    const inventory=[];
    return{
            addItem (item) {
            inventory.push(item);
            console.log(`${item} added to the inventory`);
            },
            removeItem (item) {
                const i=inventory.indexOf(item);
                if (i!==-1){
                    inventory.splice(i,1);
                    console.log(`${item} was removed`);
                }
                    else 'item doesnt exist';
            },
            getItems (){ return inventory},
        };
};
let inventory = createInventory();

inventory.addItem("Sword");
inventory.addItem("Shield");
console.log(inventory.getItems());
inventory.removeItem("Sword");
console.log(inventory.getItems());
console.log('-----------------------------------------------');

// 3
function createAbility (name,power){
    return{
        name,
        power,
        useAbility(){
            console.log(`the ability is ${name} and its power is ${power}`);
        }
    };
};

const ability=createAbility("Fireball", 30);
ability.useAbility();
console.log('-----------------------------------------------');
// 4
function createEnemy(name,health){
    return{
        name,
        health,
        attack () {
            console.log ('the enemy is attacking');
        },
        reduceHealth (damage){
            if (!this.isDefeated(damage)){
                this.health-=damage;
                console.log(`remaining health is ${this.health}`);
            }
            else console.log('the enemy is defeated');
        },
        isDefeated(damage){
            return this.health<damage? true : false;
        }
    }
}

const enemy=createEnemy('enemyName',100);
enemy.reduceHealth(120);