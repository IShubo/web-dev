console.log("Before conditional");
if ((1 + 0) + 1 === 2) {
    console.log("Math still works");
}
console.log("After conditional");

// First Conditional Exercise - Coding Exercise 21
// num was already defined and hidden although I tried to recreate it and played around with the code
// function was also pre-defined 

let num = prompt("Enter in an int");
let numInt = parseInt(num, 10);

(function isEven() {
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
   if ((numInt % 2) === 0) {
       console.log("Even");
   }
   else {
       console.log("Not even");
   }
    //AND THIS LINE ↑↑↑↑↑
}());


// Second Conditional Exercise - Coding Exercise 22
// ("phrase" was already defined and hidden, same for the pre-defined function)

// function getColor(phrase){
//     //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
//    if (phrase === "stop") {
//        console.log("red");
//    }
//    else if (phrase === "slow") {
//        console.log("yellow");
//    }
//    else if (phrase == "go") {
//        console.log("green");
//    }
//    else {
//        console.log("purple");
//    }
//     //AND THIS LINE ↑↑↑↑↑
// }


// Nested Conditionals Practice - Coding Exercise 23
// The exercise was just to change value of const such that the inner if statement in the else
// branch would be reached to print out "YOU GOT ME" which would only happen with num value of 102

// // Change the value of num, so that "YOU GOT ME!" prints out
// const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

// // DO NOT TOUCH ANYTHING BELOW (please) 
// if(num <= 100) {
//     if(num >= 50) {
//         console.log("HEY!");
//     }
// } else {
//     if (num < 103) {
//         if(num % 2 === 0){
//             console.log("YOU GOT ME!");
//         }
//     }
// }