//truthy / falsy value

const userEmail = "adi@aditya.ai"

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}


// falsy value 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


//Truthy value
//"0", "false", " ", [], {}, function(){}

//How to check Array
const arry =[];
if(arry.length == 0){
    console.log("Empty Array")
}

//How to check Object
const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("Empty Object")
}

// false == 0
// O/P : true
// false == ""
// O/P : true
// 0 == ''
// O/P : true

//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 //O/P : 5
// val1 = null ?? 10 //O/P : 10
// val1 = undefined ?? 10 //O/P : 10
val1 = null ?? 10 ?? 20

console.log(val1);

//Ternary Operator
// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80") 