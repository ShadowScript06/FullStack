const practiceSheet=require("./practice");

let username:string="prajwal";

let age:number=22;

let isLoggedIn:boolean=true;


console.log(username);
console.log(age);
console.log(isLoggedIn);


function add(a:number,b:number):number{
    return a+b;
}

console.log(add(3,5));

let numbers:number[]=[1,2,3,4,5];

console.log(numbers);

interface User{
    id:number
    name:string
    age:number
}

const users:User[]=[
    {id:1,name:"prajwal",age:22},
    {id:2,name:"Athrav",age:18},
    {id:3, name:"Raj",age:25}
]

console.log(users);

let userId:number|string;

userId=3;
userId="athra567";

console.log(userId);

function printId(id:number|string){
    if(typeof id==="string"){
        console.log(id.toUpperCase());
    }else{
        console.log(id);
    }
}

printId(3);
printId("prajwal");


interface Product{
    id:number,
    name:string,
    price:number
}

const laptop:Product={
    id:1,
    name:"Laptop",
    price:75000
}

console.log(laptop);

function identity<T>(value:T):T{
    return  value;
}

console.log(identity(3));
console.log(identity(true));
console.log(identity("raja"));

function getFirst<T>(arr:T[]):T{
    return arr[0];
}

console.log(getFirst([1,2,3]),
getFirst(["a","b","c"]),
getFirst([1,"b",true]))

enum OrderStatus{
    Pending="PENDING",
    Shipped="SHIPPED",
    Delivered="DELIVERED"
}

let order:OrderStatus =OrderStatus.Shipped;

console.log(order);


interface ApiResponse<T>{
    success:boolean,
    data:T
    message:string
}

interface Order{
    productName:string,
    total:number,
    status:OrderStatus,
}

const response:ApiResponse<Order>={
    success:true,
    data:{
        productName:"LAptop",
        total:57000,
        status:OrderStatus.Delivered
    },
    message:"order Delivered"
}

console.log(response);


interface Task{
    id:number,
    title:string,
    completed:boolean
}

let tasks:Task[]=[
    {id:1,title:"play game",completed:false}
]

function addTask(title:string):Task{

    const newTask:Task={
        id:tasks.length+1,
        title,
        completed:false
    }

    tasks.push(newTask);
    return newTask;
}

addTask("Do hoimework");

console.log(tasks);

practiceSheet.practice();