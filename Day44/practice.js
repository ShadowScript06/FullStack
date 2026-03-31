// Problem 1
function checkChar(char) {
  if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
    return "Letter";
  } else if (char >= "0" && char <= "9") {
    return "Digit";
  } else {
    return "Special Character";
  }
}

// console.log(checkChar("A"));
// console.log(checkChar('5'));
// console.log(checkChar('k'));
// console.log(checkChar('%'));

// Problem 2
function fizzBuzz(digit) {
  if (digit % 3 === 0 && digit % 5 === 0) {
    return "FIZZBUZZ";
  } else if (digit % 3 === 0) {
    return "FIZZ";
  } else if (digit % 5 === 0) {
    return "BUZZ";
  }
}

// console.log(fizzBuzz(15));
// console.log(fizzBuzz(25));
// console.log(fizzBuzz(9));

// Problem 3
function median(num1, num2, num3) {
  if ((num1 >= num2 && num1 <= num3) || (num1 >= num3 && num1 <= num2)) {
    return num1;
  } else if ((num2 >= num1 && num2 <= num3) || (num2 >= num3 && num2 <= num1)) {
    return num2;
  } else if ((num3 >= num1 && num3 <= num2) || (num3 >= num2 && num3 <= num1)) {
    return num3;
  }
}

// console.log(median(2,3,5));

// console.log(median(7,4,9));

function median(a, b, c) {
  return a + b + c - Math.max(a, b, c) - Math.min(a, b, c);
}

// Problem 4
function checkTime(hr, min) {
  if (hr >= 0 && hr < 12) {
    return "AM";
  } else if (hr >= 12 && hr <= 23) {
    return "PM";
  } else {
    return "Invalid time";
  }
}

// console.log(checkTime(15));

// Problem 5
function isTaxable(age, income) {
  if (age > 18 && income > 500000) {
    return "Taxable";
  } else {
    return "Non Taxable";
  }
}

// console.log(isTaxable(17,30000000));
// console.log(isTaxable(19, 600000));

// console.log(isTaxable(43,59900))

// Problem 6
function positiveAndSum(a, b) {
  if (a > 0 && b > 0 && a + b < 100) {
    return true;
  } else {
    return false;
  }
}

// console.log(positiveAndSum(6,9));

// console.log(positiveAndSum(6,99));

// console.log(positiveAndSum(-6,99));

// Problem 7

function printDigit(digit) {
  switch (digit) {
    case 1:
      console.log("ONE");
      break;
    case 2:
      console.log("TWO");
      break;
    case 3:
      console.log("THREE");
      break;
    case 4:
      console.log("FOUR");
      break;
    case 5:
      console.log("FIVE");
      break;
    case 6:
      console.log("SIX");
      break;
    case 7:
      console.log("SEVEN");
      break;
    case 8:
      console.log("EIGHT");
      break;
    case 9:
      console.log("NINE");
      break;
  }
}

// printDigit(8);

// Problem 8
function checkDay(day) {
  if (day >= 1 && day <= 5) {
    return "Weekday";
  } else if (day === 6 || day === 7) {
    return "Weekend";
  } else {
    return "Inavlid day";
  }
}

// console.log(checkDay(5));
// console.log(checkDay(7));
// console.log(checkDay(9));

// Problem 9
function calculateBill(units) {
  if (units >= 0 && units <= 100) {
    return units * 5;
  } else if (units > 100 && units <= 250) {
    return units * 7;
  } else if (units > 250 && units <= 500) {
    return units * 10;
  } else {
    return units * 12;
  }
}

// console.log(calculateBill(345));
// console.log(calculateBill(56));
// console.log(calculateBill(10000));

// Problem 10
function checkPassword(password) {
  if (password.length < 8) {
    return "Pasword to short";
  }
  let containDigit = false;

  for (let i = 0; i < password.length; i++) {
    if (password.charAt(i) >= "0" && password.charAt(i) <= "9") {
      return "Valid Password";
    }
  }

  return "Password must contain atleast 1 digit";
}

