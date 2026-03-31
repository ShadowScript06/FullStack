// Problem 1
function checkPosition(x, y) {
  if (x === 0 && y === 0) return "At origin.";

  if (x === 0) return "On Y axis";

  if (y === 0) return "On X axis";

  return "On plane";
}

// console.log(checkPosition(0,3));

// Problem 2
function triplet(a, b, c) {
  if (
    a * a === b * b + c * c ||
    b * b === a * a + c * c ||
    c * c == a * a + b * b
  ) {
    return true;
  }
  return false;
}

// console.log(triplet(2,3,5));
// console.log(triplet(3,4,5));

// Problem 3
function validDate(date, month) {
  if (month <= 0 && month > 12) {
    return "Not valid.";
  }

  if (month === 2) {
    if (date >= 1 && date <= 28) return "Valid";
  }
  if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    if (date >= 1 && date <= 31) return "valid";
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    if (date >= 1 && date <= 30) return "valid";
  }

  return "Not Valid";
}

// console.log(validDate(4,5));

// Problem 4
function printAngle(hr, min) {
  let angle = 30 * hr + 0.5 * min - 6 * min;

  let shorter = Math.min(angle, 360 - angle);

  return shorter;
}

// console.log(printAngle(3,15));

// problem 5
function checkArithmeticprogression(a, b, c) {
  return 2 * b === a + c;
}

// console.log(checkArithmeticprogression(3,7,12));

// Problem 6
function checkGP(a, b, c) {
  return b * b === a * c;
}

// console.log(checkGP(2,6,12))

// problem 7
function checkSum(num) {
  if (num < 100 || num > 999) {
    return "invalid number";
  }

  let arr = [];

  while (num !== 0) {
    let digit = num % 10;
    arr.push(digit);
    num = Math.floor(num / 10);
  }

  return arr[0] + arr[2] === arr[1];
}

// console.log(checkSum(132));
// console.log(checkSum(123));

// problem 8

function compareSumProduct(num) {
  if (num < 1 || num > 99999) {
    return "invalid number";
  }

  let arr = [];

  while (num !== 0) {
    let digit = num % 10;
    arr.push(digit);
    num = Math.floor(num / 10);
  }

  let sum = 0;
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    product *= arr[i];
  }

  return sum === product;
}

// console.log(compareSumProduct(124));
// console.log(compareSumProduct(22));

// Problem 9
function firstDate(day1, mon1, day2, mon2) {
  if (mon1 === mon2) {
    if (day1 > day2) {
      return `date ${day2}/${mon2} will come first`;
    } else {
      return `date ${day1}/${mon1} will come first`;
    }
  }

  if (mon1 > mon2) {
    return `date ${day2}/${mon2} will come first`;
  } else {
    return `date ${day1}/${mon1} will come first`;
  }
}

// console.log(firstDate(6,1,30,1));
// console.log(firstDate(2,8,30,1));

// problem 10
function printCentury(year) {
  return Math.floor(year / 100) + 1;
}

// console.log(printCentury(2024));

// Problem 11
function digitSum(num) {
  let sum = 0;
  while (num !== 0) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }

  return sum;
}

function printEvenSum(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (digitSum(i) % 2 === 0) {
      arr.push(i);
    }
  }

  return arr;
}

// console.log(printEvenSum(100));

// problem 12
function divBy7NotBy5(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 7 === 0 && i % 5 !== 0) {
      count++;
    }
  }

  return count;
}

