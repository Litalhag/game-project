// console.log("maria");
// let word='maria';
// const word2= word[0].toUpperCase();
// const word3= word.charAt(0);

// console.log(word);
// console.log(word2);
// console.log(word3);

// function trimDescription(description, maxLength){
//     return description.split(' ').reduce((str, word)=>{
//         if ((str.length+word.length+1)<maxLength) 
//             return str+=word;
//         }," ");
// }
// console.log(trimDescription("Retrieve the sacred artifact from the dragon's lair. But beware,the dragon is cunning and powerful.",50));

// function trimDescription(description, maxLength){
//     const newStrLastIndex = description.split('').slice(0,maxLength).join('').lastIndexOf(" ");
//     return description.slice(0,newStrLastIndex)+'...';
// }
// console.log(trimDescription("Retrieve the sacred artifact from the dragon's lair. But beware,the dragon is cunning and powerful.",50));

// let a=2;
// let b=4;
// [a,b]=[b,a];
// console.log(a);
// console.log(b);


// for (let i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i)},1000);
// }

// function double(x){
//     return x*2;
// }

// function some(num){
//     return double (num);
// }
// console.log('new',some(5));



// 'use strict';
// function func (){
//     console.log(this);
// }
// const obj={
//     prop:'hello',
//     method: function(){
//         func();
//         console.log(this);
//     }
// };
// obj.method();
// func();

// const calculator = {
//      result: 0, 
//      add: function(num) { 
//         this.result += num; 
//     }
// };
// result=0;
// function b (num) {
//     console.log(this); 
//     this.result += num; 
// }
// b(0);
// const addFunction = calculator.add;
// calculator.add(5);
// console.log(addFunction(3));
// console.log(calculator.result);
// console.log(result);

// function Dog(name) { 
//     this.name = name;
// };
// const dog = Dog("Buddy");
// console.log(dog.name);

// "use strict";
// const obj1 = { name: "Alice", printName: function() { console.log(this.name); }};
// const obj2 = { name: "Bob"};
// obj2.printName = obj1.printName;
// obj2.printName();

const obj = { 
    name: "John", 
    regularFunction: function() { console.log(this.name); }, 
    arrowFunction: () => { console.log(this.name); }};
obj.regularFunction();
obj.arrowFunction();














