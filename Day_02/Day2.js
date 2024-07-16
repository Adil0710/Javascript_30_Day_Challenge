// Day 2: Operators

// Tasks/Activities


//Acivity 1: Arithmetic Operations

// Task 1: Write a program to add two numbers and log the result to the console. 

var a = 10;
var b = 20
console.log(a + b);


// Task 2: Write a program to subtract two numbers and log the result to the console. 

var a = 20;
var b = 10;
console.log(a - b);


// Task 3: Write a program to multiply two numbers and log the result to the console. 

var a = 10;
var b = 5;
console.log(a * b);


// Task 4: Write a program to divide two numbers and log the result to the console. 

var a = 20;
var b = 5;
console.log(a / b);


// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console. 

var a = 3;
var b = 10;
console.log(a % b);


// Acivity 1: Assignment Operators

// Task 6: Use the `+=` operator to add a number to a variable and log the result to the console.

var a = 10;
a += 1;
console.log(a)


// Task 6: Use the `-=` operator to subtract a number to a variable and log the result to the console.

var a = 10;
a -= 1;
console.log(a)


// Activity 3: Comaparison Operator

// Task 8: Write a program to compare two numbers using `>` and `<` and log the result to the console.

var a = 10;
var b = 20;
console.log(a > b);
console.log(a < b);


// Task 9: Write a program to compare two numbers using `>=` and `<=` and log the result to the console.

var a = 10;
var b = 10;
var c = 15;
console.log(a >= b);
console.log(a <= b);
console.log(a <= c);
console.log(a >= c);


// Task 10: Write a program to compare two numbers using `==` and `==` and log the result to the console.

var a = 10;
var b = 10;
var c = "10";
console.log(a == b);       // only check the value of the variable.
console.log(a == c);        
console.log(a === c);     // Checks strictly value and the datatype of the variable is comapred.


// Activity 4: Logical Operators

// Task 11: Write a program that uses `&&` operator to combine two conditions and log the result to the console.

var a = 10;
var b = 15;
var c = 5;
var result = a > b && a > c                     // AND operator check two conditions if any of the one condition from that both is false it returns false , both condition must be true.
console.log("The result is ", result);


// Task 12: Write a program that uses `||` operator to combine two conditions and log the result to the console.

var a = 10;
var b = 15;
var c = 5;
var result = a > b || a > c                     // OR operator check two conditions if any of the one condition from that both is true it returns true.
console.log("The result is ", result);


// Task 13: Write a program that uses `!` operator to negate a condition and log the result to the console.

var a = 10;
var b = 20;
var c = 10;
var result = !(a == b);             // It negates the condition if the condition is false it negates it to true.
var result1 = !(a == c);            // It negates the condition if the condition is true it negates it to false.
console.log(result)
console.log(result1)


// Task 14: Write a program that uses the ternary operator `?` to check if a number is positive or negative and log the result to the console.

var a = 10;
var b = -5;
var result = a > 0 ? "Positive" : "Negative";      // Ternary operator checks the condition if it is true it returns the first statement which is before the semicolon
var result1 = b > 0 ? "Positive" : "Negative";     // Ternary operator checks the condition if it is false it returns the first statement which is after the semicolon
console.log(result)
console.log(result1)