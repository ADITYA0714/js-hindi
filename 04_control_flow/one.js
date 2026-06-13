//if
const isUserloggedIn = true;
const temp = 41;

if(temp < 50){
    console.log("less than 50");
}else{
    console.log("temperature is not less than 50") 
}
// <, >, <=, >=, ==, !=, ===

const balance = 1000;
if(balance > 500) console.log("test"), console.log("test2");

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}


// const arr = [];
// console.log(arr.__proto__);
// Step 1: What is __proto__?
// __proto__ is a property that points to the prototype object of the constructor that created the instance.

// In this case, arr is created by the Array constructor.

// So arr.__proto__ points to Array.prototype


// Define protype

// In JavaScript, prototype is simply an object that other objects can use as a “fallback” when looking up properties or methods. It’s the foundation of how inheritance works in JavaScript.

// 🔹 Formal Definition
// Prototype: An object associated with every function and class in JavaScript.

// When you create an object using a constructor function or a class, that object’s internal [[Prototype]] (accessible via __proto__) points to the constructor’s .prototype object.

// This .prototype object holds shared methods and properties that all instances can access.

// 🔹 Example
// js
// function Animal(name) {
//   this.name = name;
// }

// // Add method to Animal's prototype
// Animal.prototype.run = function() {
//   console.log(this.name + " runs");
// };

// const dog = new Animal("Buddy");

// // dog doesn’t have run directly, but:
// dog.run(); // "Buddy runs"
// Here’s what happens:

// JS looks for run inside dog. Not found.

// It checks dog.__proto__ → which points to Animal.prototype.

// Finds run there and executes it.