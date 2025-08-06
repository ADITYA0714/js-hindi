function sayMyName() {
  console.log("A");
  console.log("D");
  console.log("I");
  console.log("T");
  console.log("Y");
  console.log("A");
}

// sayMyName();

function addTwoNumbers(number1, number2){
  // if(typeof number1 !== "number" || typeof number2 !== "number"){
  //   console.log("Give number only as parameter");
  // }
  // else{
  //   console.log(number1+number2);
  // }

  console.log(number1+number2);
}

// addTwoNumbers(3,4);




function addTwoNumber(num1, num2){
  console.log(num1+num2);
  //return num1+num2 (This is the way to get value being returned)
}

const result = addTwoNumber(4,5);

console.log(result);//here it gives undefined as function only gives value if we return


function calculateCartPrice(...num1){
  return num1;
}

console.log(calculateCartPrice(200,300,400,5000));

const user = {
  username : "Aaditya",
  price : 199
}
function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
  username : "swati",
  price :399
})

const myNewArray = [200,400,600,800];

function returnSecondValue(getArray){
  return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300,464,5743,346]));