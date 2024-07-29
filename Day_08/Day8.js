// Day 8: ES6+ Features

// Tasks/Activities:

// Activity 1: Template Literals

// • Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

pname = "Adil"
page = 24
message = `Hello my name is ${pname} and my age is ${page}`
console.log(message)

console.log("\n *************** Task 1 Ends Here ✅ *************** \n")


// • Task 2: Create a multi-line string using template literals and log it to the console.

multiLineString = `This is the example of multi line string using template laterals
Hello my name is ${pname} and my age is ${page}
Those were the basic details of me
hope you learned something new from this
okay see you soon , Bye !`

console.log(multiLineString)


console.log("\n *************** Task 2 Ends Here ✅ *************** \n")


// Activity 2: Destructuring

// • Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let numArray = [10, 20, 30, 40, 50]

let [firstElement , secondElement] = numArray

console.log(`First Element : ${firstElement} \n Second Element : ${secondElement}`)


console.log("\n *************** Task 3 Ends Here ✅ *************** \n")


// • Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

let book = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 1997
}

let { title , author } = book

console.log(`Title : ${title} \n Author : ${author}`)


console.log("\n *************** Task 4 Ends Here ✅ *************** \n")


// Activity 3: Spread and Rest Operators

// • Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let originalArray = [1, 2, 3]
let newArray = [...originalArray, 4, 5, 6]
console.log(newArray)


console.log("\n *************** Task 5 Ends Here ✅ *************** \n")


// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum (...numbers) {
    return numbers.reduce((total, num) => total + num, 0)
}

console.log(sum(1, 2, 3, 4, 5))

console.log("\n *************** Task 6 Ends Here ✅ *************** \n")


// Activity 4: Default Parameters

// • Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function prod (num1, num2 = 1){
    return num1 * num2
}

console.log(prod(5, 10))
console.log(prod(5))

console.log("\n *************** Task 7 Ends Here ✅ *************** \n")


// Activity 5: Enhanced Object Literals

// • Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

name = "Adil"
age = 24

let person = {
    name,
    age,
    isMarried: false,
    greet: function (){
        return `Hello my name is ${name} and my age is ${this.age}`
    }
}

console.log(person)
console.log(person.greet())
console.log("\n *************** Task 8 Ends Here ✅ *************** \n")


// • Task 9: Create an object with computed property names based on variables and log the object to the console.

let firstProperty = "firstname"
let secondProperty = "lastname"
let thirdProperty = "sayHello"

person = {
    [firstProperty] : "Adil",
    [secondProperty] : "Patel",
    [thirdProperty] () {
        console.log(`Hello my first name is ${this.firstname} and last name is ${this.lastname}`)
    }
}

console.log(person)

person.sayHello()

console.log("\n *************** Task 9 Ends Here ✅ *************** \n")