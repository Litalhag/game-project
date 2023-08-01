function processQuests(arrQuests, callback) {
  if (!Array.isArray(arrQuests)) {
    throw new Error("Expected an array of arrQuests");
  }
  const newArrQuest = JSON.parse(JSON.stringify(arrQuests));

  const results = [];
  for (const quest of newArrQuest) {
    if (!quest.hasOwnProperty("name") || !quest.hasOwnProperty("experience")) {
      throw new Error(
        `Quest with ID ${quest.id} is not in the right structure`
      );
    } else {
      results.push(callback(quest));
    }
  }
  return results;
}
const quest = [
  {
    id: 5,
    name: "Quest name",
    experience: 100,
  },
  {
    id: 6,
    name: "Quest name",
    experience: 200,
  },
  {
    id: 7,
    name: "Quest name",
    experience: 300,
  },
];

const newarrQuests = processQuests(quest, (quest) => {
  return {
    ...quest,
    experience: 50,
  };
});

console.log(newarrQuests);
