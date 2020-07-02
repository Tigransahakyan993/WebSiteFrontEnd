import React from "react";
import Button from "../../Button/Button";
import './signInStyle.css'
import App from "../../Core/api/api";

import {
    Redirect
} from "react-router-dom";

class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
                email: '',
                password: '',
                access: false
        }
        this.successCb = this.successCb.bind(this);
        this.errorCb = this.errorCb.bind(this);
    }

    successCb(jwt) {
        window.localStorage.setItem('token', jwt.token);
        window.localStorage.setItem('id', jwt.id);
        window.localStorage.setItem('name', jwt.name);
        window.localStorage.setItem('surname', jwt.surname);
        console.log(localStorage);
        if(jwt) {
            console.log(this.state)
            this.props.history.push('/account');
            this.setState(jwt);
            console.log(this.state)
        }
    }

    errorCb(err) {
        console.log('error: ',err)
    }


    render() {
        return(
            <>
                {this.state.access && <Redirect from="/" to="/account"/>}
            <div className="SingInComponent">
                <div className="SignIn_container">
                    <h1>Login Here</h1>
                    <div className="dropdown-menu">
                        <form  className="px-4 py-3">
                            <div className="form-group">
                                <label htmlFor="exampleDropdownFormEmail1">Email address</label>
                                <input type="email" name="email"
                                       onChange={event=> {
                                           this.setState({...this.state, email: event.target.value});
                                           }
                                       }
                                       className="form-control" id="exampleDropdownFormEmail1"
                                       placeholder="email@example.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleDropdownFormPassword1">Password</label>
                                <input type="password" name="password"
                                       onChange={event=>{
                                           this.setState({...this.state,password:event.target.value})
                                       }}
                                       className="form-control" id="exampleDropdownFormPassword1"
                                       placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                    <label className="form-check-label" htmlFor="dropdownCheck">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <Button name="LogIn"
                                    onClick={() => {
                             App.doPost('signIn',this.state, this.successCb,this.errorCb);
                            }
                            }
                            />
                            {/*    <Link*/}
                            {/*          onClick={*/}
                            {/*              () => {*/}
                            {/*                  App.doPost('signIn',this.state, this.successCb,this.errorCb)*/}
                            {/*                  console.log('STATE', this.state);*/}
                            {/*                  const {token} = this.state*/}
                            {/*                    console.log('tok: ', token)*/}
                            {/*              }*/}
                            {/*          }*/}
                            {/*          to={token ?'/account' : '/'}>*/}
                            {/*        LogIn*/}
                            {/*    </Link>*/}
                        </form>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="http://google.com">New around here? Sign up</a>
                        <a className="dropdown-item" href="http://google.com">Forgot password?</a>
                    </div>
                </div>
            </div>
        </>
        )
}


}

export default SignIn;