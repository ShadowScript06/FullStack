// Problem 1 
function User(name,age){
    this.name=name;
    this.age=age;
}


User.prototype.greet=function(){
    console.log(`Hello `+this.name);
}

//Problem 2 : Implement Inheritance Without class

function Vehicle(type){
    this.type=type;
}

Vehicle.prototype.start=function(){
    console.log("Vehicle started "+this.type);
}

function Car(type,brand){
    Vehicle.call(this, type);
    this.brand=brand;
}

Car.prototype=Object.create(Vehicle.prototype);

Car.prototype.constructor=Car;


const c1=new Car("Petrol", "BMW");
c1.start();

console.log(c1.brand);

// Problem 3 Custom Implementation of instanceof

function myInstanceOf(obj,Constructor){
    if(obj=== null ||( typeof obj !=="object" && typeof obj !== "function") ){
        return false;
    }

    let currentProto=Object.getPrototypeOf(obj);

    while(currentProto !== null){
        if(currentProto === Constructor.prototype){
            return true;
        }
        currentProto=Object.getPrototypeOf(currentProto);
    }
    return false;
}


console.log(myInstanceOf([], Array));   // true
console.log(myInstanceOf({}, Array));   // false
console.log(myInstanceOf({}, Object));  // true
console.log(myInstanceOf(new Date(), Date)); // true


// Problem 4 Add Custom Method to All Arrays

Array.prototype.last=function(){
    if(this.length===0) return undefined;

    return this[this.length-1];
}

const nums=[1,2,3,4];

console.log(nums.last());

// Problem 5 Build a simple OOP system 
function BankAccount (owner, initialBalance){
    this.owner=owner;

    let balance=initialBalance;

    this.getBalance=function (){
        return balance;
    }

    this.setBalance=function (newBalance){
        balance=newBalance;
    }
}

BankAccount.prototype.deposit=function (amount){
    const current=this.getBalance();

    this.setBalance(current+amount);

     console.log(`Deposit of ${amount} Successful`);
}


BankAccount.prototype.withdraw = function (amount) {
    const current=this.getBalance();

    if (amount > current) {
    console.log("Insufficient Balance.");
    return;
  }

  this.setBalance(current - amount);
  console.log(`Withdrawal of ${amount} Successful`);
}

BankAccount.prototype.getBalance = function () {
  return this.getBalance();
};

const acc = new BankAccount("Prajwal", 1000);

console.log(acc.getBalance()); // 1000

acc.deposit(500);
console.log(acc.getBalance()); // 1500

acc.withdraw(200);
console.log(acc.getBalance()); // 1300

console.log(acc.balance);
acc.balance=90000;

console.log(acc.getBalance());