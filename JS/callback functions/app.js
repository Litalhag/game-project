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
      console.log("it works");
    } else {
      throw new Error(`Enemy the ID ${enemy.id} is not in the right structure`);
    }
  }
  let newEnemies = JSON.parse(JSON.stringify(enemies));
  addHealth(newEnemies);

  return newEnemies;
}

console.log(processEnemies(enemies, addHealth));

//2

const quests = [
  { id: 1, questName: "collect mushrooms", experience: 100 },
  { id: 2, questName: "buy items", experience: 90 },
  { id: 3, questName: "collect apples", experience: 80 },
];

function addExp(newQuests) {
  for (let quest of newQuests) {
    quest.experience += 100;
  }
}

function processQuests(quests, addExp) {
  if (Array.isArray(quests)) {
  } else {
    throw new Error("Expected an array of quests");
  }
  for (let quest of quests) {
    if (
      quest.hasOwnProperty("questName") &&
      quest.hasOwnProperty("experience")
    ) {
      console.log("it works");
    } else {
      throw new Error(`Enemy the ID ${quest.id} is not in the right structure`);
    }
  }
  let newQuests = JSON.parse(JSON.stringify(quests));
  addExp(newQuests);

  return newQuests;
}

console.log(processQuests(quests, addExp));
