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