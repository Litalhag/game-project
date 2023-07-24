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
