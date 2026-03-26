// Problem 1

let num1 = 3;

if (num1 > 0) {
  console.log("Positive");
} else if (num1 < 0) {
  console.log("Negetive");
} else {
  console.log("Zero");
}

// Problem 2
let num2 = 89;

if (num2 % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// Problem 3
let num3 = 75;

if (num3 % 5 === 0) {
  console.log("Divisible by 5");
} else {
  console.log("Not divisiblw by 5");
}

// Problem 4

let num4 = 15;

if (num4 % 3 === 0 && num4 % 5 === 0) {
  console.log("Divisible by 3 and 5");
} else {
  console.log("Not divisible by 3 and 5");
}

//Problem 5
let year5 = 2003;

if (year5 % 4 === 0) {
  console.log("leap year");
} else {
  console.log("Not leap year");
}

// Problem 6
let numa6 = 7;
let numb6 = 9;

if (numa6 > numb6) {
  console.log(numa6);
} else {
  console.log(numb6);
}

// Problem 7
let a7 = 9;
let b7 = 8;
let c7 = 32;

if (a7 > b7 && a7 > c7) {
  console.log(a7);
} else if (b7 > c7 && b7 > a7) {
  console.log(b7);
} else if (c7 > a7 && c7 > b7) {
  console.log(c7);
}

// Problem 8

let temp8 = 10;

if (temp8 <= 10) {
  console.log("Cold");
} else if (temp8 > 10 && temp8 <= 20) {
  console.log("warm");
} else {
  console.log("Hot");
}

// Problem 9

let char9 = "b";

if (
  char9 === "a" ||
  char9 === "i" ||
  char9 === "o" ||
  char9 === "e" ||
  char9 === "u"
) {
  console.log("Vovel");
} else {
  console.log("consonant");
}

// Problem 10
let char10 = "45";

if (char10 >= "A" && char10 <= "Z") {
  console.log("Uppercase");
} else if (char10 >= "a" && char10 <= "z") {
  console.log("lowercase");
} else if (char10 >= "0" && char10 <= "9") {
  console.log("digit");
} else {
  console.log("Special char");
}

// Looping
// Problem 11
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// problem 12
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// problem 13
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Problem 14
for (let i = 10; i >= 1; i--) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Problem 15

let n15 = 8;
for (let i = 1; i <= 10; i++) {
  console.log(`${i} X ${n15} = ${i * n15}`);
}

// problem 16

let n16 = 9;
let sum16 = 0;

for (let i = 1; i <= n16; i++) {
  sum16 += i;
}
console.log(sum16);

// Problem 17

let n17 = 9;
let sum17 = 0;

for (let i = 1; i <= n17; i++) {
  if (i % 2 === 0) {
    sum17 += i;
  }
}
console.log(sum17);
// Problem 18

let n18 = 9;
let sum18 = 0;

for (let i = 1; i <= n18; i++) {
  if (i % 2 !== 0) {
    sum18 += i;
  }
}
console.log(sum18);

// Problem 19

let num19 = 5;

let fact19 = 1;

for (let i = num19; i >= 1; i--) {
  fact19 = i * fact19;
}

console.log(fact19);

// Problem 20

let num20 = 1234;

let product20 = 1;

while (num20 > 1) {
  let digit = num20 % 10;

  product20 = product20 * digit;

  num20 = Math.floor(num20 / 10);
}

console.log(product20);

// problem 21

function printnum(num, n) {
  if (num > n) {
    return;
  }

  console.log(num);

  printnum(num + 1, n);
}

printnum(1, 10);

// Problem 22
function printnumdesc(num, n) {
  if (num < n) {
    return;
  }

  console.log(num);

  printnumdesc(num - 1, n);
}

printnumdesc(10, 1);

console.log("problem 13");
// Problem 13
function printoddnum(num, n) {
  if (num % 2 === 0) {
    num = num + 1;
  }

  if (num > n) {
    return;
  }

  console.log(num);

  printoddnum(num + 2, n);
}

printoddnum(2, 10);

// problem 14
function printevennum(num, n) {
  if (num % 2 !== 0) {
    num = num + 1;
  }

  if (num > n) {
    return;
  }

  console.log(num);

  printevennum(num + 2, n);
}

printevennum(2, 10);

// problem 25

let sum25 = 0;
function printSum(num, n) {
  if (num > n) {
    return;
  }

  sum25 += num;

  printSum(num + 1, n);
}

printSum(1, 10);

console.log(sum25);

// Problem 26
function factorial(num) {
  if (num === 0 || num === 1) {
    return num;
  }

  return num * factorial(num - 1);
}

console.log(factorial(5));

// problem 27
function power(num, index) {
  if (index === 0) {
    return 1;
  }

  return num * power(num, index - 1);
}

console.log(power(2, 3));

// Problem 28
function fibonacci(n) {
  if (n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(8));

// problem 29
function printfibonacci(n) {
  console.log(0);
  console.log(1);

  function print(curr, prev, n, index) {
    if (index > n) {
      return;
    }

    let next = prev + curr;

    console.log(next);

    prev = curr;

    curr = next;

    print(curr, prev, n, index + 1);
  }

  print(1, 0, n, 3);
}

printfibonacci(8);

//  Problem 30

function calculateSum(num) {
  let sum = 0;
  function sumofdigit(num) {
    if (num < 1) {
      return;
    }

    let digit = num % 10;

    sum += digit;

    sumofdigit(Math.floor(num / 10));
  }

  sumofdigit(num);
  console.log(sum);
}
calculateSum(456);


// problem 31

let n=5;

let arr=[];
for(let i=1; i<=n; i++){
    arr.push(Math.floor(Math.random()*10));
}

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}


// problem 32
  function findSumArray(arr){
    let sum=0;

    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }

    return sum;
  }

  console.log(findSumArray([1,2,3,4,5]));

  // Problem 33

  let arr33=[4,6,2,45,564,234];

  const sum33=findSumArray(arr33);

  const avg33=Math.floor(sum33/arr33.length);

  console.log(avg33);


  // problem 34 && 35 

  function findMaxMin(arr){
    let max= Number.MIN_SAFE_INTEGER;
    let min=Number.MAX_SAFE_INTEGER;

    for(let i=0; i<arr.length; i++){
        max=Math.max(max,arr[i]);
        min=Math.min(min,arr[i]);
    }

    console.log(`Max: ${max}`);
    console.log(`Min: ${min}`);

  }

  findMaxMin([12,34,1]);


  // Problem 36
  function count(arr){
    let zero=0;
    let positive=0;
    let negetive=0;

    for(let i=0; i<arr.length; i++){
        if(arr[i]>0){
            positive++;
        }else if(arr[i]<0){
            negetive++;
        }else{
            zero++;
        }
    
    }

    console.log(`Positive: ${positive}`);
    console.log(`Negetive: ${negetive}`);
    console.log(`Zero: ${zero}`);

  }

  count([-1,-2,5,-8,0,8,1,0.6]);


