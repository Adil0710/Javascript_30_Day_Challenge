// Day 5: Functions

// Task / Activities:

// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or add and log the result to the console.

function oddEven () {
    var n = 4;
    if (n % 2 === 0){
        console.log(n, "is even number");
    } else {
        console.log(n, "is odd number");
    }
}
oddEven();


// Task 2: Write a function to calculate the square of a number and return the result.

function square() {
    var n = 5;
    return n * n
}
console.log(square());


// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

let maxTwoNum = function () {
    var a = 30;
    var b = 20;

    if ( a > b){
        console.log(a, "is greater")
    } else {
        console.log(b, "is greater")
    }
}
maxTwoNum()


// Task 4: Write a function expression to concatenate two strings and return the result.

let concateString = function () {
    fname = "Adil";
    lname = "Patel";
    result = fname.concat(lname)
    return result;
}
console.log(concateString())


// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

let sumTwoNum = () => {
    var num1 = 10;
    var num2 = 20;
    result = num1 + num2;
    return result;
}
console.log(sumTwoNum())


// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

let checkString = () => {
 let string = "Adil";
 let char = "i";
    for (c of string){
        if (c === char){
            return true;
        }
    }
    return false;
}
console.log(checkString())


let checkString1 = () => {
   let str = "Adil";
   let char = "x";
    return str.includes(char);
}
console.log(checkString1())


// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function prod (num1, num2 = 5) {
    return num1 * num2
}
console.log(prod(5))
console.log(prod(5, 10))


// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

let greet = (Name, age = 20) => {
    return `Hello ${Name} your age is ${age}`;
}
console.log(greet("Adil", 24))
console.log(greet("Suraj"))


// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.