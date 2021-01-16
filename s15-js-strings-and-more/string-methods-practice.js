// Without altering the original value stored in message, please define a variable called "whisper"
// It will be a lowercased version of message, with all the extra space at the beginning and end removed.
// You will need to use two string methods that we just covered. 
// Don't forget you can chain them together on a single line!

// DON'T TOUCH THIS LINE!
const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!

// YOUR CODE BELOW THIS LINE:
let whisper = message.toLowerCase().trim();


// More String Methods Practice 
// variable "word" set to "skateboard" goal is to use string methods in order to end up with the string "beard"
// 1. Use a string method to extract the "board" (using the slice method)
// 2. Replace the "o" in board with an "e" (using the replace method)
// 3. Save the result in a variable called "facialHair"

// DON'T TOUCH THIS LINE! (please)
const word = "skateboard"; //Don't change this line!

// YOUR CODE BELOW THIS LINE:
let facialHair = word.slice(5).replace("o","e");