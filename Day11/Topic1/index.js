function debouce(fn,delay){
    let timer;

    return function(...args){
        clearTimeout(timer);
        
        timer=setTimeout(()=>{
            fn(...args);
        },delay);
    }
}

function throttle(fn,delay){
    let isThrottled=false;

    return function(...args){
        if (isThrottled) return;

        fn(...args);

        isThrottled=true;

        setTimeout(()=>{
            isThrottled=false;
        },delay);
    }
}

// debounce for search
const input=document.getElementById('search');

const handleInput=debouce((value)=>{
    console.log(`Searching: ${value}`);
},1000);


input.addEventListener("input", (e)=>{
    handleInput(e.target.value);
});

// throttle for button 
const button=document.getElementById("btn");

const apiCall=throttle(()=>{
    console.log("Api called")
},1000);

button.addEventListener("click",()=>{
    console.log("Button clicked");
    apiCall();
});





// debounce and throttling with obj

const user = {
  name: "Prajwal",
  greet(message) {
    console.log(message, this.name);
  }
};

user.debouncedGreet = debouce(user.greet, 1000);

user.debouncedGreet(); // undefined this lost


// by using apply 
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    const context = this; // capture this

    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context, args); // preserve this
    }, delay);
  };
}



user.debouncedGreet2 = debounce(user.greet, 1000);

user.debouncedGreet2("Hello");


// By  using bind
const debouncedgreet3=debouce(user.greet.bind(user),1000);

debouncedgreet3("hello");