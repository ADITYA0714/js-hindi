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

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}