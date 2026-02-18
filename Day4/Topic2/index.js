// slug generator
// "My First Blog" → "my-first-blog"

// Problem 1

const str="My First Blog";

let arr=str.split(" ");

let ans=arr.join("-");

console.log(ans);

//Mask Credit Card
// Problem 2
const str1="123412342341243";

const last4=str1.slice(-4);

const masked="*".repeat(str1.length-4);

console.log(masked+last4);

// Problem 3
const str3="I love backend development";
  const ans3=  str3.trim().split(/\s+/).length;
  console.log(ans3);


// Problem 4
// Extract Domain

const link="https://www.google.com/search?q=js";

const obj=new URL(link);

console.log(obj.hostname.replace(/^www\./,""));