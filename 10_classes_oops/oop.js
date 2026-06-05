// ++++++++++++++++++++++ Object lietrals ++++++++++++++++++++++++++++++++++
const user = {
    username : "Aditya",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from databases");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails);
// console.log(this)


// ++++++++++++++++++++ Constructor function ++++++++++++++++++++++++++++++++++++
// const promiseOne = new Promise()
// const date = new Date()
// here new is actually a constructor fn - it basically helps to make new instance

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    // return this //(Implicitly defined rehta hai no need or definig by our self)
}
const userOne = new User("Pintu", 42, true);
console.log(userOne.constuctor); 
const userTwo = new User("Chintu", 13, true);
// here above if we have not written (new User) then the userTwo would over write the value of userOne.
// As there was not seperate instances of both
// adding new create seperate instances
console.log(userOne);

// Learn about instancesof in JS from internet
// arrow fn do not have this keyword beacuses of prototypal behaviour of js 