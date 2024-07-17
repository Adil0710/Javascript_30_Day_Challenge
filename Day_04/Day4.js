// Day 4: Loops

// Tasks / Activities:

// Activity 1 : For Loop

// Task 1 : Write a program to print numbers from 1 to 10 using for loop.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Task 2 : Write a program to print the multiplication table of 5 using for loop.

for (let i = 1; i <= 10; i++){
    console.log("5 *", i  ,"=", 5 * i);
}


// Activity 2 : While Loop

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let i = 1;
let sum = 0;
while (i <= 10){
    sum += i;
    i++;
}
console.log(sum)


// Task 4: Write a program to print numbers from 10 to 1 using a while loop

let a = 10;
while (a >= 1){
    console.log(a);
    a--;
}


// Activity 3: Do...While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.

let b = 5;
let c = 1;
do{
    console.log(c);
    c++;
} while( c <= 5)


// Task 6: Write a program to calculate the factorial of a number using do...while loop.

let num = 5;
let fact = 1;
let mul = 1;

do{
    fact = fact * mul;
    mul++;
} while (mul <= num)

console.log(fact)


// Activity 4: Nested Loops

// Task 7: Write a program to print a pattern using nested for loops.

let x = 5;


for (let z = 1; z <= x; z++){
    let pattern = "";
    for (let y = 1; y <= z; y++){
        pattern += "* "
    }
    console.log(pattern)
}


// Activity 5: Loop Control Statements

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let p = 1; p <= 10; p++){
    if (p === 5) {continue;}
    console.log(p)
}


// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for (q = 1; q <= 10; q++){
    if (q === 7) { break; }
    console.log(q)
}