// console.log(divBy7NotBy5(500));
function checkPalindrome(num) {
  let arr = [];
  while (num !== 0) {
    let digit = num % 10;
    arr.push(digit);

    num = Math.floor(num / 10);
  }

  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    if (arr[i] !== arr[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

function printPalindromes(n) {
  let ans = [];
  for (let i = 1; i <= n; i++) {
    if (checkPalindrome(i)) {
      ans.push(i);
    }
  }

  return ans;
}

// console.log(printPalindromes(100));

// problem 14
function sumDivBy3(n) {
  let ans = [];
  for (let i = 0; i <= n; i++) {
    if (digitSum(i) % 3 === 0) {
      ans.push(i);
    }
  }

  return ans;
}

// console.log(sumDivBy3(100));

function smallestAndLargest(num) {
  let arr = [];
  while (num !== 0) {
    let digit = num % 10;
    arr.push(digit);
    num = Math.floor(num / 10);
  }

  let min = 11;
  let max = -11;

  for (let i = 0; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
  }

  return { min, max };
}

// console.log(smallestAndLargest(123));

// Problem 16
function hasEvenOnes(num) {
  let count = 0;

  while (num > 0) {
    if (num & 1) count++;
    num = num >> 1;
  }

  return count % 2 === 0;
}

function printEvenParity(n) {
  for (let i = 1; i <= n; i++) {
    if (hasEvenOnes(i)) {
      console.log(i);
    }
  }
}

// printEvenParity(10);

// Problem 17
function pattern17(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i * i);
  }
}
// pattern17(5);

// Problem 18
function factorial(n) {
  let arr = [];

  arr.push(1);

  for (let i = 1; i <= n; i++) {
    arr.push(arr[i - 1] * i);
  }

  return arr;
}

// console.log(factorial(5));

// Problem 19
function OddEven(num) {
  let oddSum = 0;
  let evenSum = 0;

  while (num !== 0) {
    let digit = num % 10;

    if (digit % 2 === 0) {
      evenSum += digit;
    } else {
      oddSum += digit;
    }

    num = Math.floor(num / 10);
  }

  return { oddSum, evenSum };
}

// console.log(OddEven(123));

// Problem 20
function nonZeroSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) continue;

    sum += arr[i];
  }

  return sum;
}

// console.log(nonZeroSum([1,2,0,5,6]));

// Problem 21
function checkAsending(arr) {
  for (let i = 0; i + 1 < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }

  return true;
}

function checkDesending(arr) {
  for (let i = arr.length - 1; i - 1 >= 0; i--) {
    if (arr[i] < arr[i - 1]) return false;
  }

  return true;
}

// console.log(checkAsending([1,2,3]))
// console.log(checkDesending([3,2,1]))

// console.log(checkAsending([1,2,3,5,3]))
// console.log(checkDesending([3,2,1,0,1]))

// Problem 23 24
function secondLargestSmallest(arr) {
  let smallest = 1000000;
  let secondSmallest = 10000000;

  let largest = -100000000;
  let secondLargest = -1000000;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] > smallest && arr[i] < secondSmallest) {
      secondSmallest = arr[i];
    }
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return { smallest, largest, secondLargest, secondSmallest };
}

// console.log(secondLargestSmallest([8,2,3,4,5,6,7]))

// probllemm 25
function diffrence(arr) {
  let { smallest, largest } = secondLargestSmallest(arr);

  return largest - smallest;
}

// console.log(diffrence([8,2,3,4,5,6,7]));

function sumExceptLargestSmallest(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let { smallest, largest } = secondLargestSmallest(arr);

  return sum - (smallest + largest);
}

// console.log(sumExceptLargestSmallest([8,2,3,4,5,6,7]));

// Problem 27
function pairsum(arr, k) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        count++;
      }
    }
  }

  return count;
}

// console.log(pairsum([1,2,4,1,2,4,1],6));

// problem 28
function greateThanAvg(arr) {
  let ans = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let avg = Math.floor(sum / arr.length);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > avg) {
      ans.push(arr[i]);
    }
  }

  return ans;
}

// console.log(greateThanAvg([1,2,3,4,18,2,1,6,1]))

// Problem 29 anmd 30
function printUnique(arr) {
  let freq = {};

  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      freq[arr[i]]++;
    } else {
      freq[arr[i]] = 1;
    }
  }

  for (key in freq) {
    if (freq[key] === 1) {
      ans.push(parseInt(key));
    }
  }

  return freq;
  return ans;
}

// console.log(printUnique([1,2,3,1,2,3,1,3,4]))

// Problem 41
function printEachWord(str) {
  let arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// printEachWord("Hi i am Prawjal")

// Problem 42
function wordsWithEvenLength(str) {
  let arr = str.split(" ");
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 === 0) count++;
  }

  return count;
}

// console.log(wordsWithEvenLength("hi i am Prawjal"))

