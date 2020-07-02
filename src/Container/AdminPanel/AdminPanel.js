import React from "react";
import './adminPanelStyle.css'

import Button from "../Button/Button";
import App from "../Core/api/api";
import UserList from './Users/UserList';
import {PostList} from "./Posts/PostList";

class AdminPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'users',
            users: [],
            posts: [],
        };
        this.fetchUpdate = this.fetchUpdate.bind(this);
        this.fetchDelete = this.fetchDelete.bind(this);
        this.fetchPost = this.fetchPost.bind(this);
        this.postDelete = this.postDelete.bind(this)
        this.updateChanges = this.updateChanges.bind(this)
        this.successCb = this.successCb.bind(this)
        this.updateState = this.updateState.bind(this)
    }

    fetchData () {
        App.doGet('users', (users) => this.setState({users}))
        App.doGet('posts', (posts) => this.setState({posts}))
    }

    fetchPost(){
        const name = document.getElementById('nameId');
        const surname = document.getElementById('surnameId');
        const email = document.getElementById('emailId');
        const password = document.getElementById('passwordId');

        if(!name.value || !surname.value) {
            return
        }else if((name.value.length < 2 ) || (surname.value.length < 2)) {
            return alert('short name or surname')
        }

        const data = {
            name: name.value.trim(),
            surname: surname.value.trim(),
            email: email.value.trim(),
            password: password.value.trim()
        };

        App.doPost('users',data,user => {
            this.setState({users: [...this.state.users, user]})
        }, null)

        name.value = '';
        surname.value = '';
        email.value = '';
        password.value = '';

    }

    fetchUpdate(){
        const name = document.getElementById('PopupNameId');
        const surname = document.getElementById('PopupSurnameId');
        const email = document.getElementById('PopupEmailId');
        const password = document.getElementById('PopupPasswordId');
        const id = document.getElementById('userId').innerText;
        const data = {name: name.value, surname: surname.value,email: email.value,password: password.value};
        const popUp = document.getElementById('popupId');
        const successCb = () => {
            const {users} = this.state;
            users.forEach((user) => {
                    if(+id === user.id) {
                        user.name = name.value;
                        user.surname = surname.value;
                        user.email = email.value;
                        user.password = password.value;
                    }
                }
            )
            this.setState({users})
        }

        App.doPut(`users/${id}`,data,successCb,null
        )

            popUp.style.display = 'none';
    }

    fetchDelete(id) {
        const successCB = () => {
            const {users} = this.state;
            this.setState({users: users.filter(user => user.id !== id)})
        }

        App.doDelete(`users/${id}`,successCB,null);
    }

    postDelete(id) {
        const successCB = () => {
            const {posts} = this.state;
            this.setState({posts: posts.filter(post => post.id !== id)})
        }

        App.doDelete(`posts/${id}`,successCB,null);
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

    successCb(post) {
        const {posts} = this.state
        this.setState({posts: [...posts, {id:post.id, post: post.post, createdAt: post.createdAt, updatedAt:post.updatedAt, userId: post.userId}]})
        console.log('POST : ', post)
    }

    updateState(currentState) {
        console.log('currentState: ', currentState)
        if (!currentState || !currentState.length ) {
           return this.fetchData()
        }
        this.setState({posts: currentState});
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        const {users} = this.state;
        const {posts} = this.state;
        return(
            <div className="container-class">
            <div className="menu-class">
                <div className="btn-cnt"><Button name="Users" onClick={()=>{this.setState({display:'users'})}}/></div>
                <div className="btn-cnt"><Button name="Posts" onClick={()=>this.setState({display:'posts'})}/></div>
                <div className="btn-cnt"><Button name="Anything" onClick={
                    () => {
                        this.setState({display:'another'})
                    }
                }/></div>
            </div>
                 <div className="display-class">
                     {this.state.display === 'users' && <UserList onClick={this.fetchPost} delete={this.fetchDelete} state={users}
                          userUpdate={this.fetchUpdate} flag={this.state.display} />}
                {
                    this.state.display === 'posts' && <PostList delete={this.postDelete} successCb={this.successCb} updateChanges={this.updateChanges} state={posts} flag={this.state.display} updateState={this.updateState}/>
            }
                {
                    this.state.display === 'another' && <h1>anithing</h1>
                }
                 </div>
                </div>
        )
    }
}

export default AdminPanel;