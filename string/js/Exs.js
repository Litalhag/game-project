//Ex-1
const toTitleCase = (string) => {
  let result = "";
  result = string[0].toUpperCase();
  for (let i = 1; i < string.length; i++) {
    result += string[i];
    if (string[i] === " ") {
      result += string[i + 1].toUpperCase();
      i++;
    }
  }

  return result;
};

console.log(toTitleCase("nadia hosisy"));

//Ex-2
function searchInventory(inventory, query) {
  return inventory.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
}

const inventory = ["Iron Sword", "Healing Potion", "Steel Shield"];
const query = "Iron";
const result = searchInventory(inventory, query);
console.log(result);

//Ex-3
function formatNPCName(name) {
  const [last, first] = name.split(", ").map((word) => word.trim());
  return `${first} ${last} `;
}
const input = "Goblin, Grunty";
const output = formatNPCName(input);
console.log(output);

//Ex-4
function parseDuration(duration) {
  const [hoursString, minutesString] = duration.split(":");
  const hours = parseInt(hoursString, 10);
  const minutes = parseInt(minutesString, 10);

  return { hours, minutes };
}

console.log(parseDuration("2:30"));

//Ex-5
const getGameAcronym = (title) => {
  let result = "";
  result = title[0].toUpperCase();

  for (let i = 0; i < title.length; i++) {
    if (title[i] === " ") {
      result += title[i + 1];
      i++;
    }
  }
  return result;
};
console.log(getGameAcronym("Epic Fantasy Battle"));

//Ex-6
function getCharacterDetails({ name, class: characterClass, level }) {
  return `${name}, class: ${characterClass}, level: ${level}`;
}

const character = { name: "Iron Warrior", class: "Warrior", level: 10 };
const output1 = getCharacterDetails(character);
console.log(output1);

//Ex-7
function createSlug(location) {
  let slug = "";
  const lowercaseLocation = location.toLowerCase();

  for (let i = 0; i < lowercaseLocation.length; i++) {
    if (lowercaseLocation[i] === " ") {
      slug += "-";
    } else {
      slug += lowercaseLocation[i];
    }
  }

  return slug;
}
console.log(createSlug("Dark Forest"));

//Ex-8
function trimDescription(description, maxLength) {
  if (description.length <= maxLength) {
    return description;
  }

  const words = description.split(" ");
  let trimmedDescription = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if ((trimmedDescription + word).length <= maxLength) {
      trimmedDescription += word + " ";
    } else {
      break;
    }
  }

  return trimmedDescription.trim();
}

console.log(
  trimDescription(
    "Retrieve the sacred artifact from the dragon's lair. But beware, the dragon is cunning and powerful.",
    50
  )
);

//Ex-9
