import React from "react";
import Table from "../../Table/Table";
import {PopUpForUpdate} from "../../Modal/PopupUpdatePosts"
import Button from "../../Button/Button";
import {PostModal} from "./postModal";
import {SearchComponent} from "../../SearchComponent/SearchComponent";

export class PostList extends React.Component {

constructor(props) {
    super(props);
    this.state = {visible: false, modalVisibility: false}
    this.showModal = this.showModal.bind(this)
    this.getTempPost = this.getTempPost.bind(this)
    this.modalVisible = this.modalVisible.bind(this)
    // this.openModal = this.openModal.bind(this)
}

    showModal(e) {
    const {visible} = this.state;

    this.setState({  visible: !visible });

        if (e) {
            this.setState({tempId: e.id})
            this.setState({temp: e.post})
            this.setState({userId: e.userId})
        }
    }

    getTempPost(post) {
        this.setState({temp: post})
    }

    modalVisible(){
        const {modalVisibility} = this.state;

        this.setState({modalVisibility: !modalVisibility})
    }

    render() {
        const {visible} = this.state;
        const {temp} = this.state;
        const {tempId} = this.state;
        const {modalVisibility} = this.state;
        const {userId} = this.state;

        return(<>
            <div>
                <Button name="Create new Post"  onClick={this.modalVisible}/>
                <SearchComponent state={this.props.state} updateState={this.props.updateState}/>
            </div>
            {modalVisibility ? <PostModal close={this.modalVisible} successCb={this.props.successCb}/> : null}
            {visible ? <PopUpForUpdate cancel={this.showModal} updateChanges={this.props.updateChanges} temp={temp} tempId={tempId} userId={userId} p={this.getTempPost}/> : null}
            <Table delete={this.props.delete} state={this.props.state} flag={this.props.flag} show={this.showModal}/>
        </>)
}
}