// console.log(checkPassword("Prajwaldfb"));

// console.log(checkPassword("Prajwb"));
// console.log(checkPassword("Prajwaldfb8"));

// Problem 11
// console.log("*");

// Problem 12
// console.log("* * * *")

// Problem 13
function printNStars(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += "* ";
  }
  console.log(str);
}

// printNStars(7);

// problem 14
function printSquareStars(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= n; j++) {
      str += "* ";
    }

    console.log(str);
  }
}

// printSquareStars(7);

// Problem 15
function increasingTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "* ";
    }
    console.log(str);
  }
}

// increasingTriangle(5);

// Problem 16

function reverseTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    let spaces = n - i;
    for (let j = 1; j <= spaces; j++) {
      str += "  ";
    }

    for (let j = spaces + 1; j <= n; j++) {
      str += "* ";
    }

    console.log(str);
  }
}

// reverseTriangle(5);

// Problem 17
function evenTriangle(n) {
  for (let i = 1; i <= n * 2; i++) {
    let str = "";
    if (i % 2 == 0) {
      for (let j = 1; j <= i; j++) {
        str += "* ";
      }
    }
    console.log(str);
  }
}

// evenTriangle(5);

// Problem 18

function oddTriangle(n) {
  for (let i = 1; i <= n * 2; i++) {
    let str = "";
    if (i % 2 !== 0) {
      for (let j = 1; j <= i; j++) {
        str += "* ";
      }
    }
    console.log(str);
  }
}

// oddTriangle(5);

// Problem 19
function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";

    // first spaces
    for (let j = 1; j <= n - i; j++) {
      str += "  ";
    }

    // stars
    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "* ";
    }

    // second spaces
    for (let j = 1; j <= n - i; j++) {
      str += "  ";
    }

    console.log(str);
  }
}

// pyramid(5);

// Problem 20
function problem20(n) {
  for (let i = 1; i <= 5; i++) {
    let str = "";

    for (let j = 1; j <= n - i; j++) {
      str += "b";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j % 2 !== 0) {
        str += "*";
      } else {
        str += "b";
      }
    }

    console.log(str);
  }
}

// problem20(5);

// Problem 21
function Problem21(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= i; j++) {
      str += `${j} `;
    }

    console.log(str);
  }
}

// Problem21(5);

// Problem 22

function Problem22(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += `${i} `;
    }
    console.log(str);
  }
}

// Problem22(5);

// Problem 23
function Problem23(n) {
  let count = 1;
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= i; j++) {
      str += count;
      str += " ";
      count++;
    }

    console.log(str);
  }
}

// Problem23(5);

function Problem24(n) {
  let count = 1;
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= i; j++) {
      str += count;
      str += " ";
      count++;
      if (count === 10) count = 0;
    }

    console.log(str);
  }
}

// Problem24(7);

function Problem25(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= i; j++) {
      const value = (i + j) % 2;

      str += `${value} `;
    }

    console.log(str);
  }
}

// Problem25(6);

function Problem26(n) {
  let ch = "A";

  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += `${ch} `;
      ch = String.fromCharCode(ch.charCodeAt(0) + 1);
    }
    console.log(str);
  }
}

// Problem26(5)

function Problem27(n) {
  let ch = "A";

  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += `${ch} `;
    }
    console.log(str);
    ch = String.fromCharCode(ch.charCodeAt(0) + 1);
  }
}

// Problem27(5)

function Problem28(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    let ch = "A";
    for (let j = 1; j <= i; j++) {
      str += `${ch} `;
      ch = String.fromCharCode(ch.charCodeAt(0) + 1);
    }
    console.log(str);
  }
}
// Problem28(5);

function Problem29(n) {
  let ch = "A";
  for (let i = 0; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= n - i; j++) {
      str += "  ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      str += `${ch} `;
      ch = String.fromCharCode(ch.charCodeAt(0) + 1);
    }

    for (let j = 1; j <= n - i; j++) {
      str += "  ";
    }

    console.log(str);
  }
}

