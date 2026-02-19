// Problem 1 Create a Promise That Resolves After 1 Second

function waitOneSecond (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("done");
        },1000);
    })
}

waitOneSecond().then(console.log);

// Problem 2 Convert Callback to Promise

function getData(cb){
  setTimeout(()=>cb("Data received"),1000);
}

function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data recieved");
        },1000);
    })
}


//Problem 3  Chain Two Async Operations

function getUser(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                id:1,
                name:"Prajwal"
            })
        },1000);
    });
}

function getOrder(userId){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(["Order1", "Order2"]);
        },1000);
    });
}


getUser().then(user => getOrder(user.id)).then(console.log);

// Probowem 4 handle errors in chain 
function getorders(){
    return new Promise((resolve,reject)=>{
        Math.random()>0.5 ? resolve(["order"]): reject ("Failed");
    })
}

getUser().then(user => getorders(user.id)).then(console.log).catch(err => console.log(err));


// Problem 5

function fetchUser(){
    return new Promise ((resolve,reject)=>{
        Math.random()>0.5 ? resolve(["Prajwal", "Raj", "Deep"]) : reject("User failed");
    });
}

function fetchPosts(){
    return new Promise ((resolve,reject)=>{
         Math.random()>0.1 ? resolve(["Post1", "Post2", "Post3"]) : reject("Post failed");
    })
}

function fetchComments(){
    return new Promise ((resolve,reject)=>{
         Math.random()>0.1 ? resolve(["comment1", "comment2", "comment3"]) : reject("Comments failed");
    })
}


Promise.all([fetchUser(),fetchPosts(),fetchComments()]).then(([users,posts,comments])=>{
    console.log(users,posts,comments);
}).catch(err => console.log(err));

// problem 6 
// Build a Timeout Wrapper  If API takes more than 2 seconds → reject.

function withTimeout (promise,ms){
    const timeout =new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            reject("Timeout")
        },ms);
    });
    // clg
    console.log("first");
    return Promise.race([promise(),timeout]);
}

withTimeout(fetchPosts).then(console.log).catch(err => console.log(err));

// Promise 7 Create your own delay utility 

function delay(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },ms)
    })
}

delay(10000).then(()=>console.log("Waited"));

// Problem 8
// 

