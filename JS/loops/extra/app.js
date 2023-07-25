// 1. Move Player

function movePlayer(gamerGrid, playerPosition, direction) {
  if (direction === "north" && playerPosition.y - 1 >= 0) {
    playerPosition.y -= 1;
  } else if (direction === "south" && playerPosition.y + 1 < gameGrid.length) {
    playerPosition += 1;
  } else if (direction === "east" && playerPosition.x + 1 < gameGrid.length) {
    playerPosition.x += 1;
  } else if (direction === "west" && playerPosition.x - 1 >= 0) {
    playerPosition.x -= 1;
  } else {
    console.log("out of boundaries");
  }
  return playerPosition;
}

const gameGrid = [
  [0, 2, 0],
  [1, 3, 0],
  [0, 2, 0],
];

console.log(movePlayer(gameGrid, { x: 1, y: 1 }, "north"));

// 2. Battle Simulation

const battleSimulator = (playerHP, playerAttack, enemyHP, enemyAttack) => {
  while (playerHP > 0 && enemyHP > 0) {
    enemyHP -= playerAttack;
    if (enemyHP > 0) playerHP -= enemyAttack;
  }
  return playerHP > 0 ? "Player wins" : "Enemy wins";
};

console.log(battleSimulator(100, 20, 50, 15));

//3

function findEnemies(gameWorld) {
  const enemies = [];
  for (let y = 0; y < gameWorld.length; y++) {
    for (let x = 0; x < gameWorld[y].length; x++) {
      if (gameWorld[y][x] === 2) {
        enemies.push({ x: x, y: y });
      }
    }
  }
  return enemies;
}

const gameWorld = [
  [0, 2, 0],
  [1, 0, 0],
  [0, 2, 0],
];
const enemiesList = findEnemies(gameWorld);
console.log(enemiesList);

// 4

const findPathToGoal = (playerPosition, goalPosition) => {
const 
};

console.log(findPathToGoal({ x: 1, y: 1 }, { x: 0, y: 2 }));


const gameWorld2 = [
  [0, 2, 0],
  [1, 0, 0],
  [0, 2, 0],
];

