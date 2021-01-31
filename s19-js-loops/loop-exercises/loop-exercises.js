// Coding Exercise 31 - Our First For Loop Practice
// Use a for loop to print out the classic lyrics of "I'm Blue" by Eiffel 65
// Should print the lyrics exactly 6 times 

// Print out "Da ba dee da ba daa" 6 times, using a for loop
for (let i = 1; i <= 6; i++) {
    console.log("Da ba dee da ba daa");
}


// Coding Exercise 32 - More For Loops Practice

// Write a loop that prints:
// 25
// 20
// 15
// 10
// 5
// 0

for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
}


// Coding Exercise 33 - Iterating Arrays Exercise
// Print out the the names in the array in all uppercase 

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}


// Coding Exercise 34 - For...Of Practice 
// Print out the squares of the array "numbers"

const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let num of numbers) {
    console.log(num*num);
}
