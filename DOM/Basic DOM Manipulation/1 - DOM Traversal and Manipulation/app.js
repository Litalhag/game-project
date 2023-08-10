//2 Selecting a Specific List Item
const myLi = document.querySelector("li.start-here");
myLi.textContent = "title 2";

//3 Changing Text Content

const myLiNextSibling = myLi.nextElementSibling;
console.log(myLiNextSibling);

//4 Adding a New Sub Title

const myUl = myLiNextSibling.firstElementChild;

console.log(myUl);

newSubTitle = document.createElement("li");

const subTitleText = document.createTextNode("sub title 4");

console.log(subTitleText);

newSubTitle.appendChild(subTitleText);
console.log(newSubTitle);

myUl.appendChild(newSubTitle);