// Problem29(5);

function Problem30(n) {
  for (let i = 1; i <= n; i++) {
    let num = 1;
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += `${num++} `;
    }
    console.log(str);
  }
}

// Problem30(5);

function Problem31(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= n - i; j++) {
      str += "  ";
    }

    for (let j = 1; j < i; j++) {
      str += `${j} `;
    }

    for (let j = i; j >= 1; j--) {
      str += `${j} `;
    }

    for (let j = 1; j <= n - i; j++) {
      str += "  ";
    }

    console.log(str);
  }
}

// Problem31(5);

function Problem32(n) {
  for (let i = 0; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "* ";
    }
    console.log(str);
  }
  for (let i = n - 1; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "* ";
    }
    console.log(str);
  }
}

// Problem32(5);

function Problem33(n) {
  for (let i = 0; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "* ";
    }
    console.log(str);
  }
  for (let i = n; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "* ";
    }
    console.log(str);
  }
}

// Problem33(5);

function Problem34(n) {
  for (let i = 0; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= n - i; j++) {
      str += "  ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "* ";
    }

    for (let j = 1; j <= n - i; j++) {
      str += "  ";
    }

    console.log(str);
  }

  for (let i = n - 1; i >= 1; i--) {
    let str = "";

    for (let j = 1; j <= n - i; j++) {
      str += "  ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "* ";
    }

    for (let j = 1; j <= n - i; j++) {
      str += "  ";
    }

    console.log(str);
  }
}

// Problem34(5);

function Problem35(n) {
  for (let i = 1; i <= 5; i++) {
    let num = n;
    let str = "";
    for (let j = 1; j <= n - i; j++) {
      str += "  ";
    }

    for (let j = 1; j <= i; j++) {
      str += `${num--} `;
    }

    num = num + 2;

    for (let j = 1; j < i; j++) {
      str += `${num++} `;
    }

    for (let j = 1; j <= n - i; j++) {
      str += "  ";
    }

    console.log(str);
  }
}

// Problem 36
function reverseStr(str) {
  let ans = "";

  function helper(index, str) {
    if (index < 0) return;

    ans += str.charAt(index);

    helper(index - 1, str);
  }

  helper(str.length - 1, str);

  return ans;
}

// console.log(reverseStr("Prajwql"));

// Problem 37

function checkPalindrome(str) {
  let ans = true;

  function helper(str, i, j) {
    if (i >= j) return;

    if (str.charAt(i) !== str.charAt(j)) {
      ans = false;
      return;
    }

    helper(str, i + 1, j - 1);
  }

  helper(str, 0, str.length - 1);

  return ans;
}

// console.log(checkPalindrome("abaaa"));

// Problem 38
function countVowels(str) {
  let ans = 0;

  function helper(str, index) {
    if (index >= str.length) return;

    if (
      str.charAt(index) === "a" ||
      str.charAt(index) === "e" ||
      str.charAt(index) === "i" ||
      str.charAt(index) === "o" ||
      str.charAt(index) === "u"
    ) {
      ans++;
    }

    helper(str, index + 1);
  }

  helper(str, 0);

  return ans;
}

// console.log(countVowels("Prajwal"));

// Problem 39
function replaceChar(str, index, a, b) {
  let ans = "";
  function helper(str, index, a, b) {
    if (index >= str.length) return;

    if (str.charAt(index) === a) {
      ans += b;
    } else {
      ans += str.charAt(index);
    }

    helper(str, index + 1, a, b);
  }
  helper(str, index, a, b);

  return ans;
}

// console.log(replaceChar("prajwal", 0, "a", "b"));

// Problem 40
function printChar(str, index) {
  if (index >= str.length) return;

  console.log(str.charAt(index));

  printChar(str, index + 1);
}

// printChar("Prajwal",0);

// Problem 41

