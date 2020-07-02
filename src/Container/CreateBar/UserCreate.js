import React from "react";
import './createBarStyle.css'

class CreateUserBar extends React.Component{

    render() {
        return(
            <div className='CreateUserBar'>

                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
                    </div>
                    <input type="text" id="nameId" className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-sm" />
                </div>

                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" >Surname</span>
                    </div>
                    <input type="text" id="surnameId" className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" >Email</span>
                    </div>
                    <input type="text" id="emailId" className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" >Password</span>
                    </div>
                    <input type="text" id="passwordId" className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-sm" />
                </div>
                {this.props.button}
            </div>
        )
    }
}

export default CreateUserBar;