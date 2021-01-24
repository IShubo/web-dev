// Coding Exercise 29 - Our First Object Exercise
// 1 - name set to string "Gummy Bears"
// 2 - inStock set to boolean "true"
// 3 - price set to number 1.99
// 4 - falvors set to array of at least three strings like "grape", "apple", "cherry"


// Your code goes in here:
const product = { 
    name : "Gummy Bears",
    inStock : true,
    price : 1.99,
    flavors : ["grape", "apple", "cherry"]
}


// Coding Exercise 30 - Object Access Exercise 
// Create a variable "fullAddress" that points to a string using information from a pre-defined object
// Format is: Address, City, State Zipcode

//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
let fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;