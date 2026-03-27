// Problem 1
function validTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

console.log(validTriangle(3, 4, 5));
console.log(validTriangle(1, 2, 3));

// Problem 2
function typeOfTraingle(a, b, c) {
  if (!validTriangle(a, b, c)) return "Not a valid traiangle.";

  if (a === b && b === c) {
    return "Equilateral";
  } else if (a === b || b === c || a === c) {
    return "Isoscles";
  } else {
    return "Scalene";
  }
}

// Problem 3
function getGrade(marks) {
  if (marks > 90) {
    return "A";
  } else if (marks > 80 && marks <= 90) {
    return "B";
  } else if (marks > 70 && marks <= 80) {
    return "C";
  } else if (marks > 60 && marks <= 70) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(78));
console.log(getGrade(89));
console.log(getGrade(64));
console.log(getGrade(34));

// Problem 4
function ismultiple(a, b) {
  if (a > b) {
    if (a % b === 0) {
      return `${a} is multiple of ${b}`;
    }
    return "No multiple";
  } else if (b > a) {
    if (b % a === 0) {
      return `${b} is multiple of ${a}`;
    }
    return "No multiple";
  } else {
    return "No multiple";
  }
}

console.log(ismultiple(3, 2));

console.log(ismultiple(3, 6));

// Problem 5
function greetOnTime(time) {
  if (time < 0 || time > 23) {
    return "Invalid Input";
  }
  if (time >= 5 && time < 12) {
    return "Good Morning";
  } else if (time >= 12 && time < 18) {
    return "Good Afternoon";
  } else if (time >= 18 && time < 22) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}

console.log(greetOnTime(5));
console.log(greetOnTime(12));
console.log(greetOnTime(18));
console.log(greetOnTime(22));
console.log(greetOnTime(55));

// Problem 6

function checkVotingEligibility(age) {
  if (age < 0 || age > 120) {
    return "Invalid age";
  }

  if (age < 18) {
    return "Not Eligible for voting";
  } else {
    return "Eligible for voting";
  }
}

console.log(checkVotingEligibility(17));
console.log(checkVotingEligibility(56));
console.log(checkVotingEligibility(123));

// Problem 7
function checkOddEven(a, b) {
  if (a % 2 === 0 && b % 2 === 0) {
    return "Both are Even";
  } else if (a % 2 !== 0 && b % 2 !== 0) {
    return "Both are odd";
  } else if (a % 2 === 0 && b % 2 !== 0) {
    return `${a} is even and ${b} is odd`;
  } else {
    return `${a} is odd and ${b} is even`;
  }
}

console.log(checkOddEven(1, 2));
console.log(checkOddEven(2, 4));
console.log(checkOddEven(3, 5));
console.log(checkOddEven(1, 6));

// Problem 8
function checkAlphabetPosition(ch) {
  if (ch >= "a" && ch <= "m") {
    return `${ch} lies between a and m`;
  } else if (ch >= "n" && ch <= "z") {
    return `${ch} lies between n and z`;
  } else {
    return "Invalid input";
  }
}

console.log(checkAlphabetPosition("b"));
console.log(checkAlphabetPosition("p"));
console.log(checkAlphabetPosition("12"));

function printDay(number) {
  switch (number) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid input";
  }
}

console.log(printDay(1));
console.log(printDay(6));
console.log(printDay(9));

function printDaysOfMonth(number) {
  switch (number) {
    case 1:
      return 31;
    case 2:
      return 28;
    case 3:
      return 31;
    case 4:
      return 30;
    case 5:
      return 31;
    case 6:
      return 30;
    case 7:
      return 31;
    case 8:
      return 31;
    case 9:
      return 30;
    case 10:
      return 31;
    case 11:
      return 30;
    case 12:
      return 31;
    default:
      return "Invalid input";
  }
}

console.log(printDaysOfMonth(4));
console.log(printDaysOfMonth(10));
console.log(printDaysOfMonth(16));

// Problem 11
function countDigits(number) {
  let count = 0;

  while (number > 0) {
    number = Math.floor(number / 10);
    count++;
  }
  return count;
}

console.log(countDigits(123));

// Problem 12
function reverseNumber(number) {
  let ans = 0;

  while (number > 0) {
    digit = number % 10;

    ans = ans * 10 + digit;

    number = Math.floor(number / 10);
  }

  return ans;
}

console.log(reverseNumber(123));

// Problem 13
function checkPalindrome(number) {
  const rev = reverseNumber(number);

  return rev === number;
}

