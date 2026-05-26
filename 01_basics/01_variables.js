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