function toUpperCaseStr(str) {
  let ans = "";

  function helper(str, index) {
    if (index >= str.length) return;

    ans += str.charAt(index).toUpperCase();

    helper(str, index + 1);
  }

  helper(str, 0);

  return ans;
}

// console.log(toUpperCaseStr("rpawja"));

// problem 43

function printCharRev(str, index) {
  if (index < 0) return;

  console.log(str.charAt(index));

  printCharRev(str, index - 1);
}

// printCharRev("Pra2wjl",6 )

// Problem 44
function countVAndC(str) {
  let vovels = countVowels(str);

  let consonents = str.length - vovels;

  return { vovels, consonents };
}

console.log(countVAndC("prawjal"));

// Problem 45

// Probelm 46
function compareArrayStrict(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

// console.log(compareArrayStrict([1,2,3],[1,2,3,]));

// problem 47
function compareArray(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let freq = {};

  for (let i = 0; i <= arr1.length; i++) {
    if (freq[arr1[i]]) {
      freq[arr1[i]]++;
    }
    freq[arr1[i]] = 1;
  }

  for (let i = 0; i <= arr1.length; i++) {
    if (!freq[arr2[i]]) {
      return false;
    } else if (freq[arr2[i]]) {
      freq[arr2[i]]--;
    }
  }

  for (key in freq) {
    if (freq[key] !== 0) {
      return false;
    }
  }

  return true;
}

// console.log(compareArray([1,2,3],[1,32,4]));

// problem 48
function mergeArray(arr1, arr2) {
  let ans = [];

  for (let i = 0; i < arr1.length; i++) {
    ans.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    ans.push(arr2[i]);
  }

  return ans;
}

// console.log(mergeArray([1,2,3],[3,2,1]));

// problem 49
function findDuplicate(arr1, arr2) {
  let ans = [];
  let used = new Array(arr2.length);
  for (let i = 0; i < used.length; i++) {
    used[i] = false;
  }

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && used[j] === false) {
        ans.push(arr1[i]);
        used[j] = true;
        break;
      }
    }
  }

  return ans;
}

// console.log(findDuplicate([1, 2, 3, 4], [3, 4, 5, 6]));
// console.log(findDuplicate([2, 2, 3], [2])); // [2]

/// problem 50
function findNonDuplicates(arr1, arr2) {
  let duplicates = findDuplicate(arr1, arr2);

  let ans = [];

  function inDuplicate(n) {
    for (let i = 0; i < duplicates.length; i++) {
      if (duplicates[i] === n) return true;
    }

    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!inDuplicate(arr1[i])) {
      ans.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!inDuplicate(arr2[i])) {
      ans.push(arr2[i]);
    }
  }

  return ans;
}

// console.log(findNonDuplicates([1,2,3],[3,4,5]));

// Problem 51
function elementSum(arr1, arr2) {
  let ans = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (i < arr1.length && j < arr2.length) {
      ans.push(arr1[i] + arr2[j]);
      i++;
      j++;
    } else if (i < arr1.length) {
      ans.push(arr1[i]);
      i++;
    } else if (j < arr2.length) {
      ans.push(arr2[j]);
      j++;
    }
  }

  return ans;
}

// console.log(elementSum([1,2,3],[1,2,3,4]));

// Problem 522
function elementProduct(arr1, arr2) {
  let ans = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (i < arr1.length && j < arr2.length) {
      ans.push(arr1[i] * arr2[j]);
      i++;
      j++;
    } else if (i < arr1.length) {
      ans.push(arr1[i]);
      i++;
    } else if (j < arr2.length) {
      ans.push(arr2[j]);
      j++;
    }
  }

  return ans;
}

// console.log(elementProduct([1,2,3],[1,2]));

function frequency(arr) {
  let max = -1100000;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
    }
  }

  let freq = [];
  for (let i = 0; i <= max + 1; i++) {
    freq[i] = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    freq[arr[i]]++;
  }

  let ans = {};
  for (let i = 0; i < freq.length; i++) {
    if (freq[i] > 0) {
      ans[i] = freq[i];
    }
  }

  return ans;
}

