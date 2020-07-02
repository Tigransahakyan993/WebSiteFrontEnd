import React from "react";
import CreateUserBar from "../../CreateBar/UserCreate";
import Table from "../../Table/Table";
import Popup from "../../Modal/Popup";
import Button from "../../Button/Button";

 class UserList  extends React.Component{

   render() {
       return(
           <>
               <CreateUserBar
                   button={<Button name='POST' onClick={this.props.onClick}/>}
               />
               <Table delete={this.props.delete} state={this.props.state} flag={this.props.flag}/>
               <Popup userUpdate={this.props.userUpdate}/>
           </>
       )
   }
}

export default UserList