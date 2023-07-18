// Character Name Capitalization
// : Write a function,
// toTitleCase(name)
// , that takes acharacter's name string in all lowercase and returns it in title case.
// Input:
// "iron warrior"
// Output:
// "Iron Warrior"

const toTitleCase = (characterName) => {
  return characterName
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

console.log(toTitleCase("Iron Warrior the warrior of justice"));

function toTitleCase2(characterName) {
  characterName = str.toLowerCase().split(" ");
  for (let i = 0; i < characterName.length; i++) {
    characterName[i] =
      characterName[i].charAt(0).toUpperCase() + characterName[i].slice(1);
  }
  return characterName.join(" ");
}

console.log(toTitleCase("Iron Warrior the warrior of justice"));

// 2.
// Item Search
// : Write a function,
// searchInventory(inventory, query)
// , that takes in an array of inventory item names and a string search query. The function should return a newarray
// with only the items that contain the query string.
// Input:
// ["Iron Sword", "Healing Potion", "Steel Shield"], "Iron"
// Output:
// ["Iron Sword"]

const inventory = ["Iron Sword", "Healing Potion", "Steel Shield", "Iron mace"];
const searchInventory = (inventory, query) => {
  return inventory.filter((item) => item.includes("Iron"));
};

console.log(searchInventory(inventory, "Iron"));

// 3.
// NPC Name Format
// : Write a function,
// formatNPCName(name)
// , which takes an NPC's name in the format "last, first" and swaps it to "first last".
// Input:
// "Goblin, Grunty"
// Output:
// "Grunty Goblin"

const formatNPCName = (NpcName) => {
  let swapNpcName = NpcName.split(" ");
  swapNpcName[0] = swapNpcName.splice(1, 1, swapNpcName[0])[0];
  return swapNpcName;
};

console.log(formatNPCName("Goblin Grunty"));

// 1 more easy way
const formatNPCName2 = (NpcName) => {
  let swapNpcName = NpcName.split(" ");
  [swapNpcName[0], swapNpcName[1]] = [swapNpcName[1], swapNpcName[0]];
  return swapNpcName;
};
console.log(formatNPCName2("Goblin Grunty"));

// 4.
// Quest Duration
// : Write a function,
// parseDuration(duration)
// , that takes a string like"2h 30min" and returns an object with the number of hours and minutes as integers.
// Input:
// "3h 45min"
// Output:
// { hours: 3, minutes: 45 }

const parseDuration = (duration) => {
  let obj = {
    hours: [],
    minutes: [],
  };
  const [hoursStr, minutesStr] = duration.split(" ");
  const parsedHoursStr = parseInt(hoursStr);
  const parsedMinutesStr = parseInt(minutesStr);
  console.log(parsedHoursStr, parsedMinutesStr);
  [obj.hours, obj.minutes] = [parsedHoursStr, parsedMinutesStr];
  return obj;
};

console.log(parseDuration("4h 45min"));
