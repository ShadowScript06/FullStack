// Problem 1
// Write a function to check prime number.

function isPrime(num){
   if(num ==1 ||  num ==2){
   console.log("Prime");
   }

   for(let i=2;i<num; i++){
        if(num%i==0){
            console.log("Not Prime.")
            return;
        }
   }

   console.log("Prime");
}

isPrime(12);

// problem 2

// recursive facorial function

const factorial=function(num){
    if(num===0 || num===1){
        return 1;
    }

    return num*factorial(num-1);
}

console.log(factorial(5));

// problem 3
// Function to capitalize first letter of every word.

function capitalise(str){
   const arr= str.split(" ");

   const newArr=arr.map((word)=>{
    return  word.charAt(0).toUpperCase()+ word.slice(1);
   });

   return newArr.join(" ");

}

const str=capitalise("hi i am prajwal");
console.log(str);




