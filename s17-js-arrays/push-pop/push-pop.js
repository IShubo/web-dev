// Coding Exercise 27 - Push/Pop/Shift/Unshift Practice
// 1 - Remove the first element "The Moon"
// 2 - Add "Saturn" at the end of the array
// 3 - Add "Mercury" as the first element of the array

const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:
planets.shift();
planets.push("Saturn");
planets.unshift("Mercury");


// Coding Exercise 28 - Nested Arrays Exercise
// Make the "null" value be "Hugo"

// DO NOT TOUCH!!! (please)
const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

// YOUR CODE GOES BELOW THIS LINE:
airplaneSeats[3][1] = "Hugo";
