function processEnemies(enemies, callback) {
  // Task 1: Check if the first argument is an array
  if (!Array.isArray(enemies)) {
    throw new Error("Expected an array of enemies");
  }

  // Task 3: Clone the array to avoid mutating the original one
  const newEnemies = JSON.parse(JSON.stringify(enemies));

  const results = [];

  // Task 2: Check if each object contains the properties name and health
  for (const enemy of newEnemies) {
    if (!enemy.hasOwnProperty("name") || !enemy.hasOwnProperty("health")) {
      throw new Error(
        `Enemy with ID ${enemy.id} is not in the right structure`
      );
    } else {
      results.push(callback(enemy));
    }
  }

  // Task 5: Return the new array
  return results;
}

const enemies = [
  { name: "Enemy 1", health: 80 },
  { name: "Enemy 2", health: 120 },
  { name: "Enemy 3", health: 65 },
];

const newEnemies = processEnemies(enemies, (enemy) => {
  return {
    ...enemy,
    health: 800,
  };
});

console.log(newEnemies);
// Sample callback function
function printEnemyDetails(enemy) {
  //   console.log(`Enemy ${enemy.name} has health: ${enemy.health}`);
}

// Calling processEnemies with the sample array and callback
try {
  const newEnemiesArray = processEnemies(enemies, printEnemyDetails);
  //   console.log(newEnemiesArray);
} catch (error) {
  //   console.error(error.message);
}

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// for (let i = 0; i < 5; i++) {
//   const index = i;
//   console.log(index);
// }
