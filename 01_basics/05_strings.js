const name = "Aditya"
const number = 51

// console.log(name + number +" Value");
console.log(`My name is ${name} and my lucky number is ${number}`)
//Above way is called string interpolation, it is modern way and gives benefit to apply functions/methods on the go like ${name.toUpperCase()}


const newGame  = new String('Sumdami');
console.log(newGame)//using this method to declare string give us value of string as object in key-value pair and length property.Also alot of method to use.

// console.log(newGame[0])//first index alphabet
// console.log(newGame.__proto__)//gives type of result i.e object

// console.log(newGame.length)
// console.log(newGame.toUpperCase())
// console.log(newGame.indexOf('m'))//returns the index of first alphabet

const newString  = newGame.substring(0,4)//returns element from 0,3 not 4 because it return one less element
console.log(newString);

const anotherString = newGame.slice(-6,3)
const anotherString1 = newGame.slice(-3,6)//-6 means it will count from back and 3 means count from front and return the elements between -6,3.
console.log(anotherString)
console.log(anotherString1,"new");


const newStringOne = "   chintu   "
console.log(newStringOne);
console.log(newStringOne.trim());//removes extra space

const url = "https://aditya.com/aditya%20kumar"
console.log(url.replace('%20','**'))
console.log(url.includes('%20'));