// 1

const quests = [
  { name: "Quest 1", experience: 100 },
  { name: "Quest 2", experience: 150 },
  { name: "Quest 3", experience: 75 },
];

const totalExp = (quests) => {
  let total = 0;
  for (let i = 0; i < quests.length; i++) {
    total += quests[i].experience;
  }
  return total;
};

console.log(totalExp(quests));

// 2.

const findQuest = (quests, questName) => {
  for (let i = 0; i < quests.length; i++) {
    if (quests[i].name === questName) {
      return quests[i];
    }
  }
  // CR - here you shold return null if there is no match 
};

console.log(findQuest(quests, "Quest 3"));

// 3.

const sortQuests = (quests) => {
  for (let i = 0; i < quests.length; i++) {
    for (let j = 0; j < quests.length - i - 1; j++) {
      if (quests[j].experience > quests[j + 1].experience) {
        let temp = quests[j];
        quests[j] = quests[j + 1];
        quests[j + 1] = temp;
      }
    }
  }
  return quests;
};
console.log(sortQuests(quests));

// 4.

const enemies = [
  { name: "Enemy 1", health: 80 },
  { name: "Enemy 2", health: 120 },
  { name: "Enemy 3", health: 65 },
];

const findEnemeiesByHp = (enemies, healthThreshold) => {
  const filteredEnemeiesByHp = [];
  for (let i = 0; i < enemies.length; i++) {
    if (enemies[i].health >= healthThreshold) {
      filteredEnemeiesByHp.push(enemies[i]);
    }
  }
  return filteredEnemeiesByHp;
};
console.log(findEnemeiesByHp(enemies, 100));
// 1 more way with Destructuring credit to Maria
const questsByExperience = (questsArr) => {
  for (let i = 0; i < questsArr.length; i++) {
    for (let j = 0; j < questsArr.length - 1 - i; j++) {
      if (questsArr[j].experience > questsArr[j + 1].experience) {
        [questsArr[j], questsArr[j + 1]] = [questsArr[j + 1], questsArr[j]];
      }
    }
  }
  return questsArr;
};
// 5.

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const sumMatrix = (matrix) => {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
};

console.log(sumMatrix(matrix));

// 6.

const matrix2 = [
  [3, 222, 2],
  [100, 1, 7],
  [55, 89, 6],
];

const maxNumInMatrix = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
  }
  return max;
};

console.log(maxNumInMatrix(matrix2));

// 7.
const sumEvenMatrix = (matrix) => {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[j][i] % 2 === 0) {
        sum++;
      }
    }
  }
  return sum;
};

console.log(sumEvenMatrix(matrix));

// 8.

const questsRewards = [
  { name: "Quest 1", reward: 50 },
  { name: "Quest 2", reward: 100 },
  { name: "Quest 3", reward: 75 },
];

const findHighestReward = (questsRewards, questReward) => {
  for (let i = 0; i < questsRewards.length; i++) {
    if (questsRewards[i].reward > questReward) {
      return questsRewards[i];
    }
  }
};

console.log(findHighestReward(questsRewards, 80));

// 9.

const EnemyPower = [
  { name: "Enemy 1", power: 50 },
  { name: "Enemy 2", power: 80 },
  { name: "Enemy 3", power: 65 },
];

const sumEnemyPower = (EnemyPower) => {
  let totalPower = 0;
  for (let i = 0; i < EnemyPower.length; i++) {
    totalPower += EnemyPower[i].power;
  }
  return totalPower;
};

console.log(sumEnemyPower(EnemyPower));
