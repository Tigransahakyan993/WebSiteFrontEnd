import React from "react";
import App from "../Core/api/api";

export function PopUpForUpdate(props) {

    const successCb = () => {
        props.updateChanges(props.tempId,props.temp)
        props.cancel()
    }

    const addPost = () => {
        const body = {post: props.temp,}
        App.doPut(`post/${props.tempId}`,body,successCb,null)
            }

    return(
            <div className="modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">UserId</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Username"
                                       aria-describedby="basic-addon1" defaultValue={props.userId}  onChange={(e) => {props.p(e.target.value)}}/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">TODO</span>
                                </div>
                                 <input type="text" className="form-control" aria-label="Username"
                                       aria-describedby="basic-addon1" defaultValue={props.temp}  onChange={(e) => {props.p(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.cancel}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={addPost} >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

    )
}