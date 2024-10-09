// Primitive
// 7 types
// number,string,boolean,null,undefined,symbol,bigInt
const isSymbol = Symbol('123')
const anotherSymbol = Symbol('123')//this is symbol is assigned and both isSymbol and anotherSymbol are unique.

const biggInt = 562467352n;// adding n at last make it bigInt its not neccesary though.


// Reference(Non Primitive)
// Array,Object,Functions

const myArray = ["Aditya","Vipasha","Mundeer"];
const myObj = {
    name:"ashad",
    age:34,
}
const myFunction = function(){
    console.log("Namaste India");
}

//Points to remember(typeof)
// null => Object
// undefiend => undefined
// number => number
// string => string
// symbol => symbol
