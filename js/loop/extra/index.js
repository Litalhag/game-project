const movePlayer = (gameWorldGrid, currentPosition, direction) => {
    // CR - Use the triple equals (===) for comparison, not the assignment operator (=)
    if (direction = 'north' && currentPosition.x > 0) { // CR - This should be if (direction === 'north' && currentPosition.x > 0)
        currentPosition.x--; // CR - This is correct for moving north
    }
    // CR - Use the triple equals (===) for comparison, not the assignment operator (=)
    if (direction = 'south' && currentPosition.x < gameWorldGrid.length - 1) { //CR - This should be if (direction === 'south' && currentPosition.x < gameWorldGrid.length - 1)
        currentPosition.x++; // CR - This is correct for moving south
    }
    // CR - Use the triple equals (===) for comparison, not the assignment operator (=)
    if (direction = 'east' && currentPosition.y > 0) { // CR - This should be if (direction === 'east' && currentPosition.y < gameWorldGrid[0].length - 1)
        currentPosition.y--; // CR - This should be currentPosition.y++ for moving east
    }
    // CR - Use the triple equals (===) for comparison, not the assignment operator (=)
    if (direction = 'west' && currentPosition.y > gameWorldGrid[currentPosition.x].length - 1) { // CR - This should be if (direction === 'west' && currentPosition.y > 0)
        currentPosition.y++; // CR - This should be currentPosition.y-- for moving west
    }
    return currentPosition;
}
// 1
// 2D grid representing the game world
const grid = [
  [0, 2, 0],
  [1, 3, 0],
  [0, 2, 0]
];

// Player's current position
const playerPosition = { x: 1, y: 1 };

// 2
// Player's HP and Attack Power
const playerHP = 100;
const playerAttack = 20;

// Enemy's HP and Attack Power
const enemyHP = 50;
const enemyAttack = 15;

const battleSimulation=(playerHP,playerAttack,enemyHP,enemyAttack)=>{
    while (playerHP>=enemyAttack&& enemyHP>=playerAttack){
        enemyHP-=playerAttack;
        playerHP-=enemyAttack;
    }
    return enemyHP<playerHP? 'player wins': 'enemy wins';
}

// check
console.log(battleSimulation(100,20,50,50));
