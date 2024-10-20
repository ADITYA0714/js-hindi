const name = "Aditya"
const number = 51

// console.log(name + number +" Value");
console.log(`My name is ${name} and my lucky number is ${number}`)


const newGame  = new String('Sumdami');
console.log(newGame)//using this method to declare string give us value of string as object in key-value pair and length property.Also alot of method to use.

// console.log(newGame[0])//first index alphabet
// console.log(newGame.__proto__)//gives type of result i.e object

// console.log(newGame.length)
// console.log(newGame.toUpperCase())
// console.log(newGame.indexOf('m'))//returns the index of first alphabet

const newString  = newGame.substring(0,4)//returns element from 0,3 not 4 because it return one less element
console.log(newString);

const anotherString = newGame.slice(-6,3)//-6 means it will cpount from back and 3 means count from front and return the elements between -6,3.
console.log(anotherString)

const newStringOne = "   chintu   "
console.log(newStringOne);
console.log(newStringOne.trim());//removes extra space

