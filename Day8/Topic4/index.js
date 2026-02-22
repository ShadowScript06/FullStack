// Problem 1 
(function () {
  console.log("Hello World");
})(); // hello world

// Problem 2
let a = 10;

(function () {
  let a = 20;
  console.log(a);
})();

console.log(a); // 20 10

// PRoble 3 create prvate variables
 const counter=(function (){
    let count =0;

    return {
        increment: function(){
            count++;
            console.log(count);
        }
    }
 })();



  for (var i = 1; i <= 3; i++) {
  (function (x) {
    setTimeout(function () {
      console.log(x);
    }, 1000);
  })(i);
}

//Because var is function-scoped.

// 💡 IIFE Fixes This By:

// Capturing each value of i

// Creating separate scope per iteration

// This question tests:

// Closures + async + scope understanding.


// module patttren
const BankAccount = (function () {
  let balance = 0;

  function deposit(amount) {
    balance += amount;
  }

  function withdraw(amount) {
    if (amount <= balance) balance -= amount;
  }

  function getBalance() {
    return balance;
  }

  return { deposit, withdraw, getBalance };
})();

BankAccount.deposit(1000);
BankAccount.withdraw(300);
console.log(BankAccount.getBalance());
