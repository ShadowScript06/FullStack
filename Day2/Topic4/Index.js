// Problem 1
console.log(a);
var a = 10; // undefined

// Problem 2
console.log(b);
let b = 10; // Error


//Problem 3
sayHello();

function sayHello() {
  console.log("Hello");
}
 // runs well

 // problem 4
 sayHi();

var sayHi = function() {
  console.log("Hi");
}; // error

// problem 5
var a=1;
function test(){
    console.log(a);
    var a=2;
}
test(); // undefind cause var has function scope