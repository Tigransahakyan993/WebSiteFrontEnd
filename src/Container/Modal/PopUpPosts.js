import React from "react";
import "./Popup.css"
import App from "../Core/api/api";

export class PostsModal extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            post: "",
        }
        this.addTodo = this.addTodo.bind(this);

    }

    addTodo() {
 const body = {post: this.state.post, userId: window.localStorage.id};

        App.doPost('posts', body, this.props.update,null);
        this.setState({post: ""});
        this.props.popUpVisible()
    }

render() {

    return(

        <div className="modal" tabIndex="-1" role="dialog" id="modalId">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Todo</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.popUpVisible } >
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="..." onChange={event=> {
                                this.setState({post: event.target.value});
                            }}
                                   aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.popUpVisible }>Close</button>
                        <button type="button" className="btn btn-primary" onClick={this.addTodo}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    )
}


}