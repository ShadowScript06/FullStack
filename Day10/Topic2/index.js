// problem 1
const user = {
  name: "Prajwal",
  greet() {
    console.log("Hi " + this.name);
  }
};

const greetFn = user.greet.bind(user);
greetFn();

greetFn.call(user);


// Call vs apply
function introduce(age, city) {
  console.log(this.name, age, city);
}

const person = { name: "Rahul" };

const details = [25, "Mumbai"];

introduce.call(person,details[0],details[1]);

introduce.apply(person,details);

//Partial Application with bind
function multiply(a,b,c){
    return a*b*c;
}

const doubleAndTriple=multiply.bind(null,2,3);

console.log(doubleAndTriple(4));

// can call overide bind ans: no it fixes this permamntly
function greet() {
  console.log(this.name);
}

const obj1 = { name: "Prajwal" };
const obj2 = { name: "Rahul" };

const boundGreet = greet.bind(obj1);

boundGreet.call(obj2);


// constructor +apply

function Person(name){
    this.name=name;
}

function Student(name,grade){
    Person.apply(this,[name]);

    this.grade=grade;


}

const s=new Student("Prajwal","A");

console.log(s.name, s.grade);


const obj = {
  name: "Prajwal",
  greet: () => {
    console.log(this.name);
  }
};

obj.greet.call({ name: "Rahul" }); // no personal this global this only for arrow function here 