let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())

let createMyDate = new Date(2024,0,15)
// console.log(createMyDate.toLocaleString())
// console.log(createMyDate.toDateString())


let myTimeStamp = Date.now()
// console.log(myTimeStamp)//used when we make quiz applications
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