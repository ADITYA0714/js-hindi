let score = "23adc"

// console.log(typeof score)
// console.log(typeof (score))//passed as method

let valueInNumber = Number(score);//to convert first alphabet should be capital

// console.log(typeof valueInNumber)//isse type to convert hojaega number mei but not necessary wo value number hi ho like 32abc 

// console.log(valueInNumber)//after conversion we check actual value

//keep the value of score as null,undefiend,true,false and also check the output

// Some outputs:-(if converted to number)
// null -> 0
// string -> Number(but value might not be same or NaN)
// boolean -> 0/1 base on true false
// undefined -> NaN
 


let isLogged = "aditya";
let isLoggedIsBoolean = Boolean(isLogged)
console.log(typeof isLoggedIsBoolean)
console.log(isLoggedIsBoolean)
// // 1 => true
// // "" => false 
// // "aditya" => true

// //**************************Operations***************************
let value = 3
let negvalue = -value
// console.log(negvalue)
// console.log(2**3)//it means, 2 pow 3 

// console.log("1"+2)// 12
// console.log(1+"2")// 12 
// console.log("1"+2+2)// 122
// console.log(1+2+"2")// 32
// console.log(null+"1")//null1
// console.log(1+null)//1
// console.log("1"+null)//1null
// console.log(null+undefined)//NaN

// console.log(+true)// 1
// // console.log(true+) // error
// console.log(true+null)//1
// console.log(+"") // 0



// prefix and post fix increment:-
// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// // Expected output: "a:4, b:4"