// console.log(frequency([1,2,3,3,2,1,1,1,4]))

// Problem 54
function printMoreThanonce(arr) {
  let freq = frequency(arr);

  let ans = [];

  for (key in freq) {
    if (freq[key] > 1) {
      ans.push(Number(key));
    }
  }

  return ans;
}
//  console.log(printMoreThanonce([1,2,3,3,2,1,1,1,4]))

function removevovels(str) {
  let ans = "";

  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i) === "a" ||
      str.charAt(i) === "e" ||
      str.charAt(i) === "i" ||
      str.charAt(i) === "o" ||
      str.charAt(i) === "u"
    ) {
    } else {
      ans += str.charAt(i);
    }
  }

  return ans;
}

// console.log(removevovels("Prajwal"));

// Problem 56
function removeSpaces(str) {
  let ans = "";

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === " ") {
    } else {
      ans += str.charAt(i);
    }
  }

  return ans;
}

// console.log(removeSpaces("Hi i am Prajwl"))

//Problem 57
function replaceVovels(str) {
  let ans = "";

  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i) === "a" ||
      str.charAt(i) === "e" ||
      str.charAt(i) === "i" ||
      str.charAt(i) === "o" ||
      str.charAt(i) === "u"
    ) {
      ans += "*";
    } else {
      ans += str.charAt(i);
    }
  }

  return ans;
}

// Problem 58
function replaceSpaces(str) {
  let ans = "";

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === " ") {
      ans += "_";
    } else {
      ans += str.charAt(i);
    }
  }

  return ans;
}

// console.log(replaceVovels("Prawwal"));
// console.log(replaceSpaces("Hi i am Prajwal"));

// Problem 59

function removeDigit(str) {
  let ans = "";

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) >= "1" && str.charAt(i) <= "9") {
      ans += "";
    } else {
      ans += str.charAt(i);
    }
  }

  return ans;
}

// console.log(removeDigit("prajwal8praj3pra7"));

