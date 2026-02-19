// Problem 1
// console.log("Start");

// async function greet(){
//     console.log("Hello");

//     const name =await new Promise((resolve, reject) => {
//         return resolve("World");
//     })
//     return name;
// }

// greet().then(res => console.log(res));

// console.log("end");

// Problem 2
// Microtask vs Macrotask

// console.log("start");

// setTimeout(()=>{
//     console.log("TImeout");
// },0);

// async function run(){
//     console.log("Inside");

//    const data= await Promise.resolve("Done");

//     console.log(data);
// }

// run();
// console.log("end");

// Sequential vs Parllel await 

function delay (name, time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("name " + name);
        },time)
    });
}

async function run(){
    const name1=await delay("prajwal",1000);
    console.log(name1);
    const name2 =await delay ("raj",2000);
    console.log(name2);
}

run();



async function parallel(){
    const names=await Promise.all([delay("deep" ,1000), delay("anuj", 2000)]);

    names.forEach((name)=>{
        console.log(name);
    });
}

parallel();


// Problem 5
console.log("1");

async function func(){
    console.log("2");

    await new Promise ((resolve,reject)=>{
        console.log("3");
        resolve();
    });

    console.log("4");
}

setTimeout(()=>{
    console.log("5")
},0);

func();

Promise.resolve().then(()=>console.log("6"));

console.log("7");

//1 2 7 3 4 6 5