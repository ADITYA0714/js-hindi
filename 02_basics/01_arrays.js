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
arr2.pop()//simply removes last value
// console.log(arr2);


arr2.unshift(9)//insert at start
arr2.shift()//removes from start
// console.log(arr2);


// console.log(arr2.includes(4));
// console.log(arr2.indexOf(4));


const newArr = arr.join();//converts array to string
// console.log(arr)//(output) => [1,2,3,4,5]
// console.log(newArr)//(output) => 1,2,3,4,5


//Slice and Splice
console.log("A ",arr)

const myn1 = arr.slice(1,3);
console.log(myn1)
console.log("B",arr);

const myn2 = arr.splice(1,3)//it manipulates original array(make changes in it that is removes them from original array), also it includes uptil element-interger which is 3
console.log(myn2)
console.log("C",arr);

