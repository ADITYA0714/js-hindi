function SetUsername(username){

    //Complex DB calls
    this.username = username
    console.log("Called")
}

function createUser(username,email,password){
    SetUsername.call(this,username)
    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@fb.com","123")
console.log(chai)

//call  pass the current execution context to another object
//like in this case as soon as createuser fn is called is goes away from call stack there for it foreget setusername
  //  conetxt even though it was called and user name was not set


// 'call' lets us run a function with a specific 'this' context.
// Here, createUser uses SetUsername.call(this, username) so that
// the 'this' inside SetUsername points to the new createUser object.
// Without 'call', SetUsername would run in its own context and not
// attach 'username' to the new user object.


// 🔎 Step-by-Step Explanation (Simple Terms)
// 1. Function SetUsername
// It takes a username and sets this.username = username.
// Normally, if you just call SetUsername("chai"), this would be undefined (in strict mode) or the global object (in non-strict mode).
// That means the property wouldn’t end up on your new user object.

// 2. Function createUser
// This is like a constructor for making user objects.
// Inside it, you want to reuse the logic from SetUsername.
// But you need SetUsername to work on the same object that createUser is building.

// 3. Using .call(this, username)
// .call is a method available on all functions.
// It lets you manually set what this should be when the function runs.
// So here, you say: “Run SetUsername, but make sure its this is the same this as createUser.”
// That way, this.username = username attaches to the new object being created.

// 4. Creating an object with new createUser(...)
// When you use new, JavaScript creates a fresh empty object and sets this inside createUser to that object.
// Then createUser runs:
// SetUsername.call(this, username) → attaches username to the new object.
// this.email = email → attaches email.
// this.password = password → attaches password.
// Finally, the new object is returned.