let score = "23abc"

console.log(typeof score)
console.log(typeof (score))//passed as method

let valueInNumber = Number(score);//to convert first alphabet should be capital
console.log(typeof valueInNumber)//isse type to convert hojaega number mei but not necessary wo value number hi ho like 32abc 

console.log(valueInNumber)//after conversion we check actual value

//keep the value of score as null,undefiend,true,false and also check the output


let isLogged = "aditya";
let isLoggedIsBoolean = Boolean(isLogged)
console.log(isLoggedIsBoolean)
// 1 => true
// "" => false 
// "aditya" => true

//**************************Operations***************************
let value = 3
let negvalue = -value
console.log(negvalue)
console.log(2**3)//it means, 2 pow 3

console.log("1"+2)// 12
console.log(1+"2")// 12 
console.log("1"+2+2)// 122
console.log(1+2+"2")// 32


console.log(+true)// 1
// console.log(true+) // error
console.log(+"") // 0