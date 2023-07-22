//Ex-1
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

console.log(boolToWord(true));
console.log(boolToWord(false));

//Ex 2.1
const sumOfTheTwoLowest = (arr) => {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  let min2 = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > min && (arr[i] < min2 || min2 === min)) {
      min2 = arr[i];
    }
  }
  return min + min2;
};

console.log(sumOfTheTwoLowest([10, 343445353, 3453445, 3453545353453]));

//Ex2.2
debugger;
const binToInt = (arr) => {
  let int = 0;
  let hezka = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    int += Math.pow(2, hezka) * arr[i]; /// 2^0 , 2^1 , 2^2, 2^3
    hezka++;
  }
  return int;
};
//                    0  1   2  3
console.log(binToInt([1, 1, 1, 1])); //  4       arr[4]

///      ^1  2^4    2^3     2^2    2^1     2^0

//EX-2.3
const findNextSquare = (number) => {
  // number =  100, 121, 155, 268
  let perfectNumber = Math.sqrt(number); // 100 -> 10, 121 -> 11, 155 ->
  if (number % perfectNumber != 0) {
    return -1;
  }
  perfectNumber++;
  return perfectNumber * perfectNumber;
};

console.log(findNextSquare(121));

console.log(findNextSquare(625));

console.log(findNextSquare(114));

//Ex-2.4
const findUniq = (arr) => {
  //                                          i i+1    i+2             j
  // [1,1,1,2,1,1,] =>2,    [3,3,4,3,3,3,3] => 4,   [2,2,1] => 1,     [7, 7,    7,   7,   7,7,7,8] =>8 ,    [0,9,9,9,9,9,9,9] =>0
  for (let i = 0; i < arr.length; i++)
    if (arr[i] === arr[i + 1]) {
      continue;
    } else {
      if (arr[i + 1] === arr[i + 2]) {
        return arr[i];
      } else if (arr[i + 1] != arr[i + 2]) {
        return arr[i + 1];
      }
    }
};

console.log(findUniq([3, 3, 4, 3, 3, 3, 3]));
console.log(findUniq([0, 9, 9, 9, 9, 9, 9, 9]));
console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([2, 2, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
console.log(findUniq([0, 0, 0, 0, 0, 88]));

// Solution with XOR Gate
const findUniq2 = (arr) => {
  let num = arr[0];
  for (let i = 1; i < arr.length; i++) {
    num = num ^ arr[i];
  }
  return num;
};

console.log("Solution with XOR " + " " + findUniq2([0, 0, 0, 0, 0, 88]));
console.log("Solution with XOR " + " " + findUniq2([3, 3, 4, 3, 3, 3, 3]));

// A | B | output
// 0   0     0
// 0   1     1
// 1   0     1
// 1   1     0

//Ex-2.5
const summation = (num) => {
  // 5 => 1+2+3+4+5;        2 => 1+2;       4 => 1+2+3+4;
  let number = 0;
  for (let i = 0; i <= num; i++) {
    number += i;
  }
  return number;
};

console.log(summation(10));
console.log(summation(3));
console.log(summation(8));
console.log(summation(0));
console.log(summation(2));

// for (let i = 0; i < 10; i++) {
//   console.log(i * 2);
// }
//Ex2.6
const centuryFromYear = (number) => {
  if (number % 100 === 0) {
    return number / 100;
  } else {
    return Math.trunc(number / 100) + 1;
  }
};
console.log(centuryFromYear(1900));
console.log(centuryFromYear(2000));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(2023));

//Ex-2.7
const basicOp = (op, num1, num2) => {
  if (op === "+") {
    return num1 + num2;
  } else if (op === "-") {
    return num1 - num2;
  } else if (op === "*") {
    return num1 * num2;
  } else if (op === "/") {
    return num1 / num2;
  }
};
console.log(basicOp("-", -1, 3));
console.log(basicOp("*", 8, 3));
console.log(basicOp("+", 2, 3));
console.log(basicOp("/", 5, 3));
console.log(basicOp("-", 2, 3));
//Ex3.1
const nb_year = (p0, percent, aug, p) => {
  let count = 0;
  let population = p0;
  while (population < p) {
    population = population + population * (percent / 100) + aug;
    count++;
  }
  return count;
};

console.log(nb_year(1000, 2, 50, 1200));
console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));
//Ex-3.2
// [[5,0],[1,3],[10,8],[5,8],[15,6]]

arr = [
  [5, 0],
  [1, 3],
  [10, 8],
  [5, 8],
  [15, 6],
];
let people = 0;
const peopleInBus = (array) => {
  for (let i = 0; i < arr.length; i++) {
    people += arr[i][0];
    people -= arr[i][1];
  }
  return people;
};

console.log(peopleInBus(arr));
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

