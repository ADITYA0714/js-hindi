function one(){
    const username = "aditya"
    function two(){
        const website = "youtube"
        // console.log((username));
    }
    // console.log(website);outside the scope

    two();
}

one();

if(true){
    const username = "aditya"
    if(username === "aditya"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);//outside the scope 
}
// console.log(username);//outside the scope


//*********** intresting **********

function addone(num){
    return num + 1;
}

addone(5)

//Alternate way to write functions
const addTwo = function(num){
    return num+2
}
addTwo(5);
//variable in Js can hold any value/thing like in this its holding function
