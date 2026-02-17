// Problem 1
// Print numbers 1–100 divisible by 3.
for(let i=1; i<=100; i++){
    if(i%3==0){
        console.log(i);
    }
}

//Problem 2
// Calculate factorial of a number.
let num=5;
let i=1;
let result=1;
 while(i<=num){
    result=i*result;
    i++;
 }
 console.log(result);

 // PRoblem 3
 //Find the sum of elements in an array.

 let arr=[3,7,1,2,98];
 let sum=0;

//  for(let i=0; i<arr.length; i++){
//     sum+=arr[i];
//  }

 console.log(sum);

 for(let num of arr){
    sum+=num;
 }
 console.log(sum);


 // Problem 4
 // Reverse a string using a loop.

 let  str="asdbvfyufa";
 let rev="";

 for(let i=str.length-1; i>=0; i-- ){
    rev+=str[i];
 }

 console.log(rev);

 // problem 5
 // Nested loops: print multiplication table 1–10.

 for(let i=1; i<=10; i++){
    for(let j=1; j<=10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
 }