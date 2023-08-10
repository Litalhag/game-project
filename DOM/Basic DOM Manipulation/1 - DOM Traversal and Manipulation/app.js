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

// 5 Removing the Last Title

const myLiParent = myLi.parentElement;

console.log(myLiParent);

myLiParent.lastElementChild.remove();

//6 Updating the Document's Title

const head = document.querySelector("head");

console.log(head);

const title = head.lastElementChild;
// const title = document.head.querySelector('title') 1 more way to store the title
console.log(title);

title.textContent = "DOM noob!";

const div = myLiParent.nextElementSibling;

console.log(div);

div.textContent =
  "Now I know how to traverse the DOM :D , but what i really want is to travel to south Korea and have some fun there :(";
