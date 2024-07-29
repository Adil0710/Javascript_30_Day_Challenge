// Day 7: Objects

// Tasks/Activities:

// Activity 1: Object Creation and Access

// • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

const book = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 1997
}
console.log(book)

console.log("\n *************** Task 1 Ends Here ✅ *************** \n")

// • Task 2: Access and log the title and author properties of the book object.

title = book.title
author = book.author
console.log("Title :" , title)
console.log("Author :", author)

console.log("\n *************** Task 2 Ends Here ✅ *************** \n")


// Activity 2: Object Methods

// • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

const book1 = {
    title: "The Lord of The Rings",
    author: "J.R.R. Tolkien",
    year: 2016,
    bookInfo : function (){
        return `${book1.title} by ${book1.author}`
    }
}
console.log(book1.bookInfo())

console.log("\n *************** Task 3 Ends Here ✅ *************** \n")
// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

const books = {
    title: "The Lord of The Rings",
    author: "J.R.R. Tolkien",
    year: 2016,
    updateYear : function (newYear){
        books.year = newYear
    }
}
books.updateYear(2024)
console.log(books)

console.log("\n *************** Task 4 Ends Here ✅ *************** \n")


// Activity 3: Nested Objects

// • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
        name: "tech_library",
        books: [
            {
                title: "Java",
                author: "sun microsystem",
                year: 1992
            },
            {
                title: "Python",
                author: "demo",
                year: 1998
            },
            {
                title: "Javascript",
                author: "jS",
                year: 1994
            },
            {
                title: "C sharp",
                author: "microsoft",
                year: 1992
            },
        ]
}

console.log(library)

console.log("\n *************** Task 5 Ends Here ✅ *************** \n")


// • Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log(library.name)

library.books.forEach(book => console.log(book.title))

console.log("\n *************** Task 6 Ends Here ✅ *************** \n")


// Activity 4: The this Keyword

// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

const myBook = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 1997,
    bookDetails: function () {
        return `Title: ${this.title} \n Author: ${this.author}`
    }
}
console.log(myBook.bookDetails())

console.log("\n *************** Task 7 Ends Here ✅ *************** \n")


// Activity 5: Object Iteration

// • Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.

const demoBook = {
    title: "Java",
    author: "sun microsystem",
    year: 1992
}

for ( let property in demoBook){
    console.log(`${property}: ${demoBook[property]}`)
}


console.log("\n *************** Task 8 Ends Here ✅ *************** \n")


// • Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

keys = Object.keys(demoBook)
values = Object.values(demoBook)

console.log("Keys :", keys , '\n', "Values :" , values )

console.log("\n *************** Task 9 Ends Here ✅ *************** \n")