// Day 6: Arrays

// Tasks/Activities:

// Activity 1: Array Creation and Access

// • Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

let array = [1, 2, 3, 4, 5]
console.log(array)

console.log("\n *************** Task 1 Ends Here ✅ *************** \n")


// • Task 2: Access the first and last elements of the array and log them to the console.

first_element = array[0]
last_element = array[array.length - 1]

console.log(first_element, '\n', last_element)

console.log("\n *************** Task 2 Ends Here ✅ *************** \n")


// Activity 2: Array Methods (Basic)

// • Task 3: Use the push method to add a new number to the end of the array and log the updated array.

pushedArray = array.push(6)
console.log(pushedArray)

console.log("\n *************** Task 3 Ends Here ✅ *************** \n")


// • Task 4: Use the pop method to remove the last element from the array and log the updated array.

poppedArray = array.pop()
console.log(poppedArray)

console.log("\n *************** Task 4 Ends Here ✅ *************** \n")


// • Task 5: Use the shift method to remove the first element from the array and log the updated array.

shiftArray = array.shift()
console.log(shiftArray)

console.log("\n *************** Task 5 Ends Here ✅ *************** \n")


// • Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

unshiftArray = array.unshift(1)
console.log(unshiftArray)

console.log("\n *************** Task 6 Ends Here ✅ *************** \n")


// Activity 3: Array Methods (Intermediate)

// • Task 7: Use the map method to create a new array where each number is doubled and log the new array.

doubleArray = array.map( elem => elem * 2)
console.log(doubleArray)

console.log("\n *************** Task 7 Ends Here ✅ *************** \n")


// • Task 8: Use the filter method to create a new array with only even numbers and log the new array.

evenArray = array.filter( elem => elem % 2 === 0)
console.log(evenArray)

console.log("\n *************** Task 8 Ends Here ✅ *************** \n")


// • Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

initialvalue = 0
sumArray = array.reduce((accumulator, currenValue) => currenValue + accumulator, initialvalue)
console.log(sumArray)

console.log("\n *************** Task 9 Ends Here ✅ *************** \n")


// Activity 4: Array Iteration

// • Task 10: Use a for loop to iterate over the array and log each element to the console.

for ( let i = 0; i < array.length; i++){
    console.log(array[i])
}

console.log("\n *************** Task 10 Ends Here ✅ *************** \n")


// • Task 11: Use the forEach method to iterate over the array and log each element to the console.

array.forEach(elem => console.log(elem))


console.log("\n *************** Task 11 Ends Here ✅ *************** \n")


// Activity 5: Multi-dimensional Arrays

// • Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

let twoDimensionalArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.table(twoDimensionalArray)

console.log("\n *************** Task 12 Ends Here ✅ *************** \n")


// • Task 13: Access and log a specific element from the two-dimensional array.

accessElement = twoDimensionalArray[1][1]
console.log(accessElement)

console.log("\n *************** Task 13 Ends Here ✅ *************** \n")