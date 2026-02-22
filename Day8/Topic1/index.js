let a = 1;

function x() {
  function y() {
    console.log(a);
  }
  y();
}

x();

let name = "Global";

function print() {
  let name = "Local";
  console.log(name);
}
print();

// function config() {
//   let secret = "123";
// }
// console.log(secret);
// Because secret exists only inside lexical boundary.

let x1 = "Global";

function outer() {
    let y = "Outer";

    function inner() {
        console.log(x1);
        console.log(y);
    }

    inner();
}

outer();


function makeFunc() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

const counter = makeFunc();

counter();
counter();
counter();