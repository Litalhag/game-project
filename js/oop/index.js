// step 1
class Character{
    constructor(name,health,strength){
        this.name=name;
        this.health=health;
        this.strength=strength;
        this.inventory=[];
    }
    attack (target){
        target.health-=this.strength;
        return `${this.name} attacked ${target.name}, ${target.name} remaining health is ${target.health}`
    }
    addItem (item){
        this.inventory.push(item);
    }
    removeItem(item){
        const i=this.inventory.indexOf(item);
        i!=='-1'? this.inventory.splice(i,1): console.log (`${item.name} not found in the inventory`);
    }
    displayCharacter (){
        return `characters name is ${this.name}, health: ${this.health}, strength points ${this.strength} and inventory: ${this.inventory.map (item=>item.name).join(',')}`;
    }
};
// check
// const char=new Character ('maria',100,50);
// char.addItem({name:'Health Potion', description:'A potion that restores 30 health.'})
// console.log(char);
// char.removeItem({name:'Health Potion', description:'A potion that restores 30 health.'})
// console.log(char);
// console.log(char.displayCharacter());
// end of check


// step 2
class Player extends Character{
    constructor(name,health,strength,level){
        super (name,health,strength);
        this.level=level;
    }
    upgrade (){
        this.level=+1;
        this.health+=10;
        this.strength+=5;
    }
};

// check
// const player1=new Player ('maria',100,50,1);
// console.log(player1);
// end of check

class Enemy extends Character{
    constructor(name,health,strength,type){
        super (name,health,strength);
        this.type=type;
    }
    displayCharacter (){
        return `characters name is ${this.name}, health: ${this.health}, strength points ${this.strength}, inventory: ${this.inventory.map(item=>item.name).join(',')} and type ${this.type}`;
    }
};


// step 3
class Item {
    constructor (name,description){
        this.name=name;
        this.description=description;
    }
    use (target){
        console.log(`the ${this.name} is being used on ${target.name}`);
    }
};

class HealthPotion extends Item {
    use (target){
        target.health+=30;
    }
}

class StrengthElixir extends Item{
    use (target){
        target.strength+=10;
    }
}

// step 4
class Game {
    constructor () {
        this.player=null;
        this.enemies=[];
        this.items=[];
    }
    startGame (playerName){
        this.player=new Player(playerName,100,10,1);
    }
    endGame (){
        this.player=null;
        this.enemies=[];
        this.items=[];
    }
    spawnEnemy (enemyName,enemyHealth,enemyStrength){
        this.enemies.push(new Enemy(enemyName,enemyHealth,enemyStrength));
    }
    spawnItem(itemName, itemDescription){
        let item;
        if (itemName==='Health Potion'){
            item=new HealthPotion(itemName,itemDescription);
        }
        else if (itemName==='Strength Elixir'){
            item=new StrengthElixir(itemName,itemDescription);
        }
        else 
            item=new Item(itemName,itemDescription);
        this.items.push(item);
    }
    playerPickUpItem (item){
        this.player.addItem(item);
        const i=this.items.indexOf(item);
        i!=='-1'? this.items.splice(i,1): console.log (`${item} not found`);
    }
    playerUseItem (item,target){
        this.player.removeItem(item);
        item.use(target);
    }
    playerAttack (enemy) {
        this.player.attack(enemy);
    }

}

// check
// Instantiate a new game
const game = new Game();

// Start the game with a player
console.log("Starting game with player 'John'");
game.startGame("John");
console.log(game.player.displayCharacter());

// Spawn an enemy
console.log("Spawning enemy 'Goblin'");
game.spawnEnemy('Goblin', 50, 5, 'Goblin');
console.log(game.enemies[0].displayCharacter());

// Player attacks the enemy
console.log("Player attacks Goblin");
console.log(game.playerAttack(game.enemies[0]));

// Spawn items
console.log("Spawning items 'Health Potion' and 'Strength Elixir'");
game.spawnItem('Health Potion', 'A potion that restores 30 health.');
game.spawnItem('Strength Elixir', 'An elixir that increases strength by 10.');
console.log(`Spawned Items: ${game.items.map(item => item.name).join(', ')}`);

// Player picks up items
console.log("Player picks up Health Potion and Strength Elixir");
game.playerPickUpItem(game.items[0]);
game.playerPickUpItem(game.items[0]);
console.log(game.player.displayCharacter());

// Player uses the health potion
console.log("Player uses Health Potion");
game.playerUseItem(game.player.inventory[0], game.player);
console.log(game.player.displayCharacter());

// Player uses the strength elixir
console.log("Player uses Strength Elixir");
game.playerUseItem(game.player.inventory[0], game.player);
console.log(game.player.displayCharacter());

// Player upgrades level
console.log("Player upgrades level");
game.player.upgrade();
console.log(game.player.displayCharacter());

// End the game
console.log("Ending game");
game.endGame();