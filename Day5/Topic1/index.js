// Problem 1
// Basic Callback Execution
function processUser(name,callback){
    console.log(name);
    callback();
}

processUser("Prajwal", ()=>{
    console.log("User processed.");
});

// Problem 2
//Custom forEach Using Callback

function myForEach(arr,callback){
    for(let i=0; i<arr.length; i++){
        callback(arr[i]);
    }
}

myForEach([1,2,3], (num)=>{
    console.log(num*2);
});

// Problem 3
// Async Simulation with setTimeout
// Task:
//Create a function fetchData(callback) that simulates fetching data after 2 seconds and passes "Data received" to the callback.


function fetchData (callback){
    console.log("API called.. Waiting for response..")
    setTimeout(()=>{
        callback("Data Recieved.");
    },2000);
}

const callback= (message)=>{
    console.log(message);
}

fetchData(callback);



// Problem 4
function calculate(a,b, operationcallback){
    return operationcallback(a,b);
}

function add(a,b){
    console.log(`Addition of ${a} and ${b}: `);
    console.log(a+b);
}

function sunstract(a,b){
    console.log(`Substraction of ${a} and ${b}: `);
    console.log(a-b);
}

function multiply(a,b){
    console.log(`Multiplication of ${a} and ${b}: `);
    console.log(a*b);
}

function divide(a,b){
    console.log(`Division of ${a} and ${b}: `);
    console.log(a/b);
}

calculate(5,3,add);
calculate(5,3,sunstract);
calculate(5,3,multiply);
calculate(6,3,divide);



// Problem 5
// function executeOrder(){
//     setTimeout(()=>{
//         console.log("User fetched 1");
//         setTimeout(()=>{
//             let arr=[100,200,600,800];
//             console.log("Orders Fetched..");
           
//             setTimeout(()=>{
//                 console.log("Total calculated.")
//                console.log( arr.reduce((sum,price)=>{
//                     return sum+price;
//                 },0))
//             },1000);
//         },1000);
//     },1000);
// }
// console.log(executeOrder());

// callback based
function getUser(callback){
    setTimeout(()=>{
        console.log("User Fetched");
        callback({id:1});
    },1000)
}

function getOrders(userId,callback){
    setTimeout(()=>{
        console.log("Orders Fetched");
        callback([100,200,600,800]);
    },1000);
}

function getTotal(orders,callback){
    setTimeout(()=>{
        const total=orders.reduce((sum,price)=>{
            return  sum+price;
        },0);

        console.log("Total calculated");
        callback(total);
    },1000);
}

function printTotal(total){
    console.log(total);
}

getUser((user)=>{
    getOrders(user.id, (orders)=>{
        getTotal(orders,(total)=>{ printTotal(total)});
    });
});