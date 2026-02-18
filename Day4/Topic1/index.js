/// Problem 1
//Price With GST

const prices=[100,200,300];

const gst=18;

const gstPrices=[];

for(let i=0;i<prices.length; i++){
    gstPrices.push(prices[i]+prices[i]*gst/100);
}

console.log(gstPrices);



// Problem 2 remove failed transaction
const transactions = [
  { id: 1, amount: 500, status: "success" },
  { id: 2, amount: 200, status: "failed" },
  { id: 3, amount: 1200, status: "success" },
  { id: 4, amount: 300, status: "failed" }
];


const validTransaction=[];

for(let i=0; i<transactions.length; i++){
    if(transactions[i].status==="success"){
        validTransaction.push(transactions[i]);
    }
}

console.log(validTransaction);

// Problem 3  Remove Negative Numbers
let arr3=[3, -1, 7, -4, 9, -2]

let ans3=[];
arr3.forEach(num=>{if(num>0)ans3.push(num)});

console.log(ans3);

//Problem 4

let arr4=[10, 5, 8, 21, 6];

let evenCount=0;

arr4.forEach(num =>{
    if(num%2===0){
        evenCount++;
    }
});

console.log(`No of even Numbers are : ${evenCount}`);


//Problem 5 
// Find Largest Number (No Math.max) 

let arr5=[4, 18, 2, 99, 37];

let maxNum=-1000;

for(let i=0; i<arr5.length; i++){
    if(arr5[i]>maxNum){
        maxNum=arr5[i];
    }
}

console.log(maxNum);


//Problem 6 — Reverse an Array (Without reverse())

let arr6=[1,2,3,4,5];

arr6.reverse();

console.log(arr6);

// Problem 7 Sum of All Elements

let arr7=[5,10,15];

let sum=0;

arr7.forEach(num=>{
    sum+=num;
});
console.log(sum);

// problem 8
const txns = [
  { id: 1, status: "success" },
  { id: 2, status: "failed" },
  { id: 3, status: "failed" }
]; 

const firstFailedTxn=txns.find(txn =>txn.status==="failed");

console.log(firstFailedTxn);

// Problem 9 check if any product out of stock
const products = [
  { name: "Pen", stock: 10 },
  { name: "Book", stock: 0 },
  { name: "Bag", stock: 5 }
];

const productOutOfStock=products.some(product => product.stock<= 0);

console.log(productOutOfStock);


//Problem 10 Check if all students passed (marks ≥ 40).
const marks = [55, 70, 32, 80];

let everyonePass=marks.every(mark=> mark>=40);

console.log(everyonePass);
 
// Problem 11  sort
const nums = [40, 5, 100, 25];

const sortedNums=nums.sort((a,b)=> b-a);// decreasing 
console.log(sortedNums);

//Problem 12
const categories = ["Electronics", ["Mobiles", "Laptops"], ["TV"]];
const flatArray=categories.flat(3);
console.log(flatArray);

// Problem 13 

const roles = ["user", "editor", "admin"];

console.log(roles.includes("admin"));

// Problem 14 Find index of product with id = 103.
const items = [
  { id: 101 },
  { id: 102 },
  { id: 103 }
];

console.log(items.findIndex(item => item.id===103));

// Problem 15 — slice() Paginate results (get first 3 records).
const data = [1,2,3,4,5,6,7];

console.log(data.slice(0,3));

//  Problem 16 Merge two API responses.

const page1 = [1,2,3];
const page2 = [4,5,6];

console.log(page1.concat(page2));

// problem 17
const products2 = [
  { name: "Phone", tags: ["tech","mobile"] },
  { name: "Shoes", tags: ["fashion"] }
];
console.log(products2.flatMap(product => product.tags));

// Problem 18 Remove the cancelled order at index 2.
const orders = ["pending", "shipped", "cancelled", "delivered"];

orders.splice(2,1);
console.log(orders);

// Product 19 — Replace a Product
const products3 = ["laptop", "oldPhone", "tablet"];
products3.splice(1,1 ,"newPhone");

console.log(products3);

// Problem 20 Insert Without Deleting
const stack = ["frontend", "backend", "database"]

stack.splice(2,0,"MiddleWare");
console.log(stack);


// Problem 20 Create URL Slug

const title = ["Learn", "JavaScript", "Fast"];

console.log(title.join("-"));

// Problem 21 const str = "I love JavaScript";

const str = "I love JavaScript";

console.log(str.split(" "));
 