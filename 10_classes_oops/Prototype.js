// let myName = "aditya"
// let muChannel = "Super30"

// console.log(myName.length);

let tool = ["hammer","phawara"]

let heroPower = {
    mistry:"hammer",
    majdoor:"phawara",
    getMajdoorPower : function(){
        console.log(`Bihari power is ${this.mistry}`);
    }
}

Object.prototype.aditya = function(){
    console.log(`aditya is present everywhere in all object`);
}
// heroPower.aditya()
tool.aditya()

Array.prototype.heyAditya = function(){
    console.log(`Power given only to array`)
}
// heroPower.heyAditya();// throws error as we have given power only to Array
tool.heyAditya()

// +++++++++++++++++++++++++ Inheritance ++++++++++++++++++++++++++++++++
const User = {
    name : "majdoor",
    email : "majdoor@bihar.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport ={
    makeAssignment:'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}
Teacher.__proto__ = User 

//modern syntax for inheritance
Object.setPrototypeOf(TeachingSupport, Teacher)

let parivaar = "AdityaIsCEO      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

parivaar.trueLength()
"HimanshiIsTechLead".trueLength()
"SwatiIsLeadDataEngineer".trueLength()