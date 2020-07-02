import React from "react";
import Button from "../../Button/Button";
function Registration() {

    return(
        <div className="reg_component">
            <div>
                <input type="text" id="reg_name"/>
                <input type="text" id="reg_surname"/>
                <input type="text" id="reg_email"/>
                <input type="password" id="reg_first_pass"/>
                <input type="password" id="reg_second_pass"/>
            </div>
            <div>
                <Button name='Registration now' />
            </div>
        </div>

    )
}

function isValidUser() {
    const name = document.getElementById("reg_name");
    const surname = document.getElementById("reg_surname");
    const email = document.getElementById("reg_email");
    const firstPassword = document.getElementById("reg_first_pass");
    const secondPassword = document.getElementById("reg_second_pass");
    const user = {
        name,
        surname,
        email,
        firstPassword,
        secondPassword
    }

}

function isValidEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
}

function isValidPassword(inputtxt) {
    // if(!pass.trim()) return false;
    //
    // if (pass.length < 5){
    //     return false
    // }

    let passw = /^[A-Za-z]\w{7,14}$/;
    if(inputtxt.value.match(passw))
    {
        alert('Correct, try another...')
        return true;
    }
    else
    {
        alert('Wrong...!')
        return false;
    }

}