// Day 3: control Structures

// Tasks/Activities


//Acivity 1: If-Else Statements 

// Task 1: Write a program to check if a number is positive , negative or zero and log the result to the console.

var a = 10

if (a == 0){
    console.log("The number is zero");
}else if( a > 0) {
    console.log("The number is positive");
} else {
    console.log("The number is negative")
}

console.log("\n *************** Task 1 Ends Here ✅ *************** \n")

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

var person_age = 20;

if (person_age >= 18) {
    console.log("The person is eligible to vote");
} else {
    console.log("The person is not eligible to vote");
}

console.log("\n *************** Task 2 Ends Here ✅ *************** \n")

// Acivity 2: Nested If-Else Statements 

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

var a = 30;
var b = 20;
var c = 55;

if ( a >= b){
    if ( a >= c){
        console.log("a is greater");
    } else {
        console.log("c is greater");
    }
} else {
    if (b >= c){
        console.log("b is greater");
    } else {
        console.log("c is greater")
    }
}

console.log("\n *************** Task 3 Ends Here ✅ *************** \n")

// Acivity 3: Switch Case 

// Task 4: Write a program to that uses a switch case to determine the day of the week based on a number (1-7) and log the result to the console.

var day = 5;

switch ( day ) {
    case 1: 
        console.log("Sunday")
        break;
    case 2: 
        console.log("Monday")
        break;
    case 3: 
        console.log("Tuesday")
        break;
    case 4: 
        console.log("Wednesday")
        break;
    case 5: 
        console.log("Thursday")
        break;
    case 6: 
        console.log("Friday")
        break;
    case 7: 
        console.log("Saturday")
        break;
    default: 
        console.log("Invalid day number")
        break;
}

console.log("\n *************** Task 4 Ends Here ✅ *************** \n")

// Task 5: Write a program to that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on the score and log the result to the console.

var score = 100;
var grade;

switch (true) {
    case (score >= 90 && score <= 100):
        grade = "A";
        break;
    case (score >= 80 && score <= 100):
        grade = "B";
        break;
    case (score >= 70 && score <= 100):
        grade = "C";
        break;
    case (score >= 60 && score <= 100):
        grade = "D";
        break;
    default:
        grade = "F";
        break;
}

console.log("The grade is", grade)

console.log("\n *************** Task 5 Ends Here ✅ *************** \n")

// Acivity 4: Conditional (Ternary) Operator. 

// Task 6: Write a porgram that uses the ternary operator to check if a number is even or odd and log the result to the console.

var a = 10;
var result = (a % 2 === 0) ? "Even" : "Odd";
console.log("The number is", result)

console.log("\n *************** Task 6 Ends Here ✅ *************** \n")

// Acivity 5: Combining Conditions. 

// Task 7: Write a porgram to check if a year is leap year using multiple condition (divisible by 4, but not 100 unless also divisble by 400) and log the result to the console.

year = 2000;

if ( (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ) {
    console.log("This is leap year")
} else {
    console.log("This is not leap year")
}

console.log("\n *************** Task 7 Ends Here ✅ *************** \n")