// Problem1
//Check if a number is positive, negative, or zero using if-else.
let num=0;

if(num>0){
    console.log("Number is Positive");
}else if(num <0){
    console.log("Number is Negetive");
}else{
    console.log("Number is zero");
}

// Problem 2
//Return the day of the week based on a number input using switch
let day=1;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input");
        break;
    
}

// problem 3
let day1=1

switch(day1){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weeday");
        break;


    case 6:
    case 7:
        console.log("Weekend");
        break;


    default:
        console.log("Invalid");
        break;
}


//Problem 4
//Rewrite a nested if-else ladder with a switch

// if else 
let fruit="apple";

if(fruit ==="apple"){
    console.log("This is an apple.");
}else if(fruit ==="Banana"){
    console.log("This is banana");
}else if(fruit === "orange"){
    console.log("This is orange");
}else{
    console.log("Unknown fruit.")
}

//switch
switch(fruit){
    case "apple":
        console.log("This is an apple");
        break;
    case "banana":
        console.log("This is banana");
        break;
    case "orange":
        console.log("this is an orange");
    default:
        console.log("Unkown fruit.");
        break;
}


// Problem 5
let score=85;

let grade;

if(score>=90 && score <=100){
    grade ="A";
}else if(score >=80 && score <=90){
    grade="B";
}else if (score >=70 && score <=80){
    grade="C"
}else if(score >= 60 && score<=70){
    grade="D";
}else if(score >=0 && score<=59){
    grade="F";
}else{
    grade="F";
}

console.log(`Score : ${score}, Grade: ${grade}`);

//switch

switch(Math.floor(score/10)){
    case 10:
    case 9: 
        grade="A";
        break;
    
    case 8:
        grade="B";
        break;
    
    case 7:
        grade="C";
        break;
    case 6:
        grade="D";
        break;
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        grade="F";
        break;
    default:
        grade="F";
    
}

console.log(`Score : ${score}, Grade: ${grade}`);

//Use if-else for ranges that aren’t evenly distributed or when readability is key.

//Use switch when ranges can be mapped to discrete keys or for cleaner handling of multiple distinct cases.
