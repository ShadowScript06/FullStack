// Problem 1 Create a constructor Person that takes name and age, and creates objects like:
Person.count = 0;
function Person(name,age){
    this.name=name;
    this.age=age;

    Person.count++;
}

const p1=new Person("Prajwal", 25);

// console.log(p1.name,p1.age);

// Problem 2

Person.prototype.introduce=function(){
    console.log(`Hi I am ${this.name}, I am ${this.age} years old.`);
}

p1.introduce();


// Problem 3 
console.log(Person.count);


// Problem 4 implement inheritance using constructors
function Vehicle(brand){
    this.brand=brand;
}

Vehicle.prototype.start=function (){
    console.log("Vehicle of " + this.brand+" has started");
}

function Car(brand,model){
    Vehicle.call(this,brand);// inherits
    this.model=model;
}

Car.prototype=Object.create(Vehicle.prototype);// create empty prototype add vehicale prototype to it and attach car prototypr to it 

Car.prototype.constructor=Car;
// since in last step we attch car prototype to vehicle prototype hence constructur also of vehicle so attch car constructor back;


const c1 = new Car("Toyota", "Fortuner");

c1.start(); // inherited
console.log(c1.brand);
console.log(c1.model);