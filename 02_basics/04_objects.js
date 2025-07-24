// const tinderUser =  new Object();//singleton object
const tinderUser = {}//non-singleton

tinderUser.id = "123abc"
tinderUser.name = "Aditya"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Aditya",
            lastname : "Kumar"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser?.fullname);//this ?. here is called optional chaning it helps suppose some key is not there in object it will atleast not return error


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}


const obj3 = {...obj1,...obj2,...obj4};//way to join two object
const objcombined = Object.assign({},obj1,obj2,obj4);//alt way to join two object

console.log(obj3);
console.log(objcombined);


const users = [
    {
        id  : 1,
        email : "h@gmail.com",
    },{

    },
    {

    }
]

users[1].email //to access array of object
console.log(tinderUser);
console.log(Object.keys(tinderUser));//return in form of array so easy to access and use
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//gives both key as well as values


console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "Js in hindi",
    price : "999",
    courseInstructor : "HiteshSir"
}

//course.courseInstructor

const {courseInstructor : instructor} = course;//destructuring of object

// console.log(courseInstructor);
console.log(instructor);

//***********json format***********
// {
//     "name"  :"Aditya",
//     "coursename"  : "js in hindi",
//     "price" : "free"
// }


// [
//     {},
//     {},
//     {}
// ]

//above two are formate of data we received from api call that is in array or object 



//hard to read json data we received therefore we use json formator online to make it easy to read and understand 
