// Problem 1
let a="5";
let b=5;

console.log(typeof a,typeof b);

// Problem 2
console.log(typeof null); // object

// Problem 3
// let a={name:"Prajwal"};
// let b=a;
// b.name="Changed";

// console.log(a.name);


// Problem 4
let arr=[1,2,3];

console.log(typeof arr);

// Problem 5
let x=10;
let y=x;

y=20;
console.log(x,y);

// Problem 6 
let obj1={value:10};
let obj2=obj1;

obj2.value=20;

console.log(obj1.value, obj2.value);

// Prooblem 7
// var a=10;
// let b=20;

// console.log(window.a);
 // console.log(window.b);

//Problem 8

// var x = 1;
// var x = 2;

// let y = 1;
// let y = 2;

//Problem 9
// console.log(a);
// let a = 5;

// Problem 10
const obj={name:"JS"};

obj.name="MERN";

console.log(obj.name);

//Problem 11
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}


// problem 12
function test() {
  let a = 10;
}
console.log(a);

// Problem 13
// if (true) {
//   var x = 5;
// }
// console.log(x);

// 
if (true) {
  let y = 5;
}
console.log(y);

// problem 15
// let a = 10;

// function outer() {
//   function inner() {
//     console.log(a);
//   }
//   inner();
// }

// outer();

//problem 16
// let a = 1;

// function x() {
//   let a = 2;
//   function y() {
//     let a = 3;
//     console.log(a);
//   }
 
//   y();
// }

// x();
