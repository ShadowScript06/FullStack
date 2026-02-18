// Problem 1 
//Double Only Even Numbers
const nums = [1, 2, 3, 4, 5, 6];

const ans=nums.filter(num => num%2===0).map(num => num*2);

console.log(ans);

//Problem 2
//Extract Names of Active Users
const users = [
  { name: "Prajwal", active: true },
  { name: "Rahul", active: false },
  { name: "Sneha", active: true }
];

const activeUser= users.filter(user => user.active=== true).map(user => user.name);

console.log(activeUser);


// Problem 3
//Calculate Total Cart Value
const cart = [
  { item: "Laptop", price: 50000 },
  { item: "Mouse", price: 500 },
  { item: "Keyboard", price: 1500 }
];

const totalCartValue=cart.reduce((total,item)=> total+ item.price,0);

console.log(totalCartValue);

//Problem 4 — Count How Many Times Each Word Appears
const words = ["js", "node", "js", "react", "node", "js"];


const count=words.reduce((acc,word)=>{
    acc[word]=(acc[word] || 0)+1;
    return acc;
}, {});

console.log(count);

//✅ Problem 5 — Get Total Salary of Developers Only
const employees = [
  { name: "A", role: "dev", salary: 40000 },
  { name: "B", role: "designer", salary: 30000 },
  { name: "C", role: "dev", salary: 50000 }
];

const devSalary=employees.filter(employee => employee.role==="dev").reduce((acc,employee)=>{
    return acc+employee.salary;
},0);

console.log(devSalary);

// Problem 6
// Update Nested Object Safely (Without Mutation)
const user = {
  id: 1,
  name: "Prajwal",
  address: {
    city: "Mumbai",
    pin: 401201
  }
};

const updatedUser={
    ...user,
    address:{
        city:"Pune",
        pin:411002
    }
}

console.log(user,updatedUser);

// Problem 7 //Add Item to Array Immutably
const orders = [
  { id: 1, amount: 200 },
  { id: 2, amount: 500 }
];

const newOrders=[
    ...orders,
    {id:3,  amount:800}
]
console.log(newOrders, orders);

//Problme 8 Remove Item Immutably

const filteredOrders=orders.filter(order => order.id !==2);

console.log(filteredOrders,updatedUser);

// Problme 9
//✅ 4️⃣ Transform Without Mutation
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 }
];

const updatedProducts=products.map(product => {
    return {
        ...product,
        price : product.price *1.1
    }
});

console.log(products,updatedProducts);

// Problme 10  
const transactions = [
  { id: 1, amount: "500", status: "success" },
  { id: 2, amount: "300", status: "failed" },
  { id: 3, amount: "900", status: "success" }
];


const answer=transactions.filter(txn => txn.status==="success").map((txn)=>{
    return {
        ...txn,
        amount:Number(txn.amount)
    }
}).reduce((acc,txn)=>{
    return acc+txn.amount;
},0);

console.log(answer);