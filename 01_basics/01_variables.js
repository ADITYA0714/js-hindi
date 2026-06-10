const accountId = 13247;
let emailId = "aditya@gmail.com";
var accountPassword  = "62324";
accountCity = "Ghaziabad";

//accountId = 253465  //not allowed because const cannot be changed
emailId = "aditya@google.com"
accountPassword="356e6";
accountCity = "Patna"

/* Prefer not to use var 
as it does not have control over the scope*/
// If we declare something in js and do not assign a value it is undefined then.
let state;

console.log(accountId)
console.table([accountId,emailId,accountPassword,accountCity,state]);

// const user = {
//   name: "Aditya"
// };

// user.name = "Kumar";

// // console.log(user.name);

// // var a = 10;

// if(true){
//     // var a = 20;
// }

// // console.log(a);

// let a = 10;

// if(true){
//     a = 20;
// }

// console.log(a);

// if(true){
//    let x = 10;
// }

// console.log(x);

// const user = {
//   name: "Aditya"
// };

// user.name = "Kumar";
//  console.log(user.name)
 //The variable user stores a reference (address) to the object in heap memory.
 //You're not changing the reference.
// You're changing a property inside the object.

 //but if we try to chnage the reference of this it will throw error

 const user = {
  name: "Aditya"
};
user = {
  name: "Kumar"
};// will throw error