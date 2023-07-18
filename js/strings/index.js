// Exercise 1:
function toTitleCase(name) {
  let lowercaseName = name.toLowerCase(); // lower all string's chars
  let words = lowercaseName.split(" "); //split words into an array
  for (let i = 0; i < words.length; i++) {
    let word = words[i]; // word = each word in an array
    capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    // capitalizedWord = first char in each word in array & make upper + create a new array
    words[i] = capitalizedWord;
    console.log(words[i]);
  }

  let titleCaseName = words.join(" "); // returns the array as a string
  return titleCaseName;
}

console.log(toTitleCase("Iron Warrior")); // Output: "Iron Warrior"
// -----------------------------------------------------------------------------------------------
// split = splits a string into an array of substrings
// charAt = returns the character at a specified index (position) in a string
// slice = returns selected elements from a given start-end in an array, as a new array
// join = returns an array as a string
// -----------------------------------------------------------------------------------------------
// Exercise 2:
function searchInventory(inventory, query) {
  let inventoryItems = [];

  for (let i = 0; i < inventory.length; i++) {
    item = inventory[i];
    console.log(item);
    if (item.includes(query)) {
      inventoryItems.push(item);
    }
  }
  return inventoryItems;
}

console.log(
  searchInventory(["Iron Sword", "Healing Potion", "Steel Shield"], "Iron")
);
// -----------------------------------------------------------------------------------------------
// includes = returns true if a string contains a specified string
// push = adds new items to the end of an array
// map = creates a new array from calling a function for every array element, doesn't change the original array
// input: "Goblin, Grunty"
// output:: "Grunty Goblin"
// -----------------------------------------------------------------------------------------------
// Exercise 3:
function formatNPCName(name) {
  let newName = name.split(", ");
  let formattedName = `${newName[1]} ${newName[0]}`;
  return formattedName;
}

console.log(formatNPCName("Goblin, Grunty"));
// -----------------------------------------------------------------------------------------------
// parseInt = parses a value as a string and returns the first integer. returns only a number
// -----------------------------------------------------------------------------------------------
// Exercise 4:
function parseDuration(duration) {
  const splitStr = duration.split(" "); //['3h', '45minutes']
  const hours = splitStr[0]; // '3h'
  const minutes = splitStr[1]; // '45min

  return {
    hours: parseInt(hours),
    minutes: parseInt(minutes),
  };
}

console.log(parseDuration("3h 45min"));

// input: "3h 45min"
//output// {hours: 3, minutes: 45}
// -----------------------------------------------------------------------------------------------
// Exercise 5:
function getGameAcronym(title) {
  const titleArr = title.split(" "); //[ 'Epic', 'Fantasy', 'Battle']
  const newTitle = titleArr.map((e) => e[0]);
  const upperNewTitle = newTitle.join(" ").toUpperCase();

  return upperNewTitle;
}

console.log(getGameAcronym("Epic Fantasy Battle"));
// -----------------------------------------------------------------------------------------------
// Exercise 6:
// input = { name: "Iron Warrior", class: "Warrior", level: 10 };
function getCharacterDetails(character) {
  let arr = [];
  for (let key in character) {
    // arr.push([key, character[key]]);
    arr.push(`${key}: ${character[key]}`); // push = adds new items to the end of an array
  }

  let str = arr.join(", ");
  return str;
}

console.log(
  getCharacterDetails({ name: "Iron Warrior", class: "Warrior", level: 10 })
);
// -----------------------------------------------------------------------------------------------
// Exercise 7:
function createSlug(location) {
  let str = location.toLowerCase();
  let finalStr = str.replace(" ", "-");

  return finalStr;
}

console.log(createSlug("Dark Forest"));
// -----------------------------------------------------------------------------------------------
// Exercise 8:
