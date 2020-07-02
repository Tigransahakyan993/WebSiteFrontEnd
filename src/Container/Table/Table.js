import React from "react";
import './tableStyle.css'
import User from "./TableBody";

class Table extends React.Component{

    render() {
        return(
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    {
                        // console.log('state',this.props.state)
                        this.props.state[0] ? Object.keys(this.props.state[0]).map((el, i) => {
                        return <th key={i} scope="col">{el[0].toUpperCase() + el.slice(1)}</th>
                    }) : <th scope="col">empty</th>
                    }
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>
                <User flag={this.props.flag} delete={this.props.delete} state={this.props.state} show={this.props.show}/>
                </tbody>
            </table>
        )
    }
}

export default Table;