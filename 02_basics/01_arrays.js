//Arrays
const arr = [1 ,2 ,3 ,4 ,5]
const myArr = ["Aditya","Tycoon"]

const arr2 = new Array(1 ,2 ,3, 4, 5)
// console.log(arr2)


//Arrays(Methods)
arr2.push(2)
arr2.push(7)
// console.log(arr2);

arr2.pop()
arr2.pop()
// console.log(arr2);


arr2.unshift(9)
arr2.shift()
// console.log(arr2);


// console.log(arr2.includes(4));
// console.log(arr2.indexOf(4));


const newArr = arr.join();//converts array to string
// console.log(arr)
// console.log(newArr)


//Slice and Splice
console.log("A ",arr)

const myn1 = arr.slice(1,3);
console.log("A ",arr);
console.log(myn1)

const myn2 = arr.splice(1,3)//it manipulates original array(make changes in it)
console.log("B",arr);
console.log(myn2)

