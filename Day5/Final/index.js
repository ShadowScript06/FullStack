const users = ["prajwal", "raj", "yogi"];

async function api(username) {

  try {
    console.log(users);
     username = validateUsername(username);
    const isAvailable=await checkAvailibilty(username);

    if(!isAvailable){
        return;
    }
   

    await addUser(username);

    console.log("User added Succesfully.");
    console.log(users);
  } catch (error) {
    console.log("username already exist.");
  }
  
}

function checkAvailibilty(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i < users.length; i++) {
        if (users[i] === username) {
          reject(false);
          break;
        }
      }
      resolve(true);
    }, 2000);
  });
}

function validateUsername(username) {
  const validatedUsername = username.trim().toLowerCase();

  return validatedUsername;
}

function addUser(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.push(username);
      resolve();
    }, 1000);
  });
}

async function run (){
   await api("Prajwal");
await api("Prajwal");
await api("prajwal");
await api("raj");
await api ("bunty");
}

run();

