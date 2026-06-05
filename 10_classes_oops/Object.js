function multuiplyBy5(num){
    return num*5;
}

multuiplyBy5.power = 2;

console.log(multuiplyBy5(5));
console.log(multuiplyBy5.power);
console.log(multuiplyBy5.prototype);

function createUser(username,score){
    this.username = username;
    this.score = score;
}
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}
// const chai = createUser("chai",25);
const tea = createUser("tea",250)

// to access these new fn/feature like printMe
// we do not have to write like chai.prototype.printMe() like this
// Js give syntatic sugar for all this we can directly use them applying 'chai.printMe()' like this

// chai.printMe();//this will not work beacuse printMe fn is there in memory buut we need to tell that a new fn/feature is alos added

const chai = new createUser("chai",25);// by applying new keyword here
chai.printMe();


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/