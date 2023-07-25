// 1
// 2D grid representing the game world
const grid = [
    [0, 2, 0],
    [1, 3, 0],
    [0, 2, 0]
  ];
  
  // Player's current position
  const playerPosition = { x: 1, y: 1 };
  
  const movePlayer = (gameWorldGrid, currentPosition, direction) => {
    if (direction === 'north' && currentPosition.x > 0) { 
        currentPosition.y--; 
    }
    else if (direction = 'south' && currentPosition.x < gameWorldGrid.length - 1) { 
        currentPosition.y++; 
    }
    else if (direction = 'west' && currentPosition.y > 0) { 
        currentPosition.x--; 
    }
    else if (direction = 'east' && currentPosition.y < gameWorldGrid[currentPosition.x].length - 1) { 
        currentPosition.x++; 
    }
    else console.log('not legal');
    return currentPosition;
}
// check
console.log(movePlayer(grid,playerPosition,'north'));

// 2
// Player's HP and Attack Power
const playerHP = 100;
const playerAttack = 20;

// Enemy's HP and Attack Power
const enemyHP = 50;
const enemyAttack = 15;

const battleSimulation1=(playerHP,playerAttack,enemyHP,enemyAttack)=>{
    // CR - Problem: Check if players are alive, not if they can withstand the next attack
    while (playerHP>=enemyAttack&& enemyHP>=playerAttack){
        enemyHP-=playerAttack; // CR - Correct: Decrease enemy's health by player's attack
        playerHP-=enemyAttack; // CR -Correct: Decrease player's health by enemy's attack
    } 
    // CR - Problem: If both die together, player should win as they attack first
    return enemyHP<playerHP? 'player wins': 'enemy wins';
}
// CR - Here's the corrected code:
const battleSimulation=(playerHP,playerAttack,enemyHP,enemyAttack)=>{
    while (playerHP > 0 && enemyHP > 0){
        enemyHP -= playerAttack;
        if (enemyHP > 0) playerHP -= enemyAttack;
    }
    return playerHP > 0 ? 'Player wins' : 'Enemy wins';
}
// check
console.log('question 2');
console.log(battleSimulation(100,20,50,15));

// 3

const findEnemies=(arr)=>{
    const newArr=[];
    for (let i=0; i<arr.length; i++){
        for (let j=0; j<arr[0].length; j++){
            if (arr[i][j]===2){
                newArr.push({x:j, y:i});
            }
        }
    }
    return newArr;
}
// check
console.log('question 3');
console.log(findEnemies(grid));

// 4
const pathToGoal=(current,goal)=>{
    const pathArr=[];
    while (current.x!==goal.x || current.y!==goal.y){
        if (current.x>goal.x){
            current.x--;
            pathArr.push('west');
        }
        else if (current.x<goal.x){
            current.x++;
            pathArr.push('east');
        }
        else if (current.y<goal.y){
            current.y++;
            pathArr.push('south');
        }
        else if (current.y>goal.y){
            current.y--;
            pathArr.push('north');
        }
    }
    return pathArr;
}

// check
console.log(pathToGoal({x:0,y:1},{x:0,y:2}));