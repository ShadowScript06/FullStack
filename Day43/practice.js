// Problem 1

function processNum(num) {
  let arr = [];
  while (num > 0) {
    let digit = num % 10;

    arr.push(digit);

    num = Math.floor(num / 10);
  }

  return arr;
}

function distinctNumbers(num) {
  if (num < 99 && num > 999) {
    return "Invalid  Input";
  }
  let arr = processNum(num);

  if (arr[0] === arr[1] || arr[1] === arr[2] || arr[0] === arr[2]) {
    return "Numbers are same";
  }

  return "Numbers are distinct";
}

// console.log(distinctNumbers(123));
// console.log(distinctNumbers(121));

// Problem 2
function middleDigit(num) {
  if (num < 99 && num > 999) {
    return "Invalid  Input";
  }
  let arr = processNum(num);

  if (arr[1] > arr[0] && arr[1] > arr[2]) {
    return "largest";
  } else if (arr[1] < arr[0] && arr[1] < arr[2]) {
    return "smallest";
  } else {
    return "Neither";
  }
}

// console.log(middleDigit(123));
// console.log(middleDigit(423));
// console.log(middleDigit(152));

// Problem 3
function firstAndlastsSame(num) {
  if (num < 999 || num > 9999) {
    return "Invalid Input";
  }

  let arr = processNum(num);

  if (arr[0] === arr[3]) {
    return "Equal";
  }

  return "Not Equal";
}

// console.log(firstAndlastsSame(1001));
// console.log(firstAndlastsSame(3555));

// Problem 4
function checkSize(num) {
  let arr = processNum(num);

  return arr.length;
}

// console.log(checkSize(123));
// console.log(checkSize(12345645342));
// console.log(checkSize(2));

// problem 5

function checkMutiple(num, n) {
  let digit = num % 10;

  if (digit === n && num % n === 0) {
    return `Number ${num} ends with ${n} and divisble by ${n}`;
  } else if (digit === n) {
    return `Number ${num} ends with ${n}`;
  } else if (num % n === 0) {
    return `Number ${num} divisble by ${n}`;
  } else {
    return `Number ${num} not divisble nor ends with ${n}`;
  }
}

// console.log(checkMutiple(77,7));
// console.log(checkMutiple(89,3));
// console.log(checkMutiple(56,2));
// console.log(checkMutiple(13,3));

// Problem 6
function checkQuadrant(x, y) {
  if (x > 0 && y > 0) {
    return "Quadrant 2";
  } else if (x < 0 && y > 0) {
    return "Quadrant 1";
  } else if (x < 0 && y < 0) {
    return "Quadrant 3";
  } else {
    return "Quadrant 4";
  }
}

// console.log(checkQuadrant(-1,3));
// console.log(checkQuadrant(8,3));
// console.log(checkQuadrant(-1,-3));
// console.log(checkQuadrant(6,-3));

// Problem 7
function divideEvenly(num) {
  if (num < 2600) {
    return "No sufficient cash";
  }
  if (num % 2600 === 0) {
    return "Can divide equally";
  } else {
    return "Cannot divide equally";
  }
}

// console.log(divideEvenly(5200));
// console.log(divideEvenly(4800));

// problem 8
function checkInRange(num1, num2, x) {
  let larger = Math.max(num1, num2);
  let smaller = Math.min(num1, num2);

  if (x >= smaller && x <= larger) {
    return "In range";
  }

  return "Not in range";
}

// console.log(checkInRange(100,500,5));
// console.log(checkInRange(100,500,250));

// problem  9
function calculateThirdangle(a, b) {
  if (a + b >= 180) {
    return "Not valid";
  }

  return 180 - (a + b);
}

// console.log(calculateThirdangle(20,50));

// Problem 10
function perfectSquare(num) {
  let i = 1;

  while (num > 0) {
    num -= i;
    i += 2;
  }

  return num === 0;
}

// console.log(perfectSquare(4));
// console.log(perfectSquare(3));

// Problem 11
function sumOfSquare(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    let sqaure = i * i;

    sum += sqaure;
  }

  return sum;
}

