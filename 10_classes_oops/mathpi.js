const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter)

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

//Why some value of an object cannot be touched, why it cannot be overridden

// const mynewObject = Object.create(null)
const chai = {
    name:"ginger chai",
    price: 250,
    isAvailable : true,

    orderChai : function(){
        console.log("chai nhi bani");
    }
}
// console.log(chai)
const chaiObj = Object.getOwnPropertyDescriptor(chai,"name")
console.log(chaiObj);

// chai.name = "masala chai";
// console.log(chai.name);
Object.defineProperty(chai,"name",{
    // writable:false,
    enumerable:false,//this stop iteartion on this value
    // configurable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
// chai.name = "spicy chai";
// console.log(chai.name);

for(let [key,value] of Object.entries(chai)){
    if(typeof value!= 'function'){
        console.log(`${key}:${value}`);
    }
}