// problem 37
  function countOddEven(arr){
    let odd=0;
    let even=0;
 

    for(let i=0; i<arr.length; i++){
        if(arr[i]%2===0){
            even++;
        }else{
            odd++;
        }
    
    }

   console.log(`EVEN: ${even}`);
   console.log(`ODD: ${odd}`);


  }

  countOddEven([1,2,3,4,5,6,7,8,9,89]);

  // Problem 38 and 39
  function fincdIndexOfMinMax(arr){
     let max= Number.MIN_SAFE_INTEGER;
    let min=Number.MAX_SAFE_INTEGER;

    let minIndex=null;
    let maxindex=null;

    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
            maxindex=i;
        }
        if(arr[i]<min){
            min=arr[i];
            minIndex=i;
        }
    }

    console.log(`Maxindex: ${maxindex}`);
    console.log(`Minindex: ${minIndex}`);



  }

  fincdIndexOfMinMax([6,2,3]);

  // problem 40
  let arr40=[1,2,3,4,5,6567,7,8];

  let k40=7;

  for(el of arr40){
   
    if(el>k40){
        console.log(el);
    }
  }


// problem 41
let str41="asdsfgbhgfdas";

console.log(str41.length);


// problem 42
let str42="asdsfdgfsdi";

console.log(str42[0], str42[str42.length-1]);


