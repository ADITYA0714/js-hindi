const user = {
    username :"aditya",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    } 
}
//this simply refers to current context , in simple it can be understand as current value of variable
user.welcomeMessage()
user.username = "sam";
user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "aditya"
//     console.log(this.username);//output : undefined becoz this works for object not fn
// }
// chai();


// const chain = function(){
//     let username = "aditya"
//     console.log(this.username);
// }

const chain = ()=>{
    let username = "aditya"
    console.log(this.username);//still undefined
}
chain()



//*********** Arrow Fn ************

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }


// const addTwo = (num1,num2)=> num1+num2 //implicit return 
//when we use { } then return is written when we use ( ) return is not needed

const addTwo = (num1,num2)=> ({username : "aditya"})//way to return object implicit way

console.log(addTwo(3,4))

const myArray = [2,3,4,5,6]

// myArray.forEach(function(){})
// myArray.forEach(()=>{})
// myArray.forEach(()=>())
//above all are way to return array