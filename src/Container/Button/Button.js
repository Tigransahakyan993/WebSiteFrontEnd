import React from "react";
import './buttonStyle.css'

class Button extends React.Component{

    render() {
        return (
            <button type="button" id = {this.props.id || null} className={this.props.className || 'btn btn-success'} onClick={this.props.onClick}>{this.props.name}</button>
        )
    }
}

export default Button;