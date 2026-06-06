class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase
    }
    set email(value){
        this._email = value
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(val){
        this._password = val
    }
}

const aditya = new User("aditya@ai.com", "abc")
console.log(aditya.password);