// console.log(sumOfSquare(3));

// problem 12
function getCubes(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    let cube = i ** 3;
    arr.push(cube);
  }

  return arr;
}

// console.log(getCubes(9));

// problem 13
function printNumberDivisbleByx(a, b, x) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    if (i % x === 0) {
      arr.push(i);
    }
  }

  return arr;
}

// console.log(printNumberDivisbleByx(10,50,7));

// Problem 14
function gcd(num1, num2) {
  let ans = 0;
  let smaller = Math.min(num1, num2);
  for (let i = 1; i <= smaller; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      ans = i;
    }
  }

  return ans;
}

// console.log(gcd(10,20));

// Problem 15
function lcm(a, b) {
  let max = Math.max(a, b);

  while (true) {
    if (max % a == 0 && max % b == 0) {
      return max;
    }
    max++;
  }
}

// console.log(lcm(4, 2));

// Problem 16
function printFactors(num) {
  let ans = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      ans.push(i);
    }
  }
  return ans;
}

// problem 17
function sum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// console.log(sum(printFactors(8)));

// Problem 18
function strongNumber(num) {
  let sum1 = sum(printFactors(num));
  if (sum1 === num) {
    return "Strong Number";
  } else {
    return "Not Strong Number";
  }
}

// Problem 19
function arithmeticProgression(a, d, n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    let aP = a + i * d;
    arr.push(aP);
  }

  return arr;
}

// console.log(arithmeticProgression(2,3,5));

// problem 20
function geometricProgression(a, r, n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(a * r ** i);
  }
  return arr;
}
// console.log(geometricProgression(2,3,5));

// problem 21
function printNStars(n) {
  let str = "";

  function helper(index, n) {
    if (index > n) {
      return;
    }
    str += "* ";

    helper(index + 1, n);
  }

  helper(1, n);

  console.log(str);
}

// printNStars(6);

// problem 22

// function printNxNStars(n){
//     for(let i=1; i<=n; i++){
//         printNStars(n);
//     }
// }

// full recursive
function printNxNstars(n) {
  function helper(rowsLeft) {
    if (rowsLeft === 0) {
      return;
    }

    printNStars(n);

    helper(rowsLeft - 1);
  }

  helper(n);
}
// printNxNstars(6);

// problem 23
function printRow(n) {
  let str = "";

  function helper(index, n) {
    if (index > n) {
      return;
    }

    str += "* ";

    helper(index + 1, n);
  }

  helper(1, n);

  console.log(str);
}

function printtraingle(n) {
  function helper(index, n) {
    if (index > n) {
      return;
    }

    printRow(index);

    helper(index + 1, n);
  }

  helper(1, n);
}

// printtraingle(5);

// Problem 24
function printInvertedTriangle(n) {
  function helper(n) {
    if (n === 0) {
      return;
    }
    printRow(n);

    helper(n - 1);
  }

  helper(n);
}

// printInvertedTriangle(5);

// Problem 25

function printNumberRow(n) {
  let str = "";

  function helper(index, n) {
    if (index > n) {
      return;
    }

    str += index;
    str += " ";

    helper(index + 1, n);
  }

  helper(1, n);

  console.log(str);
}

function printNumbertraingle(n) {
  function helper(index, n) {
    if (index > n) {
      return;
    }

    printNumberRow(index);

    helper(index + 1, n);
  }

  helper(1, n);
}

// printNumbertraingle(5);

// problem 26
function printReverseRow(totalRows, rowNumber) {
  let spaces = totalRows - rowNumber;

  let str = "";

  function printSpaces(index, spaces) {
    if (index > spaces) {
      return;
    }

    str += "  ";

    printSpaces(index + 1, spaces);
  }

  printSpaces(1, spaces);

  function printStars(index, stars) {
    if (index > stars) {
      return;
    }

    str += "* ";

    printStars(index + 1, stars);
  }

  printStars(1, rowNumber);

  console.log(str);
}

function printReverseTriangle(n) {
  let totalRows = n;

  function helper(index, totalRows) {
    if (index > totalRows) {
      return;
    }
    printReverseRow(totalRows, index);

    helper(index + 1, totalRows);
  }

  helper(1, totalRows);
}

