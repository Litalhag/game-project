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
// , which takes an NPC'sname in the format "last, first" and swaps it to "first last".
// Input:
// "Goblin, Grunty"
// Output:
// "Grunty Goblin"