//Ex-4.1
const fib = (number) => {
  if (number === 2 || number === 1 || number === 0) {
    return 1;
  }
  return fib(number - 3) + fib(number - 2) + fib(number - 1);
};

console.log(fib(6));

// const fibLoop = (number) => {
//   let first = 1;
//   let second = 1;
//   let num = 0;
//   let tmp = 0;
//   while (number > 0) {
//     num = first + second;
//     tmp = second;
//     second = num;
//     first = tmp;
//     number -= num;
//   }

//   return num;
// };

// console.log(fibLoop(10));

//Ex-5.1
const removeFirstAndLastCharacters = (str) => {
  return str.slice(1, -1);
};

console.log(removeFirstAndLastCharacters("hello You"));

//Ex-5.2
const repeat_str = (count, src) => {
  return src.repeat(count);
};
console.log(repeat_str(6, "|"));
console.log(repeat_str(5, "Hello"));
//Ex-5.3
const toCamelCase = (str) => {
  //  the-stealth
  let newstring = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "_" || str[i] === "-") {
      newstring += str[i + 1].toUpperCase();
      i += 2;
    }
    newstring += str[i];
  }
  return newstring;
};
console.log(toCamelCase("the-stealth-warrior_and_good_guy"));
//        0123456789
// let dd = "d-na";
// let nn = "";

// for (let i = 0; i < dd.length; i++) {
//   if (dd[i] === "-") {
//     nn += dd[i + 1].toUpperCase();
//     i += 2;
//   }
//   nn += dd[i]; // nn=dNa
// }

//console.log(nn);
//Ex-5.4
const toWeirdCase = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 == 0) {
      newStr += str[i].toUpperCase();
    } else if (i % 2 != 0) {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
};

//console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case"));
//Ex-5.5
const nameToInit = (name) => {
  let initial = "";
  initial += name[0];
  initial += ".";
  for (let i = 0; i < name.length; i++) {
    if (name[i] === " ") {
      initial += name[i + 1];
    }
  }
  return initial;
};

console.log(nameToInit("Sam Harris"));
console.log(nameToInit("Patrick Feeney"));

// return name[0];

//Ex-5.6
const maskify = (str) => {
  if (str.length < 4) {
    return str;
  }
  let newStr = "";
  let secondstr = "";
  for (let i = 0; i < str.length - 4; i++) {
    newStr += "#";
  }
  for (let i = str.length - 4; i < str.length; i++) {
    secondstr += str[i];
  }

  return newStr + secondstr;
};

console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));
//maskify("1"); => 1
//maskify(""); => ""
// !nam
//Ex-5.7

const shortest = (array) => {
  let short = array[0].length;
  for (let i = 1; i < array.length; i++) {
    if (array[i].length < short) {
      short = array[i].length;
    }
  }
  return short;
};
console.log(shortest(["hi", "myc", "xxx", "nadia", "abdulah"]));
//Ex-5.8
const longest = (array) => {
  let long = array[0].length;
  for (let i = 1; i < array.length; i++) {
    if (array[i].length > long) {
      long = array[i].length;
    }
  }
  return long;
};
console.log(longest(["hi", "myc", "xxx", "nadia", "abdulah"]));
//Ex-6.1
const accum = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i].toUpperCase() + str[i].toLowerCase().repeat(i);
    if (i < str.length - 1) {
      result += "-";
    }
  }
  return result;
};
console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));

//Ex-6.2
const numOfDups = (str) => {
  let result = {};

  for (let i = 0; i < str.length; i++) {
    if (result[str[i].toLowerCase()]) {
      result[str[i].toLowerCase()]++;
    } else {
      result[str[i].toLowerCase()] = 1;
    }
  }
  return Object.values(result).filter((m) => m > 1).length;
};

console.log(numOfDups("Indivisibilities"));

//Ex-6.3
const takeTwoString = (str1, str2) => {
  let result = "";
  let str3 = str1 + str2;
  let set = new Set();
  for (let i = 0; i < str3.length; i++) {
    set.add(str3[i]);
  }

  set.forEach((element) => {
    result += element;
  });
  result = result.split("").sort().join("");

  return result;
};

console.log(takeTwoString("xyaabbbccccdefww", "xxxxyyyyabklmopq"));

const isogram = (str) => {
  let result = {};

  for (let i = 0; i < str.length; i++) {
    if (result[str[i].toLowerCase()]) {
      result[str[i].toLowerCase()]++;
    } else {
      result[str[i].toLowerCase()] = 1;
    }
  }
  return Object.values(result).filter((m) => m > 1).length != 0 ? false : true;
};
console.log(isogram("moOse"));

const perimeterOfRectangle = (l, w) => {
  return l * 2 + w * 2;
};
console.log(perimeterOfRectangle(20, 10));
