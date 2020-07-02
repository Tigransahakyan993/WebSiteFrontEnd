import React from "react";
import './Popup.css'
import Button from "../Button/Button";

class Popup extends React.Component{

    render() {
        return(
            <div className='popup' id='popupId'>
                <div>
                    <h1 id='userId'>unreachable Id</h1>
                </div>
                <div>
                    <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" >Name</span>
                        </div>
                        <input type="text" id="PopupNameId" className="form-control" aria-label="Sizing example input"
                               aria-describedby="inputGroup-sizing-sm" />
                    </div>

                    <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" >Surname</span>
                        </div>
                        <input type="text" id="PopupSurnameId" className="form-control" aria-label="Sizing example input"
                               aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" >Email</span>
                        </div>
                        <input type="text" id="PopupEmailId" className="form-control" aria-label="Sizing example input"
                               aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" >Password</span>
                        </div>
                        <input type="text" id="PopupPasswordId" className="form-control" aria-label="Sizing example input"
                               aria-describedby="inputGroup-sizing-sm" />
                    </div>
                </div>
                <div className='button_container'>
                    <div>
                        <Button name='Update' onClick={this.props.userUpdate}/>
                    </div>
                    <div>
                        <Button onClick={() => {
                            const popUp = document.getElementById('popupId');
                            popUp.style.display = 'none';
                        }} name='Cancel'/>
                    </div>
                </div>

            </div>
        )
    }
}
export default Popup;