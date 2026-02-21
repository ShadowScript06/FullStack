//  Question 1 — Basic Error Catching

function parseJson(str){
    try {
        const parsedStr=JSON.parse(str);
        console.log(parsedStr);
    } catch (error) {
        console.log(error.message);
    }
}

// parseJson('{"name":"Prajwal"}');
// parseJson('wsadbfyu');


// Question 2 Using finally for Cleanup
function readResource(){
    try {
        console.log("resourse opened");
        throw new Error("Error reading file.")
    } catch (error) {
        console.log(error.message);
    }finally{
        console.log("resource closed");
    }
}

// try{
//     readResource();
// }catch(err){
//     console.log(err.message);
// }

// Question 3 — Return vs Finally Behavior (Tricky Interview Question)


function testFinally() {
  try {
    return "From Try";
  } catch (e) {
    return "From Catch";
  } finally {
    return "From Finally";
  }
}

// console.log( testFinally());


// Question 4  Async Error Handling with finally (MERN-Level)

// Create an async function fetchUserData():

// Simulate API call using setTimeout

// 50% chance to throw "Network Error"

// Use try…catch…finally

// In finally, log "Request Completed"

// Goal:
// Even if request fails → completion log must happen.

function mockApiCall(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const isSuccess=Math.random() >0.5;

            if(isSuccess){
                resolve({
                    id:1,
                    name:"Prajwal"
                })
            }else{
                reject(new Error("Network Error"));
            }
        },2000);
    })
}

async function fetchUserData(){
    try {
        console.log("Fetching user Data");

        const user=await mockApiCall();

        console.log(`User Data: ${JSON.stringify(user)}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }finally{
        console.log("Request complete")
    }
}

fetchUserData();