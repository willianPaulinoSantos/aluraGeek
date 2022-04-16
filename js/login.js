/*import {User} from "./js/user-class.js";*/

class User {
    email;
    _password;

    constructor(email, password){
        this.email = email;
        this._password = password;
    }
}

const buttonLogin = document.querySelector(".login-botao");

buttonLogin.addEventListener('click', function(){
    const email = document.querySelector(".login-usuario").value;
    const _password = document.querySelector(".login-senha").value;
    const user = new User (email, _password);
    console.log(user);
});