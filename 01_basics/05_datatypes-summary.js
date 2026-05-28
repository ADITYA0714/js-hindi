// Primitive - datatypes are call by value mean when we copy them we do not get reference of the data rather we get copy of the data
// 7 types
// number,string,boolean,null,undefined,symbol,bigInt
const isSymbol = Symbol('123')
const anotherSymbol = Symbol('123')//this is symbol is assigned and both isSymbol and anotherSymbol are unique.
//To check the above statement lets compare:
console.log(isSymbol == anotherSymbol);

const biggInt = 562467352n;// adding n at last make it bigInt its not neccesary though.


// Reference(Non Primitive)
// Array,Object,Functions

const myArray = ["Aditya","Vimarsh","Mundeer"];
for(const c of myArray){
    console.log(c);
}
myArray.forEach(c => console.log(c));


const myObj = {
    name:"ashad",
    age:34,
}
console.log(myObj.name);


const myFunction = function(){
    console.log("Namaste India");
}
myFunction();

//Points to remember(typeof)
// null => Object
// undefiend => undefined
// number => number
// string => string
// symbol => symbol
//bigInt => undefined
//function => function-object(but when we console.log it gives function)
//object =>object
//array => object

console.log(typeof myObj);
console.log(typeof myArray);

//++++++++++++++++++++++++ Memory Allocation ++++++++++++++++++++
// stack(Primitive) i.e pass by value and heap(Non-Primitive) i.e pass by reference 
let username = "aditya0714"
let usernameref = username
usernameref = "swati0924"
console.log(username);
console.log(usernameref);

let userOne = {
    emailId : "aditya@microsoft.com",
    password : 34523,
}
let userTwo = userOne
userTwo.emailId = "aditya@google.com"
console.log(userOne.emailId);
console.log(userTwo.emailId);