// // 1.
//  console.log(a);
//  What will be the output?
//it will be 5
// var a = 5;
// console.log(b);
// What will be the output?
// it will be undefined becouse of the let , i was wrong i got an error that that i can't accese b before initialization
// // let b = 5;
// // console.log(c);
//  What will be the output?
//  can't accese c before initialization
//  const c = 5;

// // 2.
console.log(myFuncDecl());
//  What will be the output?
// can't accese before initialization , i was wrong the right answer was undefined and that becouse,
// the function becouse we didn't return anything
function myFuncDecl() {
  return "Hello from function declaration!";
}
console.log(myFuncExpr());
// What will be the output?

// myFuncExpr isn't a function

var myFuncExpr = function () {
  return "Hello from function expression!";
};
console.log(myFuncExpr());

//3

// const x = "global";
// function outerFunc() {
//   let y = "outer";
//   function innerFunc() {
//     var z = "inner";
//     //console.log(x);
//     // What will be the output?
//     // i think the answer will be "global" because we can access veriables from outside
//     //our scope but not from inside because of hoisting
//     //console.log(y);
//     // What will be the output?
//     // it will be "outer" because it's from the outside scoope
//   }
//   innerFunc();
//   //console.log(z);
//   // What will be the output?
//   // it will print undefined becouse z is inside the inner function and it's not accessible
// }
// outerFunc();

//4
const a = 1;
function b() {
  const a = 10;
  c();
  return;
  function c() {
    console.log(a);
    // What will be the output?
    //the output will be 10 becouse a is in a outside scope and it's accessible or in other words hoistble
  }
}
b();
console.log(a);
// // What will be the output of a?
// a will 1 becouse a is defined outside the function to and it
//will take that outpot and not what is inside the function
foo();
function foo() {
  console.log(x);
  // What will be the output?
  // undefined var declarations are hoisted and initialized as undefined
  var x = "Hello, world!";
  bar();
  function bar() {
    // console.log(x);
    // What will be the output?
    //can't accese x before initialization
    let x = "Hello, scope!";
  }
}