// printReverseTriangle(5);

// Problem 27
function printTable(n) {
  function helper(index, n) {
    if (index > 10) {
      return;
    }

    console.log(`${n} X ${index} =${n * index}`);

    helper(index + 1, n);
  }

  helper(1, n);
}

// printTable(8);

// problem 28

function printNumber(n) {
  if (n === 0) return;

  console.log(n);

  printNumber(n - 1);

  console.log(n);
}

// problem 29
function printSeriesSum(n) {
  let str = "";
  let sum = 0;
  function helper(index, n) {
    if (index > n) return;

    if (index === 1) {
      str += `${index}`;
    } else {
      str += `+ ${index}`;
    }

    sum += index;
    let temp = `= ${sum}`;

    console.log(str + temp);

    helper(index + 1, n);
  }

  helper(1, n);
}

// printSeriesSum(10);

function printAlphabet() {
  let arr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let str = "";

  function helper(index) {
    if (index >= arr.length) {
      return;
    }

    str += arr[index];

    console.log(str);

    helper(index + 1);
  }

  helper(0);
}

// printAlphabet();

// problem 31
function checkElementInArray(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return "Present";
    }
  }

  return "Not Present";
}

// console.log(checkElementInArray([1,2,3,4],6));

// Problem 32

function countNumber(arr, n) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      count++;
    }
  }

  return count;
}

// console.log(countNumber([1,2,3,3,4,4,56,66,12,3],3));

function firstOccurance(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) return i;
  }
  return -1;
}

function lastOccurance(arr, n) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === n) return i;
  }
  return -1;
}

// console.log(firstOccurance([1,2,3,4,1,12,3,4],1));

// console.log(lastOccurance([1,2,3,4,1,12,3,4],1));

// Problem 35
function checkUnique(arr) {
  let freq = {};

  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      return "Duplicate Present";
    } else {
      freq[arr[i]] = 1;
    }
  }

  return "Unique";
}

// console.log(checkUnique([1,2,3,4]));
// console.log(checkUnique([1,2,1,4]));

function oddEvenSum(arr) {
  let oddSum = 0;
  let evensum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evensum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }

  return { oddSum, evensum };
}

// console.log(oddEvenSum([1,2,3,4,5]));

// problem 38

function isPrime(n) {
  if (n === 2) return true;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;

    return true;
  }
}
function countPrime(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) count++;
  }
  return count;
}

// console.log(countPrime([1,2,3,4,5,6]));

// Problem 39

function divisibleBy3and5(n) {
  if (n % 3 === 0 && n % 5 == 0) {
    return true;
  }
  return false;
}

function count3and5(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (divisibleBy3and5(arr[i])) count++;
  }
  return count;
}

// console.log(count3and5([1,2,3,4,5,6,7,8,9,9,15,30]));

// Problem 40
function countPerfectSquare(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (perfectSquare(arr[i])) count++;
  }

  return count;
}

// console.log(countPerfectSquare([1,2,3,4,5,6,7,8,9]));

// Problem 41
function reverseString(str) {
  rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str.charAt(i);
  }

  return rev;
}

// console.log(reverseString("Prajwal"));

// Problem 42
function revEachWord(str) {
  let arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = reverseString(arr[i]);
  }

  return arr.join(" ");
}

// console.log(revEachWord("prajwal is a good person"));

// Problme 43

function revArray(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }

  return arr;
}
function revOrder(str) {
  let arr = str.split(" ");

  let revArr = revArray(arr);

  return revArr.join(" ");
}

// console.log(revOrder("My name is Prajwal"));

// Problem 44

function checkPalindrome(str) {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str.charAt(i) !== str.charAt(j)) {
      return "Not a palindrome";
    }
    i++;
    j--;
  }

  return "Palindrome";
}

// console.log(checkPalindrome("aba"));

// P{roblem 45}

function checkTwostring(str1, str2) {
  let rev = reverseString(str1);

  if (str2 === rev) return "Strings are reverse";

  return "Strings are not reverse";
}

