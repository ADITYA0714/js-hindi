// Reduce

const myNums = [1,2,3,4,5];

const myTotal = myNums.reduce(function (acc, currval){
    return acc + currval
},0)
console.log(myTotal);


