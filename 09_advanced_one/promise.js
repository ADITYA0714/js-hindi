// Promise is a object and not necessary to store in a variable
// it has two state resolve and reject
// to handle these two state we use .then(), .catch(), .fullfilled()


// +++++++++++++++++++++ ONE ++++++++++++++++++++++++++++++++
const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // like DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("Promise consumed"); 
})


// +++++++++++++++++++ TWO ++++++++++++++++++++++++++++++ 
new Promise(function(resolved, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolved()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


// +++++++++++++++++++++++ THREE ++++++++++++++++++++++++++++++++
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve({username:"Aditya", email: "dggroup@dg.com"})
    },1000)
})
promiseThree.then((user)=>{
    console.log(user);
})


// ++++++++++++++++++++++ FOUR +++++++++++++++++++++++++++++++++
//this part below is called promise creation
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Himanshi", password:"12234"})
        }else{
            reject('Error : Something went wrong!')
        }
    },1000)
})
//this part below is consuming promise
promiseFour.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("The Promise is either rejected or fullfilled")
})


// ++++++++++++++++++++++++++ FIVE ++++++++++++++++++++++++++++++++++++
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Javascript", edition:"18.34"})
        }else{
            reject('Error : JS went wrong!')
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive()

// Fetch handling url data

// async function getMyGithub(){
//     try {
//         const response = await fetch('https://api.github.com/users/aditya0714')
//         const data = await response.json()
//         console.log(data)
//     } catch(error){
//         console.log("E: ",error);
//     }
// }
// getMyGithub();

// Doing same above code using try catch
fetch('https://randomuser.me/api/')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})