// console.log(checkTwostring("aba","aba"));

// console.log(checkTwostring("prajwla", "prabab"));

// Problem 46
function printMiddle(str) {
  let middle = Math.floor(str.length / 2);

  return str.charAt(middle);
}

// console.log(printMiddle("Prajwal"));

// Problem 47

function secondhalf(str) {
  let middle = Math.floor(str.length / 2);

  let ans = "";
  for (let i = middle; i < str.length; i++) {
    ans += str[i];
  }

  return ans;
}

// console.log(secondhalf("Prajwal"));

// Problem 48
function removeFirstandlast(str) {
  let ans = "";
  for (let i = 1; i < str.length - 1; i++) {
    ans += str[i];
  }
  return ans;
}

// console.log(removeFirstandlast("Prajwal"));

//Problem 49
function reverseChar(str) {
  function reverseOnlyChars(str) {
    let arr = str.split("");
    let left = 0,
      right = arr.length - 1;

    while (left < right) {
      if (!isNaN(arr[left])) {
        left++;
      } else if (!isNaN(arr[right])) {
        right--;
      } else {
        // swap
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      }
    }

    return arr.join("");
  }

  console.log(reverseOnlyChars("a1b2c3")); // c1b2a3
}

// Problem 50
function skipSpaceRev(str) {
  let arr = str.split(" ");

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] === " ") {
      left++;
    } else if (arr[right] === " ") {
      right--;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join(" ");
}
// console.log(skipSpaceRev("a b c d")); // d c b a

// Problem 51

function printUnique(arr) {
    let ans=[];
  let freq = {};
  for(let i=0; i<arr.length; i++){
    if(freq[arr[i]]){
        freq[arr[i]]++
    }else{
        freq[arr[i]]=1;
    }
  }

  for(let key in freq){
    if(freq[key]===1){
        ans.push(Number(key));
    }
  }
  return ans;
 
}
// console.log( printUnique([1,2,3,4,1,2]));


/// problem 52
function shiftZero(arr){
    let left=0;
    let right=arr.length-1;

    while(left <right){
        if(arr[left]!==0){
            left++;
        }else if(arr[right]===0){
            right--;
        }else{
            [arr[left],arr[right]]=[arr[right],arr[left]];
            left ++;
            right--;
        }
    }

    return arr;
}

// console.log(shiftZero([0,1,0,3,4,2,0,5]));

function shiftZeroOrder(arr) {
    let insertPos = 0;

    // move non-zero elements forward
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[insertPos] = arr[i];
            insertPos++;
        }
    }

    // fill remaining with 0
    while (insertPos < arr.length) {
        arr[insertPos] = 0;
        insertPos++;
    }

    return arr;
}

// console.log(shiftZeroOrder([1,0,2,0,3])); // [1,2,3,0,0]


// Problme 53
function counteven(arr){
    let count=0;
    for(let i=2; i<arr.length; i=i+2){
        if(arr[i]%2==0){
            count++
        }
    }
    return count;
}

// Problem 54
function mergeArrays(arr1, arr2){
    let ans=[];
    for(let i=0; i<arr1.length; i++){
        ans.push(arr1[i]);
    }
    for(let i=0; i<arr2.length; i++){
        ans.push(arr2[i]);
    }

    return ans;
}

// Problem 55
function secondlargest(arr){
    let largest=-1000000;
    let second=-1000000;

    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            second=largest;
            largest=arr[i];
        }
    }

    return second;
}

// console.log(secondlargest([12,3,4,45,5,5,,65]));

// Problem 56
function rotateRight(arr){
    let last=arr[arr.length-1];

    for(let i=arr.length-1; i>=1; i--){
        arr[i]=arr[i-1];
    }

    arr[0]=last;

    return arr;
}

// console.log(rotateRight([1,2,3,4]));

// Problem 57
function sumOfOddIndices(arr){
    let sum=0;
    for(let i=1; i<arr.length; i=i+2){
        sum+=arr[i];
    }
    return sum;
}

// console.log(sumOfOddIndices([1,2,3,4,5]));