console.log(checkPalindrome(121));
console.log(checkPalindrome(123));

function checkArmstrong(number) {
  const noOfdigit = countDigits(number);

  let ans = 0;
  let temp = number;
  while (temp > 0) {
    let digit = temp % 10;
    ans += digit ** noOfdigit;

    temp = Math.floor(temp / 10);
  }

  return ans === number;
}

console.log(checkArmstrong(153));
console.log(checkArmstrong(9474));
console.log(checkArmstrong(123));

function checkPerfectNumber(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  return sum === number;
}

console.log(checkPerfectNumber(28));

console.log(checkPerfectNumber(29));

// Problem 17 18
function isPrime(number) {
  if (number === 1 || number === 2) {
    return true;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function printPrime(number) {
  let arr = [];
  for (let i = 1; i <= number; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(printPrime(100));

//Problem 19
function fibonacci(number) {
  let arr = [0, 1];

  number = number - 2;

  let prev = 0;
  let curr = 1;

  while (number > 0) {
    let fib = arr[prev] + arr[curr];

    arr.push(fib);

    curr++;
    prev++;
    number--;
  }

  return arr;
}

function sumOfFib(n) {
  let arr = fibonacci(n);

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(fibonacci(15));

console.log(sumOfFib(10));

// Problem 21

function countDigitRec(number) {
  let ans = 0;

  function helper(number) {
    if (number <= 0) {
      return;
    }
    ans++;

    helper(Math.floor(number / 10));
  }

  helper(number);

  return ans;
}

console.log(countDigitRec(123));

// Problem 22
function revNumberRec(num) {
  let ans = 0;

  function helper(n) {
    if (n <= 0) {
      return;
    }

    let digit = n % 10;

    ans = ans * 10 + digit;

    helper(Math.floor(n / 10));
  }

  helper(num);

  return ans;
}

console.log(revNumberRec(123));

// problem 24

function productRec(num) {
  let ans = 1;

  function helper(n) {
    if (n <= 0) {
      return;
    }

    let digit = n % 10;

    ans = ans * digit;

    helper(Math.floor(n / 10));
  }

  helper(num);

  return ans;
}

console.log(productRec(123));

// Problem 25
function gcd(a,b){
    if(b===0){
        return a;
    }

    return gcd(b, a%b);
}

console.log(gcd(48,18));

// Problem 26
function toBinary(num){
    if(num===0) return "0";
    
    if(num===1) return "1";

   return  toBinary(Math.floor(num/2))+num%2;
}

console.log(toBinary(10));

// problem 27
function  sayDigit(num){
    const arr=["ZERO", "ONE", "TWO","THREE","FOUR", "FIVE", "SIX", "SEVEN", "EIGHT","NINE" ];

    let rev=reverseNumber(num);

    let ans="";
    function helper(num){
        if(num<=0){
            return;
        }

        let digit=num%10;

        ans+=arr[digit];

        ans+=" ";

        helper(Math.floor(num/10));
    }

    helper(rev);

    return ans;
}


console.log(sayDigit(308));


// Problem 28 29
function sumOfOddEven(num){
    let oddSum=0;
    let evenSum=0;
    let total=0;
    function helper(index,num){
        if(index>num) return;

        if(index%2===0){
            evenSum+=index;
        }else{
            oddSum+=index;
        }
        
        total+= index;
        helper(index+1,num);
    }

    helper(0,num);

    return {oddSum:oddSum, evenSum:evenSum, total:total};
}


console.log(sumOfOddEven(15));

// problem 30 




// Problem 31
function squareArr(arr){
    let ansArr=[];

    for(let i=0; i<arr.length; i++){
        ansArr.push(arr[i]*arr[i]);
    }

    return ansArr;
}

console.log(squareArr([1,2,3]));


// Problem 32
function oddArr(arr){
    let ansArr=[];

    for(let i=0; i<arr.length ;i++){
        if(arr[i]%2!==0){
            ansArr.push(arr[i]);
        }
    }

    return ansArr;

}

console.log(oddArr([1,2,3,4,5,6]));


// problem 33
function replaceNegetive(arr){
    let ansArr=[];

    for(let i=0; i<arr.length ;i++){
        if(arr[i]<0){
            ansArr.push(0);
        }else{
            ansArr.push(arr[i]);
        }
    }

    return ansArr;
}

console.log(replaceNegetive([-1,0,-3,1,2,4,-5]));


// map function
function customMap(arr,callback){
    let ansArr=[];

    for(let i=0; i<arr.length; i++){
        let ans=callback(arr[i]);
        ansArr.push(ans);
    }

    return ansArr;
}

// Problem 34
function replaceOddEven(arr){
    let ans=customMap(arr,(n)=>{
        if(n%2===0){
            return 1;
        }else{
            return 0;
        }
    });

    return ans;
}


console.log(replaceOddEven([1,2,3,4,5,6]));

// Problem 35
function swapFirstAndLast(arr){
    let first=arr[0];
    let last=arr[arr.length-1];

    arr[0]=last;
    arr[arr.length-1]=first;

    return arr;
}


console.log(swapFirstAndLast([1,2,3]));

// Problem 36
function revArray(arr){
    let i=0;
    let j=arr.length-1;

    while (i<j){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;

        i++;
        j--;
    }

    return arr;
}

console.log(revArray([1,2,3,4]))


function rotateRight(arr){
   let last=arr[arr.length -1];

   for(let i=arr.length-1; i>0; i--){
    arr[i]=arr[i-1];
   }

   arr[0]=last;

   return arr;
}

console.log(rotateRight([1,2,3,4]));

function rotateleft(arr){
    let first=arr[0];

    for(let i=0; i<arr.length -1; i++){
        arr[i]=arr[i+1];
    }

    arr[arr.length-1]=first;

    return arr;
}

console.log(rotateleft([1,2,3,4]));

// Problem 39
function swapAlternnate(arr){
    let i=0;
    let j=1;

    while(j<arr.length){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;

        i+=2;
        j+=2;
    }

    return arr;
}

console.log(swapAlternnate([1,2,3,4]));

// Problem 40 
function copyArray(arr){
    let ansArr=[];

    for(let i=0; i<arr.length; i++){
        ansArr[i]=arr[i];
    }

    return ansArr;
}

console.log(copyArray([1,2,3]));

// Problem 41
function countVovels(str){
    let vovelCount=0;
    let consonants=0
    for(let i=0; i<str.length; i++){
        if(str.charAt(i)==="a" || str.charAt(i)==="e" || str.charAt(i)==="i" || str.charAt(i)==="o" || str.charAt(i)==="u" ){
            vovelCount++
        }else{
            consonants++;
        }
    }

    return {vovel:vovelCount, consonants:consonants};
}

console.log(countVovels("hiIamprajwal"));

// Problem 42
function countTypes(str){
    let digits=0;
    let chars=0;
    let specials=0;

    for(let ch of str){
        if(ch >='0' && ch <= '9'){
            digits++;
        } else if(
            (ch >= 'a' && ch <='z') ||
            (ch >='A' && ch <='Z')
        ){
            chars++;
        }else{
            specials++;
        }
    }

     return { digits, chars, specials };
}

console.log(countTypes("Hello@123!"));



// Problem 43

function countUpperAndLower(str){
    let upper=0;
    let lower=0;

    for( ch of str){
        if(ch>= 'a' && ch<='z'){
            lower++
        }else if( ch>= 'A' && ch<='Z'){
            upper++
        }
    }

    return {lower, upper}
}

console.log(countUpperAndLower("PrajwalJadhav"));


// Problem 44
function charFrequency(str) {
   let freq={};

   for(let i=0; i<str.length; i++){
    let ch=str.charAt(i);

    if(freq[ch]){
        freq[ch]++;
    }else{
        freq[ch]=1
    }
    
   }

   return freq;
}

console.log(charFrequency("prajwal"));

// problem 55
function countSpaces(str){
    let spaces=0;
    for(ch of str){
        if(ch ===' '){
            spaces++;
        }
    }

    return spaces;
}


console.log(countSpaces("hi i am prajwql"));

// problem 56
function countGivenChar(str,char){
    let count=0;

    for(ch of str){
        if(ch===char){
            count++;
        }
    }

    return count;
}

console.log(countGivenChar("prajwal", 'a'));

// Problem 57
function beforeMAndAfterM(str){
    let beforeM=0;
    let afterM=0;

    for(ch  of str ){
        if(ch >= 'a' && ch<='m'){
            beforeM++;
        }else if( ch > 'm' && ch  <= 'z'){
            afterM++
        }
    }

    return {beforeM, afterM}
}

console.log(beforeMAndAfterM("prawjal"));


// problem 58
function countSubstring(str){
    let freq={}

    for(let ch of str){
        if(freq[ch]){
            freq[ch]++;
        }else{
            freq[ch]=1;
        }
    }

    let result={}
    let total=0
    for(let key in freq){
        let k=freq[key];

        let ans=(k*(k+1))/2;
        total+=ans;
        result[key]=ans;
    }

    return {result, total}
}

console.log(countSubstring("abcab"));


// Problem 49
function wordsStartsWithVovel(str){
    let ans=0;
    let arr=str.split(" ");

    for(word of arr){
        if(word[0]==="a" ||word[0]==="e"||word[0]==="i"||word[0]==="o"||word[0]==="u"){
            ans++;
        }
    }

    return ans;
}

console.log(wordsStartsWithVovel("hi i am imagining image to the our world"));


function wordsEndsWithchar(str,char){
    let ans=0;
    let arr=str.split(" ");

    for(word of arr){
        if(word[word.length-1]===char){
            ans++;
        }
    }

    return ans;
}

console.log(wordsEndsWithchar("hi i am imagining image to the our world", "i"));

// Problem 51
function isAnagram(s1, s2) {
    if (s1.length !== s2.length) return false;

    let freq = new Array(128).fill(0);

    for (let i = 0; i < s1.length; i++) {
        freq[s1.charCodeAt(i)]++;
        freq[s2.charCodeAt(i)]--;
    }

    for (let val of freq) {
        if (val !== 0) return false;
    }

    return true;
} // false


// problem 62
function countVovelsInWords(str){
    let arr=str.split(" ");
    let result={};


    for(word of arr){
        let {vovel}=countVovels(word);

        result[word]=vovel;
    }

    return result;
}

console.log(countVovelsInWords("hi i am prawjal"));

// problem 63
function revWord(str){
    if(str.length %2 !== 0){
        return "String is odd"
    }

    rev=""

    for(let i=str.length-1; i>=0; i--){
        rev+=str.charAt(i);
    }

    return rev;
}

console.log(revWord("prajwala"));

// Problem 64

function replaceVovel(str){


 let ans=""
 for(let i=0; i<str.length; i++){
    let char=str.charAt(i);

    if(char==='a'){
        ans+="1"
    }else if(char ==='e'){
        ans+="2"
    }else if (char === 'i'){
        ans+="3"
    }else if (char ==='o'){
        ans+="4"
    }else if(char ==='u'){
        ans+="5"
    }else{
        ans+=char
    }
 }

 return ans;
}

console.log(replaceVovel("prijwal"));


// Problem 65
function printCharMoreThanOnce(str){
     let freq = new Array(128).fill(0);
     let res={};

     for(let i=0; i<str.length; i++){
        freq[str.charCodeAt(i)]++
     }

     for(let i=0; i<freq.length; i++){
        if(freq[i]>1){
            res[String.fromCharCode(i)]=freq[i];
        }
     }

     console.log(res);

}

printCharMoreThanOnce("prajwall");

// Problem 56
function wordWithSameStartEnd(str){
    let arr=str.split(" ");
    let count=0;
    for(word of arr){
        if(word[0]===word[word.length-1]){
            count++;
        }
    }

    return count;
}

console.log(wordWithSameStartEnd("aba abc aba bcb bc pr"));

// Problem 57
function toggleCase(word) {
    let result = "";

    for (let ch of word) {
        if (ch >= 'a' && ch <= 'z') {
            result += String.fromCharCode(ch.charCodeAt(0) - 32);
        } else if (ch >= 'A' && ch <= 'Z') {
            result += String.fromCharCode(ch.charCodeAt(0) + 32);
        } else {
            result += ch;
        }
    }

    return result;
}

function toggleAlternateWords(str) {
    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        if (i % 2 === 1) { // alternate words
            words[i] = toggleCase(words[i]);
        }
    }

    return words.join(" ");
}

// Test
console.log(toggleAlternateWords("hello world java script"));

// Problem 58

function isRotation(s1, s2) {
    if (s1.length !== s2.length) return false;

    let combined = s1 + s1;
    return combined.includes(s2);
}

// Test
console.log(isRotation("abcd", "cdab")); // true
console.log(isRotation("abcd", "acbd")); // false


// Problem 59
function removeDuplicateWords(str){
    let words=str.split(" ");
    let seen ={};
    let result=[];

    for(let word of words){
        if(!seen[word]){
            result.push(word);
            seen[word]=true
        }
    }

    return result.join(" ");
}

console.log(removeDuplicateWords("this is is a test test string"));