// Problem 43 44
function shortestandlongestword(str) {
  let arr = str.split(" ");
  let shortest = 10000000;
  let longest = 0;
  let short = "";
  let long = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < shortest) {
      short = arr[i];
      shortest = arr[i].length;
    }
    if (arr[i].length > longest) {
      long = arr[i];
      longest = arr[i].length;
    }
  }

  return { short, long };
}

// console.log(shortestandlongestword("hi i am Prajwal"))

// Problem 45
function swapFirstAndLast(str) {
  let arr = str.split(" ");

  let temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;

  return arr.join(" ");
}

// console.log(swapFirstAndLast("Hi i am OPrawjal"))

// Problem 46
function wordsStartAndEndWithSameLetter(str) {
  let arr = str.split(" ");
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charAt(0) === arr[i].charAt(arr[i].length - 1)) {
      ans.push(arr[i]);
    }
  }

  return ans;
}

// console.log(wordsStartAndEndWithSameLetter("ihi am Prakwal hlh"))

function containsChar(str, a) {
  let arr = str.split(" ");
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(a)) {
      ans.push(arr[i]);
    }
  }

  return ans;
}

// console.log(containsChar("Hi i am Prawjal a", "a"))

function capitaliseFirstLetter(str) {
  let arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];

    word = word[0].toUpperCase() + word.substring(1);

    arr[i] = word;
  }

  return arr.join(" ");
}

// console.log(capitaliseFirstLetter("hi i am prajwal"))

function normaliseSpacing(str) {
  let arr = str.split(/\s+/);

  return arr.join(" ");
}

// console.log(normaliseSpacing("hi   i   am prajwkl    "))

// Problem 51
function noOfPassStudent(arr) {
  let count = 0;

  for (let marks of arr) {
    if (marks >= 40) {
      count++;
    }
  }

  return count;
}

// console.log(noOfPassStudent([20,50,45,90,34]));

// Problem 52
function pairSum(arr, k) {
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        ans.push([arr[i], arr[j]]);
      }
    }
  }

  return ans;
}

// console.log(pairSum([1,2,3,4,5,1,2],5))

// Problem 53
function countConsecutive(arr) {
  let result = [];

  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    } else {
      result.push([arr[i - 1], count]);
      count = 1;
    }
  }

  // push last group
  if (arr.length > 0) {
    result.push([arr[arr.length - 1], count]);
  }

  return result;
}

// console.log(countConsecutive([1,1,2,2,2,3,1,1]));

function findPairs(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        result.push([i, j]);
      }
    }
  }

  return result;
}
// console.log(findPairs("aabb"));

// Probklem 55

function pattern55() {
  let str = "";
  let char = "A";

  for (let i = 0; i < 26; i++) {
    str += String.fromCharCode(char.charCodeAt(0) + i);
    console.log(str);
  }
}

// pattern55()

// Problem 56
function fibonacci(n) {
  function helper(n) {
    if (n === 0 || n === 1) {
      return n;
    }

    
    return helper(n - 1) + helper(n - 2);
  }

 return  helper(n);
}

function printFibSeries(n){
    let ans=[]
    for(let i=0; i<=n; i++){
        ans.push(fibonacci(i))
    }
    
    return ans;
}

// console.log(printFibSeries(10));

function printSpiral(n){
    let number = 1;

    for(let i = 1; i <= n; i++){
        let str = "";

        if(i % 2 === 1){ // left → right
            for(let j = 0; j < n; j++){
                str += number + " ";
                number++;
            }
        } else { // right → left
            let temp = number + n - 1;

            for(let j = 0; j < n; j++){
                str += temp + " ";
                temp--;
            }

            number += n;
            console.log(str);
            continue;
        }

        console.log(str);
    }
}

// printSpiral(5)

//  Problem 58 
function pascalTraingle(n){
      let triangle = [];

    for(let i = 0; i < n; i++){
        let row = new Array(i + 1).fill(1);

        for(let j = 1; j < i; j++){
            row[j] = triangle[i-1][j-1] + triangle[i-1][j];
        }

        triangle.push(row);
    }

    return triangle;
}

console.log(pascalTraingle(5));