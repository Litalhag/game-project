const enemies = [
  { id: 14, enemyName: "Voltron", health: 100 },
  { id: 20, enemyName: "ironMan", health: 100 },
  { id: 12, enemyName: "OptimusPrime", health: 100 },
];

function addHealth(newEnemies) {
  for (let enemy of newEnemies) {
    enemy.health += 30;
  }
}

function processEnemies(enemies, cb) {
  if (Array.isArray(enemies)) {
  } else {
    throw new Error("Expected an array of enemies");
  }
  for (let enemy of enemies) {
    if (enemy.hasOwnProperty("enemyName") && enemy.hasOwnProperty("health")) {
      console.log("shit");
    } else {
      throw new Error("Enemy the ID is not in the right structure");
    }
  }
  let newEnemies = JSON.parse(JSON.stringify(enemies));
  addHealth(newEnemies);

  return newEnemies;
}

console.log(processEnemies(enemies, addHealth));
