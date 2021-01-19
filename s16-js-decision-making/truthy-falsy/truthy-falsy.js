// This example is just to show that all values have an inherent truthy or falsy value to them
// The values which are falsy are: 
        // false
        // 0
        // "" (empty string)
        // null
        // undefined
        // NaN
// All other values are truthy


const userInput = prompt("Enter something:");

if (userInput) {
    console.log("Truth-y");
}
else {
    console.log("False-y");
}

