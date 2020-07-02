import React from "react";
import Button from "../Button/Button";


class User extends React.Component{

    constructor(props) {
        super(props);
        this.showPopup = this.showPopup.bind(this)
        this.state = {
            flag: this.props.flag
        }
    }

    showPopup(id,name,surname,email,password) {
        const popUp = document.getElementById('popupId');
        const userId = document.getElementById('userId');
        const username = document.getElementById('PopupNameId');
        const userSurname = document.getElementById('PopupSurnameId');
        const userEmail = document.getElementById('PopupEmailId');
        const userPassword = document.getElementById('PopupPasswordId');

        popUp.style.display = 'flex';
        userId.innerText = id;
        username.value = name;
        userSurname.value = surname;
        userEmail.value = email;
        userPassword.value = password;
    }

    render() {
        const {flag} = this.state;
        return(
            this.props.state.map(row => {
                return(
                    <tr key={row.id}>
                        {Object.values(row).map((cell, i) => {
                            return i === 0 ? <th key={i} scope="row">{cell}</th> : <td key={i}>{cell}</td>
                        })}
                        <td> <Button name = 'Update' onClick={() => {
                            console.log(this.props.state)
                          return flag === "users" ?
                                this.showPopup(row.id,row.name,row.surname,row.email,row.password) :
                                flag === "posts" ? this.props.show(row) : null
                        }}/> </td>
                        <td><Button name='Delete' className='btn btn-danger' onClick={()=>{this.props.delete(row.id)}} /></td>
                    </tr>
                )
                }
            )
        )
    }
}

export default User;