// Problem 1
//Convert an impure function to pure.


// impure
function increment(){
    count++;
    return count;
}
// pure
function increment(count){
    return count+1;
}

// Problem 2
// A function is pure if:

// Same input → Same output (always)

// No side effects

// Does not modify external state

// Example:
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
console.log(add(2, 3));
console.log(add(2, 3));

// ✅ Output (Always Same)
// 5
// 5
// 5


// ✔ Because:

// It depends only on a and b

// Nothing external affects it

// A function is impure if it:

// Uses or changes external data

// Has side effects

// Depends on time, randomness, IO, mutation, etc.

// Example A: Uses External Variable
let count = 0;

function increment() {
  count++;
  return count;
}

console.log(increment());
console.log(increment());
console.log(increment());

// ❌ Output
// 1
// 2
// 3


// Why unpredictable?

// Same call → different result.

// Depends on external count.


//Write a pure function to format user data.
let data={name:"Prajwal", age:35, email:"abc@gmail.com"};

function updateData(data, name,age,email){
    let updatedData={}
    if(name){
        updatedData.name=name;
    }else{
        updatedData.name=data.name;
    }
    if(age){
        updatedData.age=age;
    }else{
        updatedData.age=data.age;
    }if(email){
        updatedData.email=email;
    }else{
        updatedData.email=data.email;
    }

    return updatedData;
}

console.log( updateData(data, "raj"));
console.log(data);