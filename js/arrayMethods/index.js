const players = [
    {
      name: "Hero",
      health: 100,
      level: 1,
      location: "forest",
      inventory: ["sword", "health potion"],
    },
    {
      name: "Warrior",
      health: 120,
      level: 2,
      location: "mountain",
      inventory: ["axe", "shield"],
    },
    {
      name: "Mage",
      health: 80,
      level: 3,
      location: "castle",
      inventory: ["staff", "spell book"],
    },
    {
      name: "Ranger",
      health: 90,
      level: 2,
      location: "forest",
      inventory: ["bow", "arrows"],
    },
    {
      name: "Thief",
      health: 70,
      level: 1,
      location: "cave",
      inventory: ["dagger", "lockpick"],
    },
  ];
// 1
const arrOfPlayers= players=> players.map(player=> player.name);
// check
console.log(arrOfPlayers(players));

// 2
const arrPlayerLevel=(players,minLevel)=>
players.filter(player=>player.level>=minLevel);
// check
console.log(' question 2');
console.log(arrPlayerLevel(players,2));

// 3
const totalHealth=players=>players.reduce((totalHealth,player)=>totalHealth+player.health,0);
// check
console.log(' question 3');
console.log(totalHealth(players));

// 4
const namesAndLevels= players=>players.map(player=>`${player.name} - level ${player.level}`);
// check
console.log(' question 4');
console.log(namesAndLevels(players));

// 5
const updatePlayerHealth= (players,newHealth,playerName)=> players.map (player=> {
    if (player.name===playerName) return{
        ...player,
        health: newHealth,
    };
    else return player ;
});
// check
console.log(' question 5');
console.log(updatePlayerHealth(players,150,'Hero'));

// 6
const filterByLocation= (players,location)=> players.filter(player=>player.location===location);
// check
console.log(' question 6');
console.log(filterByLocation(players,'forest'));

// 7
const averageLevel=players=>players.reduce((sumLevel,player)=>sumLevel+player.level,0)/players.length;
// check
console.log('question 7');
console.log(averageLevel(players));

// 8
const sortedHealth= players=> players.slice().sort((a,b)=>b.health-a.health); 
console.log('question 8');
console.log(sortedHealth(players));

//9 
const inventoryArr= players=>players.map(player=> player.inventory);
// check
console.log('question 9');
console.log(inventoryArr(players));







