const score = 100
// console.log(score);

const balance = new Number(400)
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));//returns value upto decimal place specified --> 400.00


const otherNumber = 123.8967
// console.log(otherNumber.toPrecision(3));//round of after 3 digit

const hundreds = 100000000;
// console.log(hundreds.toLocaleString());//it give result after applying comma that helps to easy count number of zeros


//++++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++
console.log(Math.random()) 
console.log(Math.PI);
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10)+1)

const max = 20
const min = 10
console.log(Math.floor(Math.random() * (max - min + 1)) + min)//give value btw the range min and max

