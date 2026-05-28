//singleton

// Object.create
//this is only called constructor menthod and it makes singleton objects


//object literals

const mySym = Symbol("symKey")

const JsUser  = {
    name : "Aditya",
    "full name" : "Aditya Kumar", // By default system takes key as string even if we write fullname or "fullname"
    [mySym] : "objKey",
    age : 23,
    location : "Patna",
    fullnamee : "123",
    email : "aditya@palantirtechnologies.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"],
    [mySym] : "symboldatatype",
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);//this is only way to get access of a key declared with string
// console.log(JsUser.fullnamee);
console.log(JsUser[mySym]);//To user datatype as Symbol you must first declare symbol datatype then user it as key with [mySym]
console.log(typeof JsUser[mySym]);


// console.log(typeof JsUser[mySym])
//to declaring symbol datatype as key it needs to be declared in [] this bracket like mySym is declared 


JsUser.email = "aditya@chatgpt.com"
// console.log(JsUser.email);

// Object.freeze(JsUser);//this method freeze any change in the object

JsUser.email = "aditya@microsoft.com"
// console.log(JsUser.email);


//Giving fn as value to a key for an object
JsUser.greetings = function(){
    console.log("Namaste India");
}
JsUser.greetingsTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());
