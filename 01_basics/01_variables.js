const accountId = 13247;
let emailId = "aditya@gmail.com";
var accountPassword  = "62324";
accountCity = "Ghaziabad";

//accountId = 253465  //not allowed
emailId = "aditya@google.com"
accountPassword="356e6";
accountCity = "Patna"

/* Prefer not to use var 
as it does not have control over the scope*/

console.log(accountId)
console.table([accountId,emailId,accountPassword,accountCity]);