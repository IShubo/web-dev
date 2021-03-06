// Coding Exercise 35 - Heart Function Exercise
// Define a function called "printHeart" that prints out "<3" and run once

// Write your function here:
function printHeart() {
    console.log("<3");
}
printHeart();


// Coding Exercise 36 - Rant Exercise
// Define a function "rant" which accepts a string argument "message" that will print out the string 3 times in all uppercase.

// DEFINE YOUR FUNCTION:
function rant(message) {
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}


// Coding Exercise 37 - Multiple Args Exercise
// Define a function "isSnakeEyes" which accepts 2 numbers as inputs, representing two dice.
// If both of the numbers are 1, print "Snake Eyes!" otherwise print, "Not Snake Eyes!"

// define isSnakeEyes below:
function isSnakeEyes(num1, num2) {
    if ((num1 === 1) && (num2 === 1)) {
        console.log("Snake Eyes!");
    }
    else {
        console.log("Not Snake Eyes!");
    }
}


// Coding Exercise 38 - Return Value Practice
// Define a function "multiply" which accepts 2 numerical arguments and returns the product.
// Make sure to return the value instead of printing it!

// DEFINE YOUR FUNCTION BELOW:
function multiply(x, y){
    return x*y;
}


// Coding Exercise 39 - isShortsWeather Function
// Define function "isShortsWeather" which accepts argument "temperature".
// If the temperature is greater than or equal to 75, return true.
// Otherwise, return false. (Temperature assumes it is in Fahrenheit)

// DEFINE YOUR FUNCTION BELOW:
function isShortsWeather(temperature){
    if (temperature >= 75){
        return true;
    }
    return false;
}


// Coding Exercise 40 - Last Element Exercise
// Write a function "lastElement" which accepts a single array argument.
// The function should return the last element of the array, without removing the element.
// If the array is empty, return null.

// DEFINE YOUR FUNCTION BELOW:
function lastElement(array){
    if (array.length > 0){
        return array[array.length-1];
    }
    return null;
}


// Coding Exercise 41 - Capitalize Exercise
// Define a function "capitlize" that accepts a string argument and returns a new string with the first letter capitalized 
// (but the rest of the string is unchanged)
// Hints:
// Remember that strings are immutable, meaning that you cannot simply change the first letter in the original string.
// You will need to make a new string that you return.
// Single out the first letter and capitlize it first (use a string method to help!)
// Add that first letter to the rest of the original string, sliced to omit the original first letter (use a string method to help!)
// For example: 'eggplant' becomes 'E' + 'ggplant'

// DEFINE YOUR FUNCTION BELOW:
function capitalize(str){
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}


// Coding Exercise 42 - Sum Array Exercise
// Write a function "sumArray" which accepts a single argument, and array of numbers. 
// It should return the sum of all the numbers in the array. 
// Hints:
// You'll need a variable to keep track of the total. It should start at zero.
// Loop over the array and for each element, add it to the total variable. 
// After you have added every number to total, return total.

// DEFINE YOUR FUNCTION BELOW:
function sumArray(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}


// Coding Exercise 43 - Days Of The Week Exercise
// Write a function "returnDay" which takes in one parameter (a number from 1-7) and returns the day of the week.
// If the number is less than 1 or greater than 7, the function should return null. 
// In some countries Sunday is treated as the first day of the week, but for this exercise we will use Monday as the first day.
// Hints:
// Store the days of the week in an array, or use an object with numerical keys. When the function is called, plug the number 
// into the array/object you've created to retrieve the corresponding day name and then return the value.

// DEFINE YOUR FUNCTION BELOW:
function returnDay(num){
    const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    if (num < 1 || num > 7){
        return null;
    }
    return days[num-1];     // This way is very simple and works exactly as intended, 
                            // much better than using an if, else if chain or switch statement chain
} 


