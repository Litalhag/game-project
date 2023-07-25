//Ex - 1;
const calculatesTheTotal = (quests) => {
  let totalExperience = 0;
  for (const quest of quests) {
    if (quest.experience) {
      totalExperience += quest.experience;
    }
  }
  return totalExperience;
}; // CR - great!
console.log(
  calculatesTheTotal([
    { name: "Quest 1", experience: 100 },
    { name: "Quest 2", experience: 150 },
    { name: "Quest 3", experience: 75 },
  ])
);

//Ex.2
const questByName = (quests, questName) => {
  for (const quest of quests) {
    if (quest.name === questName) {
      return quest;
    }
  }
  return null; // CR - great!!! It is important to deal with a situation that there is no match. Great thinking 💪🏻
};
const quests = [
  { name: "Quest 1", experience: 100 },
  { name: "Quest 2", experience: 150 },
  { name: "Quest 3", experience: 75 },
];

const questNameToFind = "Quest 2";

const foundQuest = questByName(quests, questNameToFind);
console.log(foundQuest);

//Ex-3
const sortsTheArray = (quests) => {
  for (let i = 0; i < quests.length - 1; i++) {
    for (let j = 0; j < quests.length - 1 - i; j++) {
      if (quests[j].experience > quests[j + 1].experience) {
        [quests[j], quests[j + 1]] = [quests[j + 1], quests[j]];
      }
    }
  }
  return quests;
}; // CR - 👏🏻
console.log(sortsTheArray(quests));

//Ex-4
const findsAllEnemy = (arr, threshold) => {
  let newarray = [];
  for (const enemy of arr) {
    if (enemy.health > threshold) {
      newarray.push(enemy);
    }
  }
  return newarray;
}; // CR - 🥳

const enemies = [
  { name: "Enemy 1", health: 80 },
  { name: "Enemy 2", health: 120 },
  { name: "Enemy 3", health: 65 },
];

console.log(findsAllEnemy(enemies, 100));

//Ex-5

const calculatesTheSum = (matrix) => {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j]; //  CR - amazing!
    }
  }
  return sum;
};
console.log(
  calculatesTheSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

//Ex-6
const findsTheMaximum = (matrix) => {
  let biggest = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (biggest < matrix[i][j]) {
        biggest = matrix[i][j]; // CR - superb 👏🏻
      }
    }
  }
  return biggest;
};
console.log(
  findsTheMaximum([
    [3, 5, 2],
    [9, 1, 7],
    [4, 8, 6],
  ])
);

//Ex-7
const evenNumbersInMatrix = (matrix) => {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 === 0) {
        // CR - great 🥳
        count++;
      }
    }
  }
  return count;
};
console.log(
  evenNumbersInMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

//Ex-8
const findQuestsWithHighRewards = (arr, threshold) => {
  let newarray = [];

  for (const quests of arr) {
    if (quests.reward > threshold) {
      newarray.push(quests);
    }
  }
  return newarray;
}; // CR - beautiful 👏🏻
console.log(
  findQuestsWithHighRewards(
    [
      { name: "Quest 1", reward: 50 },
      { name: "Quest 2", reward: 100 },
      { name: "Quest 3", reward: 75 },
    ],
    80
  )
);
//Ex-9
const calculateTotalEnemyPower = (arr) => {
  let sum = 0;
  for (const enemy of arr) {
    sum += enemy.power;
  }
  return sum;
}; // CR - very good 👋
console.log(
  calculateTotalEnemyPower([
    { name: "Enemy 1", power: 50 },
    { name: "Enemy 2", power: 80 },
    { name: "Enemy 3", power: 65 },
  ])
);
//Extra 1
const movePlayer = (matrix, position, direction) => {
  let newPosition = position;

  switch (direction) {
    case "north":
      if (newPosition.y === 0) {
        return "You cannot go north, it's outside boundaries";
      }
      newPosition.y -= 1;
      break;
    case "south":
      if (newPosition.y === matrix[0].length - 1) {
        return "You cannot go south, it's outside boundaries";
      }
      newPosition.y += 1;
      break;
    case "west":
      if (newPosition.x === matrix.length - 1) {
        return "You cannot go west, it's outside boundaries";
      }
      newPosition.x += 1;
      break;
    case "east":
      if (newPosition.x === 0) {
        return "You cannot go east, it's outside boundaries";
      }
      newPosition.x -= 1;
      break;
    default:
      return "Invalid direction";
  }

  return newPosition;
}; // CR - this is the right solution, but a better way to solve this would be with a switch case...

console.log(
  movePlayer(
    [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    { x: 1, y: 1 },
    "north"
  )
);

console.log(
  movePlayer(
    [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    { x: 1, y: 1 },
    "east"
  )
);

console.log(
  movePlayer(
    [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    { x: 1, y: 1 },
    "west"
  )
);
console.log(
  movePlayer(
    [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    { x: 2, y: 2 },
    "south"
  )
);

console.log(
  movePlayer(
    [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    { x: 0, y: 0 },
    "north"
  )
);
console.log(
  movePlayer(
    [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    { x: 0, y: 0 },
    "east"
  )
);

//Extra -2
const battleSimulation = (nadiahp, enemyhp, nadiaattack, enemyattack) => {
  while (nadiahp > 0 && enemyhp > 0) {
    enemyhp -= nadiaattack;
    nadiahp -= enemyattack;
  }
  if (nadiahp <= 0 && enemyhp <= 0) {
    console.log("It's a teko!");
  } else if (nadiahp <= 0) {
    console.log("Enemy wins!");
  } else {
    console.log("Nadia wins!");
  }
};
battleSimulation(100, 50, 20, 15);

//Extra-3
const findEnemies = (grid) => {
  let enemiesArray = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2) {
        enemiesArray.push({ x: i, y: j });
      }
    }
  }
  return enemiesArray;
};

console.log(
  findEnemies([
    [0, 2, 0],
    [1, 0, 0],
    [0, 2, 0],
  ])
);