//Problem 60
function removeDuplicate(str) {
  let ans = "";
  freq = {};
  for (let i = 0; i < str.length; i++) {
    if (freq[str.charAt(i)]) {
      freq[str.charAt(i)]++;
    } else {
      freq[str.charAt(i)] = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (freq[str.charAt(i)] > 1) {
      ans += "";
    } else {
      ans += str.charAt(i);
    }
  }

  return ans;
}

// console.log(removeDuplicate("prawjal"));

// Problem 61
function printFirstOccurance(str) {
  let ans = "";
 
  for(let i=0; i<str.length; i++){
    let alreadySeen=false;
   for(let j=i-1; j>=0; j--){
        if(str[i]===str[j]){
            alreadySeen=true;
            break
        }
   }

   if(!alreadySeen){
    ans+=str[i];
   }
  }

  return ans;
}

// console.log(printFirstOccurance("Prajwal"));

// Problem 62
function removeDuplicate(str){
    let i=0;
    let ans="";

    while(i<str.length){
        let j=i+1;
        while(j<str.length && str[i]===str[j]){
            j++;
        }

        ans+=str[i];
        i=j;
    }

    return ans
}

// console.log(removeDuplicate("aaabbb"));

function swapCase(str){
    let ans="";
    for(let i=0; i<str.length; i++ ){
        if(str.charAt(i)>='a' && str.charAt(i)<='z'){
            ans+=str.charAt(i).toUpperCase();
        }else if(str.charAt(i)>='A' && str.charAt(i)<='Z'){
            ans+=str.charAt(i).toLowerCase();
        }
    }

    return ans;
}

// console.log(swapCase("PrajalwaA"));

// Problem 64
function shiftChar(str){
    let ans="";
    for(let i=0; i<str.length; i++){
        ans+=String.fromCharCode(str.charCodeAt(i)+1);
    }

    return ans;
}

// console.log(shiftChar("abc"));


// Problem 65
function printTableGrid(n){
    for(let i=1; i<=n; i++){
        let str="";

        for(let j=1; j<=10; j++){
            str+=`${i*j}  `
        }

        console.log(str);
    }

}

// printTableGrid(10);

// Problem 66
function countAges(arr){
    let adults=0;
    let minors=0;
    let seniors=0;

    for(age of arr){
        if(age>=1 && age< 18){
            minors++;
        }else if(age>=18 && age<65){
            adults++;
        }else{
            seniors++;
        }
    }

    return {
        minors,
        adults
        ,
        seniors
    }
}

// console.log(countAges([1,23,13,15,67,56,12,4]));

// Problem 67

function validatePass(password){
    if(password.length <8) return "Password is too short";
    let upper=false;
    let lower=false;
    let digit=false;
    let special=false;

    for(let i=0; i<password.length; i++){
        if(password[i]>='a' && password[i]<='z'){
            lower=true;
        }else if(password[i]>='A' && password[i]<='Z'){
            upper=true;
        }else if(password[i]>='1' && password[i]<='9'){
            digit=true;
        }else{
            special=true
        }
    }

    if(!upper){
        return "Atleast one Char should  be in Uppercase"
    }else if(!lower){
        return "Atleast one Char should  be in Lowercase"
    }else if(!digit){
        return "Atleast one Char should  be Number"
    }else if(!special){
        return "Atleast one Char should  be in Special Character"
    }

    return "Valid Password"
}

// console.log(validatePass("Prajwal1"));
// console.log(validatePass("Prajwal@1"));
// console.log(validatePass("Prajwa"));
// console.log(validatePass("prajwal@1"));
// console.log(validatePass("Prajwal@@@"));

// problem 68
function calculate(a,b,operator){
    switch(operator){
        case("+"): return a+b;
        case("-"): return a-b;
        case("*"): return a*b;
        case("/"): return a/b;
        case("%"): return a%b;
    }
}

// console.log(calculate(3,5,"+"));
// console.log(calculate(3,5,"-"));
// console.log(calculate(3,5,"*"));
// console.log(calculate(3,5,"/"));
// console.log(calculate(3,5,"%"));

// Problem 69
function calculateToss(n){
    let head=0;
    let tails=0;

    for(let i=0; i<=n; i++){
        if(Math.random()>0.5){
            head++;
        }else{
            tails++
        }
    }

    return {head,tails}
}

// console.log(calculateToss(100));

// Problem 70
function countFreq(n){
    let freq={};

    while(n>0){
        let digit=n%10;

        if(freq[digit]){
            freq[digit]++;
        }else{
            freq[digit]=1;
        }

        n=Math.floor(n/10);
    }

    return freq;

}

console.log(countFreq(11231));

// Problem 71
function findCommaninStr(str1, str2) {
  let ans = [];
  function checkInAns(ch){
    for(let i=0; i<ans.length; i++){
        if(ans[i]===ch){
            return true
        }
    }
    return false;
  }


  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {

      if (str1[i] === str2[j] && !checkInAns(str1[i])) {
        ans.push(str1[i]);
        break;
      }
    }
  }

  return ans;
}
// console.log(findCommaninStr("PRajwal", "prajwal"));

function isPrime(n){
    if(n<2 ){
        return false;
    }
    if(n===2){
        return true;
    }

    for(let i=2; i<n; i++){
        if(n%i===0){
            return false;
        }
    }

    return true;
}

function countPrime(arr){
    let count=0;

    for(num of arr){
        if(isPrime(num)){
            count ++;
        }
    }

    return count;
}


// console.log(countPrime([1,2,3,4,5,6,7,8,9]))



function checkPalindrome(str){
    let i=0;
    let j=str.length-1;

    while(i<j){
        if(str[i]!==str[j]){
            return false;
        }
        i++;
        j--;
    }

    return true;
}
function printPalindromicWords(str){
    let arr=str.split(" ");

    for(let word of arr){
        if(checkPalindrome(word)){
            console.log(word);
        }
    }
}
printPalindromicWords("hi aba is bab");