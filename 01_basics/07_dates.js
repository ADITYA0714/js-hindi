let myDate = new Date()
// console.log(myDate)
// console.log(myDate.split('T'));//this will not work as myDate return value which is not string to use split make date string my using tostring()

console.log(myDate.toString())

console.log(myDate.toLocaleString())


// let createMyDate = new Date(2024,0,15)
// let createMyDate = new Date(2025,0,14,5,3)//(output) => 1/14/2025, 5:03:00 AM
let createMyDate = new Date("2025-07-24");//(output) => 7/24/2025, 12:00:00 AM


console.log(createMyDate.toLocaleString())//1/15/2024, 12:00:00 AM
// console.log(createMyDate.toDateString())//Mon Jan 15 2024


let myTimeStamp = Date.now()
console.log(myTimeStamp)//used when we make quiz applications
// console.log(myTimeStamp.getTime());

console.log(Math.floor(Date.now()/1000))//convert in second from millisecond


let myTime = new Date()
// console.log(myTime)
// console.log(myTime.getMonth())//month in js is from 0-11


// `${myTime.getDay()} and the Time.`


let era = myTime.toLocaleString('Default',{
    weekday:"long",
    month: "short"
})
console.log(era)