// function toTitleCase(name) {}

// convert the first letter of a string:
// const word = "freecodecamp";

// const firstLetter1 = word.charAt(0);
// console.log(firstLetter1);

// to uppercase the first letter in this specific string
// const firstLetterCap1 = firstLetter1.toUpperCase();

// console.log(firstLetterCap1);

// method to cut out a substring from an entire string. We will use this method to cut out the remaining part of a word (excluding the first letter):
// const word2 = "freecodecamp";

// const remainingLetters1 = word.substring(1);

// console.log(remainingLetters);

// const someWord = "freecodecamp";

// const firstLetterWord = word.charAt(0);

// const firstLetterCapp = firstLetter.toUpperCase();

// const remainingAllLetters1 = word.slice(1);

// const capitalizedWord = firstLetterCap + remainingLetters;

// console.log(capitalizedWord);

function getCharacterDetails(character) {
  let arr = [];
  for (let key in character) {
    arr.push(`${key}: ${character[key]}`);
  }
  let str = arr.join(", ");
  return str;
}

console.log(
  getCharacterDetails({ name: "Lital Warrior", class: "shalom", level: 10 })
);
