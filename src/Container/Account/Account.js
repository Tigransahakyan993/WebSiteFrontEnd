import React from "react";
import './Account.css'
import Button from "../Button/Button";
import App from "../Core/api/api";
import {PostsModal} from "../Modal/PopUpPosts"
import {PopUpForUpdate} from "../Modal/PopupUpdatePosts";

class Account extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            visible: false,
            updatePVis: false,
            temp: "",
            tempId: "",
        }
        this.fetchData = this.fetchData.bind(this)
        this.popUpShowUnshow = this.popUpShowUnshow.bind(this)
        this.update = this.update.bind(this)
        this.updateModalVisible = this.updateModalVisible.bind(this)
        this.postDelete = this.postDelete.bind(this)
        this.getPosts = this.getPosts.bind(this)
        this.updateChanges = this.updateChanges.bind(this);
    }

    getPosts(post) {
        this.setState({temp: post})
    }

    updateChanges(id,postt){
        const {posts} = this.state;

        posts.forEach((post) => {
                if(+id === post.id) {
                    post.post = postt;
                    console.log('post: ', post)
                }
            }
        )
        this.setState({posts})
    }

    popUpShowUnshow(){
        const {visible} = this.state;

        this.setState({visible: !visible})
        console.log(this.state)
    }

    updateModalVisible(e) {
        const {updatePVis} = this.state;

        this.setState({updatePVis: !updatePVis})
        if (e) {
            this.setState({tempId: e.id})
            this.setState({temp: e.post})
        }
    }

    postDelete(post) {
        const {posts} = this.state;

        App.doDelete(`posts/${post.id}`, (id) => {
            // console.log(id)
            this.setState({posts: posts.filter(post => post.id !== +id)})
        })
    }

    fetchData() {
        App.doGet(`post/${window.localStorage.id}`,(data) => this.setState({posts: data}),(err) => console.log(err));
    }

    update(post) {
        const {posts} = this.state;
        this.setState({posts: [...posts, post]})
        console.log(post)
        console.log(this.state);
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
            const {posts} = this.state;
            const {visible} = this.state;
            const {updatePVis} = this.state;
            const {temp} = this.state;
            const {tempId} = this.state;

        return(
            <div id='accountContainer'>
                <div id='accountDiv'>
                    <div className='accountHeader'>
                        <div className='imgContainer'>
                            <img src="https://www.vokrug.tv/pic/product/6/f/e/2/6fe2523ab4de68e3981b29c9f9f00f17.jpeg" alt="avatar"/>
                        </div>
                        <div className='personInfo'>
                            <p id='userName'> {localStorage.name} </p>
                            <p id='userSurname'>{localStorage.surname}</p>
                            {/*<p id='userAge' >{localStorage.id}</p>*/}
                        </div>
                        <div>
                            <Button name="Add TODO'S" onClick={this.popUpShowUnshow}/>
                        </div>
                        {visible ? <PostsModal popUpVisible={this.popUpShowUnshow} update={this.update} /> : null}
                    </div>

                    <div id='accountBody'>
                        <div className='acbDescription'>
                            <h1>TODO'S</h1>
                        </div>
                        <div id='userTodo'>
                            {updatePVis ? <PopUpForUpdate cancel={this.updateModalVisible} updateChanges={this.updateChanges} temp={temp} tempId={tempId} p={this.getPosts}/> : null}
                            {posts.map((post,index) => {
                                return(
                                    <div key={index} >
                                        <div>
                                            <p className='todo_N'>TODO: {index+1}</p>
                                        </div>
                                        <div className='todoContainer'>
                                            <div className='p4'><p>{post.post}</p></div>
                                            <div> <Button name='Change' onClick={() => this.updateModalVisible(post)} /></div>
                                            <div> <Button name='Delete' onClick={() => this.postDelete(post)}/></div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Account;