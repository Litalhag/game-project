// Exercise 1: Calculate Total Player Experience
const quests = [
  { name: "Quest 1", experience: 100 },
  { name: "Quest 2", experience: 150 },
  { name: "Quest 3", experience: 75 },
];

const calculateTotalExperience = (questArray) => {
  let = totalExperience = 0; //initialize a variable to keep track of the total experience and set it to 0

  for (let i = 0; i < questArray.length; i++) {
    //iterate over each quest object in the input array
    totalExperience += questArray[i].experience; //access each quest object experience property and add its value to the totalExperience
  }
  return totalExperience; // holds the sum of all experience values from the quest object
};

console.log(calculateTotalExperience(quests));
//---------------------------------------------------------------
// Exercise 2: Find Quest by Name
const questName = "Quest 2";

const findQuestByName = (questArray, questName) => {
  //two inputs - an array of quest objects and a quest name
  for (let i = 0; i < questArray.length; i++) {
    //iterate over each quest object in the input array
    if (questArray[i].name === questName) {
      // each quest object in the loop, we check if its name property matches the specified questName:
      return questArray[i];
    }
  }
};

console.log(findQuestByName(quests, "Quest 2"));
//---------------------------------------------------------------
// Exercise 3: Sort Quests by Experience
const sortQuestsByExperience = (quests) => {
  for (let i = 0; i < quests.length; i++) {
    for (let j = 0; j < quests.length - i - 1; j++) {
      if (quests[j].experience > quests[j + 1].experience) {
        // Swap the elements if they are in the wrong order
        const temp = quests[j];
        quests[j] = quests[j + 1];
        quests[j + 1] = temp;
      }
    }
  }
  return quests;
};
sortQuestsByExperience(quests);

console.log(quests);
//-----------------------------------------------------------------
// Exercise 4: Find Enemies with High Health
function enemiesHealth(enemies, healthThreshold) {
  const matchingEnemies = [];
  for (let i = 0; i < enemies.length; i++) {
    if (enemies[i].health > healthThreshold) {
      matchingEnemies.push(enemies[i]);
    }
  }
  return matchingEnemies;
}

const enemies = [
  { name: "Enemy 1", health: 80 },
  { name: "Enemy 2", health: 120 },
  { name: "Enemy 3", health: 65 },
];
const healthThreshold = 100;

console.log(enemiesHealth(enemies, healthThreshold));
//-----------------------------------------------------------------
// Exercise 5: Calculate Matrix Sum
function sumMatrix(matrix) {
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];

    for (let j = 0; j < row.length; j++) {
      const number = row[j];
      sum += number;
    }
  }

  return sum;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(sumMatrix(matrix));
//-----------------------------------------------------------------
// Exercise 6: Find Maximum Value in Matrix
function findMaxMatrix(matrixToFindMax) {
  maxValue = 0;
  for (let i = 0; i < matrixToFindMax.length; i++) {
    const row = matrixToFindMax[i];

    for (let j = 0; j < matrixToFindMax.length; j++) {
      const number = row[j];

      if (number > maxValue) {
        maxValue = number;
      }
    }
  }
  return maxValue;
}

const matrixToFindMax = [
  [10, 5, 8],
  [3, 15, 4],
  [2, 7, 12],
];

console.log(findMaxMatrix(matrixToFindMax));
//-----------------------------------------------------------------
// Exercise 7: Count Even Numbers in Matrix
function evenNumbers(matrixToCountEven) {
  evenCount = 0;
  for (let i = 0; i < matrixToCountEven.length; i++) {
    const row = matrixToCountEven[i];
    for (let j = 0; j < matrixToCountEven.length; j++) {
      const number = row[j];

      if (number % 2 === 0) {
        evenCount++;
      }
    }
  }
  return evenCount;
}

const matrixToCountEven = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(evenNumbers(matrixToCountEven));
//-----------------------------------------------------------------
// Exercise 8: Find Quests with High Rewards
function findHigherRewards(questsToFilter, rewardThreshold) {
  matching = [];
  for (let i = 0; i < questsToFilter.length; i++) {
    if (questsToFilter[i].reward > rewardThreshold) {
      matching.push(questsToFilter[i]);
    }
  }
  return matching;
}

const questsToFilter = [
  { name: "Quest 1", reward: 50 },
  { name: "Quest 2", reward: 100 },
  { name: "Quest 3", reward: 75 },
];
const rewardThreshold = 80;
console.log(findHigherRewards(questsToFilter, rewardThreshold));
//-----------------------------------------------------------------
// Exercise 9: Calculate Total Enemy Power
function totalPower(enemyObjects) {
  let totalPower = 0;

  for (let i = 0; i < enemyObjects.length; i++) {
    totalPower += enemyObjects[i].power;
  }

  return totalPower;
}

const enemyObjects = [
  { name: "Enemy 1", power: 50 },
  { name: "Enemy 2", power: 80 },
  { name: "Enemy 3", power: 65 },
];

console.log(totalPower(enemyObjects));
//-----------------------------------------------------------------
// Extra ex 1:
const gameGrid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
