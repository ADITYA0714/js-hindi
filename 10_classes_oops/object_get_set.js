const User = {
    _email: "aditya@idait.com",
    _password: "1324",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
//here we use factory function instead of new keyword to create object
const tea = Object.create(User)
console.log(tea.email);