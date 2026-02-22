// Question 1 — Create a Private Counter

function createCounter(){
    let count =0;

    return {
        increment(){
            count++;
        },
        decrement(){
            if(count>0){
                count--;
            }
        },
        value(){
            return count;
        }
        
    }
}


const counter1=createCounter();

// counter1.increment();
// console.log( counter1.value());


// Question 2 — Function That Runs Only Once

function once(fn){
    let called=false;

    return function(...args){
        if(!called){
            called=true;
            return fn(...args);
        }else{
            console.log("Called before once.")
        }
    }
}

const init=once(()=> console.log("Intialised"));

init();
init();
init();


//Create Your Own setTimeout Loop Fix

for(var i=0; i<3; i++){
    setTimeout(()=>{
        console.log(i);
    },1000);
}

for(let i=0; i<3; i++){
    setTimeout(()=>{
        console.log(i);
    },1000);
}


// Question 4 — Create a Function Memoizer
function memoize(fn){
    const cache={};

    return function (n){
        if(cache[n]){
            console.log("From cache");
            return cache[n];
        }
        console.log("Calculating..");

        const result=fn(n);

        cache[n]=result;

        return result;
    }
}

const square=memoize(n=>n*n);

console.log(square(5));

console.log(square(7));

console.log(square(5));

// Create a custom useState

function useState(initialValue){
    let currstate=initialValue;
    function setState(newValue){
        currstate=newValue;
    }
    function state(){
        return currstate;
    }
    return [state,setState];
}


const [count,setCount]=useState(0);

console.log(count());

setCount(7);

console.log(count());
