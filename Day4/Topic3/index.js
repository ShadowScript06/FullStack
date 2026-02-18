// Problem 1
// 1️⃣ Merge User Profiles

const basicInfo = {
  name: "Prajwal",
  email: "prajwal@gmail.com"
};

const socialInfo = {
  github: "prajwaldev",
  twitter: "@prajwal"
};

const preferences = {
  theme: "dark",
  email: true
};


const ans={
    ...basicInfo,
    ...preferences,
    ...socialInfo
}

console.log(ans);

//Problem 2
//2️⃣ Remove Sensitive Fields
const user = {
  id: 101,
  name: "Prajwal",
  email: "prajwal@gmail.com",
  password: "hashed_password_123",
  role: "admin",
  token: "jwt_token_value"
};

const {password , token, ...safeUser}=user;

console.log(safeUser);

//Problem 3
//3️⃣ Convert Object → Query String

const params = {
  search: "node js",
  page: 2,
  sort: "date"
};

const query=new URLSearchParams(params);

console.log("?" + query.toString());

// Problem 4
//Count Properties in an Object
const user4 = {
  name: "Prajwal",
  email: "prajwal@gmail.com",
  role: "admin"
};

const len=Object.keys(user4).length;

console.log(len);