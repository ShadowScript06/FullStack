
// Problem 1 Fetch and print all users
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=>res.json())
// .then((data)=> console.log(data));

// function async await 
async function getUsers(url){
    const res=await fetch(url);

    const data=await res.json();

    console.log(data);
}

// getUsers("https://jsonplaceholder.typicode.com/users");


// Problem 2
async function loadUsers(){
    try {
        const res=fetch("https://jsonplaceholder.typicode.com/users");

        if(!res.ok) throw new Error("Failed to load");

        const data=(await res).json();

        console.log(data);
        
    } catch (error) {
        console.log(error.message);
    }
}

// Problem 3
//Display user inside html

async function renderUsers(){
const res=await fetch("https://jsonplaceholder.typicode.com/users");

const users=await res.json();

const fragment=document.createDocumentFragment();

users.forEach((user)=>{
    const li=document.createElement("li");
    li.textContent=user.name;

    fragment.appendChild(li);
});

const list=document.createElement("ul");

list.appendChild(fragment);

document.body.appendChild(list);

}

// Problem 4

//Send POST request
async function createPost(url,payload){
    const res=await fetch(url,{
         method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
         body: JSON.stringify(payload)
    })

    const data=await res.json();

    console.log(data);
}

// createPost("https://jsonplaceholder.typicode.com/posts", {

//      title: "Hello",
//       body: "Learning Fetch",
//       userId: 1
// });


//Problme 5 Fetch posts of a specific user

async function getUserPosts(userId){
    const res=await fetch (
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    )

    const posts=await res.json();

    console.log(posts);



}

// getUserPosts(2);

// Problem 6 Reusable API Wrapper

async function api(url,options={}){
    const res=await fetch(url, options);

    if(!res.ok) throw new Error ("Api Error");

    return res.json();
}

// const users = await api("https://jsonplaceholder.typicode.com/users");

// console.log(users);


// Problem 7 fetch multiple request 

async function loadDashboard(){
    const [users,posts]=await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json()),
    fetch("https://jsonplaceholder.typicode.com/posts").then(r => r.json())
    ]);

    console.log(users,posts);
}

// loadDashboard();

// Problem 8 // update data
async function updatePost(){
    const res=await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
        ,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title:"Updated title"
            })
        });

        const data=await res.json();

        console.log(data);
}

// updatePost();


// Problme 9
async function deletePost(id){
    const res =await fetch (
       `https://jsonplaceholder.typicode.com/posts/${id}`,
    { method: "DELETE" } 
    );

    if(res.ok) console.log("Delete Succesful");

}

// deletePost(1);


// Problem 10

//Cancel API request if user leaves page
const controller=new AbortController();

async function loadData(){
    try {
        const res=await fetch("https://jsonplaceholder.typicode.com/photos",{
            signal:controller.signal
        });

        const data=await res.json();

        console.log(data);
    } catch (error) {
        console.log("request cancelled");
    }
}

loadData();
setTimeout(()=>{
    controller.abort()
},500);