// Problem 1
//Problem 1 — Basic Timer

setTimeout(()=>{
    console.log("Hello World");
},2000);



// Problem 2 Cancel a Scheduled Task

// Create a function that schedules a message after 5 seconds
// but allows cancelling it.

function schedulemessage(){
    const timer=setTimeout(()=>{
        console.log("Message Sent");
    },5000);

    return ()=>{
        console.log("Message Cancelled.");
        clearTimeout(timer);
    };
}

const cancel=schedulemessage();

cancel();

// Problem 4 — Replace setInterval with Safe Polling

async function poll(){
    console.log("Fectching...");

    setTimeout(()=>{
        console.log("result Fetched.")
    },1000);

    setTimeout(poll,3000);
}

// Problem 5 sleep ms 
function sleep (ms){
    setTimeout(()=>{
        console.log("sleep for 2 secs");
    },ms);
}


async function test(){
    console.log("Start");
    await sleep(2000);
    console.log("End");
}

test();
