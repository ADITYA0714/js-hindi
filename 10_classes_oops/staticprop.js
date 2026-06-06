class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }
    // A static method belongs to the class itself,
    // not to individual instances. It can be called
    // using User.createId(), but not from an object
    // created with 'new User(...)'.
    static createId(){
        return `123`
    }
}
const aditya = new User("aditya")
// console.log(aditya.createId())

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email
    }
}
const iphone = new Teacher("iphone", "iphone@apple.com");
iphone.logMe();
