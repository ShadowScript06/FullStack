// Problem 1 — Change Text on Button Click
const btn=document.getElementById('btn');

const title=document.getElementById('title');

btn.addEventListener("click",()=>{
    title.textContent="Welcome back."
})

//Problem 2 Change  Background color


const box=document.querySelector('.box');

box.addEventListener("mouseenter",()=>{
    box.style.backgroundColor="blue";
});
box.addEventListener("mouseleave",()=>{
    box.style.backgroundColor="red";
});



// Problem 3 — Count Paragraphs
function countElements(el){
    const elements=document.querySelectorAll(el);

    return (elements.length);
}

// console.log(countElements("h1"));

// Problem 4 Select and Change Text

//Select a <p> tag and change its text to "Hello DOM" when a button is clicked.
const  para=document.getElementById("para");
const p1Btn=document.getElementById("p1-btn");


p1Btn.addEventListener("click", ()=>{
    para.textContent="I am changed by event.";
});


// Problem 5 Toggle a class
const div=document.querySelector('.light');
const darkBtn=document.getElementById('dark-btn');

darkBtn.addEventListener("click",()=>{
    div.classList.toggle('dark');
});


//Problem 6 
// Create Element Dynamically

//Add a new <li> to a list when user types in input and presses Add.

const list=document.getElementById('list');
const addList=document.getElementById('addList');

addList.addEventListener('click',()=>{
    const newlist=document.createElement('li');
    newlist.textContent="athrav";
    list.appendChild(newlist);
});


// Problem 7
//Delete Item Using Event Delegation

//A list has many delete buttons. Handle delete using ONE listener on parent.

const todoList=document.getElementById('todo-list');

todoList.addEventListener("click" ,(e)=>{
    
    if(e.target.classList.contains("delete-btn")){//e.target → the actual clicked element (button here).
        const li=e.target.closest("li"); // find the parent <li>

        if(li){
            li.remove(); // remove li
        }
    }
});


//  Problem 8 Build a Counter Without Re-rendering Whole DOM
const counterValue=document.getElementById('counter-value');

const incrementBtn=document.getElementById('increment-btn');

let count=0;

incrementBtn.addEventListener('click', ()=>{
    count++;

    counterValue.textContent=count;
})


//Problem 9 // stop event bubbling 
const parent=document.getElementById('parent');
const child=document.getElementById('child');

parent.addEventListener("click",()=>{
    console.log("parent clicked");
});

child.addEventListener("click",(e)=>{
    console.log("Child clicked");
    e.stopPropagation();
});

//Problem 10 

const list10 = document.getElementById("list10");


const fragment=document.createDocumentFragment();

for(let i=1; i<=10; i++){
    const li =document.createElement('li');

    li.textContent=`Item ${i}`;

    fragment.appendChild(li);
}

list10.appendChild(fragment);
// this create container of 1000 list items and then add at once only 1 render

// Bad Approch
// for(let i = 1; i <= 1000; i++){
//     const li = document.createElement("li");
//     li.textContent = `Item ${i}`;
//     list.appendChild(li); // triggers 1000 reflows → laggy
// }

// this rerenders dom for 1000 times


// Problem 11
const searchInput=document.getElementById("search");
const items=document.querySelectorAll('#item-list li');

searchInput.addEventListener("input", (e)=>{
    const query=e.target.value.toLowerCase();

    items.forEach(item =>{
        const text=item.textContent.toLowerCase();

        item.style.display=text.includes(query) ? "list-item" :"none"
    })
});

// Problme 12
function delegate(parent,selector,eventType,handler){
    parent.addEventListener(eventType, (e)=>{
       const potentialTarget=e.target.closest(selector);

       if(potentialTarget && parent.contains(potentialTarget)){
        handler.call(potentialTarget,e);
       }
    })
}


// Problem 13 
const start=performance.now();

for(let i=0; i<10; i++){
    const li =document.createElement("li");

    li.textContent=`Item ${i}`;

    list10.appendChild(li);
}


const end=performance.now();

console.log(`DOM update took ${end-start} ms`);


// Efficient DOM work is about minimizing layout recalculations by batching mutations and avoiding read-write interleaving.