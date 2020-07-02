import React from "react";
import App from "../../Core/api/api";


export class PostModal extends React.Component{

    constructor(props) {
        super(props);
        this.sendPost = this.sendPost.bind(this);
    }
    state = {
        post: "",
        userId: "",
    }


    sendPost(){
        App.doPost('posts', this.state,this.props.successCb,null)
        this.props.close()
    }

    render() {
        return(
            <div className="modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create Post</h5>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">UserId</span>
                            </div>
                            <input type="text" className="form-control" placeholder="UserId" aria-label="Username"
                                   aria-describedby="basic-addon1" onChange={(e) => this.setState({userId: e.target.value})}/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Post</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Post" aria-label="Username"
                                   aria-describedby="basic-addon1" onChange={(e) => this.setState({post: e.target.value})} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.close}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.sendPost}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}