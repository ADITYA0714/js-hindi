"use strict";//treats all JS as newer version

// alert(3+3)//we are using Nodejs not browser
//js engine is in browser 

// number => 2 to power 53
let age = 18
// bigint 
// string => ""
let name = "Aditya"
// boolean => true/false 
let isAuth = true
// null => standalone value
// undefined => value not assigned yet
// symbol => unique


// object

// console.log(typeof "Aditya")->String 

//Null ka typeof is object which is consider a bug 


// What is Js-Engine and Why it is called Js-Engine is in the browser?
// Ans : - 
// Every modern web browser (like Chrome, Firefox, Edge, Safari) comes with a built-in program called a JavaScript engine.

// This engine’s job is to read, understand, and execute JavaScript code that is part of a web page.

// Why is it called an engine?
// Because it is a runtime program specifically designed to parse (read) JavaScript, compile it into machine code, and run it quickly.

// You don’t have to install anything — it’s already “under the hood” of your browser.

// Variable is mutable but string is immutable in js

let aa = "Aditya";
aa = "b";
console.log(aa); // "b" this is allowed be are creating a new string here

// let aa = "Aditya";
// aa[1] = "b";
// console.log(aa); // "Aditya"// as here we trying to change the string not varibale

const id1 = Symbol("123");
const id2 = Symbol("123");
console.log(id1 == id2);