// problem 43 & 44
let str43="Prajwakl";

console.log(str43.toUpperCase());

console.log(str43.toLowerCase());


//problem 45
let str45="my name is prajwalk";



let count45=0;

for(let i=0; i<str45.length; i++){
    let ch=str45[i];

    if(ch!==" "){
        count45++;
    }
}

console.log(count45);

// problem 46
let str46="my name is raj";

console.log(str46.split(" ").length);

// raw way
let count46=0;
let inword=false;

for(let i=0; i<str46.length; i++){
    if(str46.charAt(i)!==" " && !inword){
        count46++;
        inword=true;
    }else if(str46.charAt(i)===" "){
        inword=false;
    }
}

console.log(count46);

// problem 47v
let stra47="hello name";
let strb47="prajwal";

console.log(stra47 + " "+strb47);

console.log(stra47.concat(" ").concat(strb47));


//Problem 48

let str48a="apple";
let str48b="banana";

let result=str48a.localeCompare(str48b);

if(result===0){
    console.log("Both are equal")
}else if(result < 0){
    console.log( str48a + " comes first");
}else{
     console.log( str48b + "comes first");
}

if (str48a < str48b) {
    console.log("str1 comes before str2");
} else if (str48a > str48b) {
    console.log("str1 comes after str2");
} else {
    console.log("Both are equal");
}

function comparestrings(str1,str2){
    let n=Math.min(str1.length, str2.length);

    for(let i=0; i<n; i++){
        if(str1[i] !== str2[i]){
            return str1[i]<str2[i] ? -1: 1;
        }
    }

    if(str1.length === str2.length) return 0;

    return str1.length <str2.length ? -1: 1;
}

console.log(comparestrings(str48a,str48b));

// Problem 49
let str49="prajwal";

for(let i=0; i<str49.length; i++){
    console.log(str49.charCodeAt(i));
}

// Problem 50
let str50 = "   ";

if (str50.trim().length === 0) {
    console.log("String is empty");
} else {
    console.log("String is not empty");
}

// problem 51
function isArmStrong(num){
   let str=num.toString();

   let power=str.length;

   let sum=0;

   for(let i=0; i<str.length; i++){
    let digit=Number(str[i]);
    sum+=digit **power;
   }

   return sum===num;

}

console.log(isArmStrong(153));
console.log(isArmStrong(123));

// probloem 52
for(let i=1; i<=1000; i++){
    if(isArmStrong(i)){
        console.log(i);
    }
}


// problem 53
let num53=1232;

let evencount=0;
while(num53 >1){
    let digit=num53%10;

    if(digit%2===0){
        evencount++;
    }

    num53=Math.floor(num53/10);
}

console.log(evencount);

// problem 54

function isPrime(num){
    if(num===1 || num===2){
        return true;
    };
    if(num %2 ===0){
        return false;
    }

    for(let i=3; i<num; i++){
        if(num % i ===0){
            return false;
        }
    }

    return true;
}


for(let i=0; i<100; i++){
    if(isPrime(i)){
        console.log(i);
    }
}


// Problem 55
function reverseNumber(num){
    let str=num.toString();

    let revStr="";

    for(let i=str.length-1; i>=0; i--){
        revStr+=str[i];
    }

    console.log(Number(revStr));

}

reverseNumber(123);

function revNumber(num){
    let rev=0;

    while (num>0){
        let digit=num %10;
        rev=rev*10 +digit;

        num=Math.floor(num/10);
    }

    console.log(rev);
    return rev;
}

revNumber(123);


// PROBLEM 56
function checkPalindrome(num){
    let rev=revNumber(num);

    console.log(rev===num);
}

checkPalindrome(121);
checkPalindrome(123);

function checkPerfectNumber(num){
    let sum=0;

    for(let i=1; i<num; i++){
        if(num%i===0){
            sum+=i
        }
    }

    return sum===num;
}

console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(14));

for(let i=1; i<=100000; i++){
    if(checkPerfectNumber(i)){
        console.log(i);
    }
}