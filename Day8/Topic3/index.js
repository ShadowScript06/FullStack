// What will be the output?
const user = { name: "Prajwal", age: 22 };

const { name, city } = user;

console.log(city); // undefined


const user2 = { name: "Prajwal" };

const { name2, city2 = "Mumbai" } = user2;

console.log(city2);// mumbai

// 👉 Default value is used only when value is undefined.

// Default Value Edge Case (Very Tricky)
const user3 = { city3: null };

const { city3 = "Mumbai" } = user3;

console.log(city);

// ✅ Answer: null

// ⚠️ Default works only for undefined, not null.



//6. Array Position Trick
const numbers = [10, 20, 30];

const [a, , c] = numbers;

console.log(a, c); // 10,30

