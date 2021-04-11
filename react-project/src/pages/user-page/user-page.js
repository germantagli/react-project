import React, {useEffect, useState, useCallback} from 'react';
import "./user-page.scss"
import 'element-theme-default';
import { connect } from "react-redux";
import ButtonComponent from '../../components/shared-components/button-component/button-component';
import { startGetUsers, startAddUsers, startEditUsers, startDeleteUsers } from '../../redux/actions/user';
import UserTableComponent from '../../components/user-components/user-table-component/user-table-component';
import UserAddComponent from '../../components/user-components/user-add-component/user-add-component';
import { Tag } from 'element-react/next';

const UserPage = ({editUserCall, addUser, getUsers, users, deleteUserCall}) => {

  useEffect(() => {
    getUsers()
  }, []);

  const ARRAY_COLUMS_USER_TABLE = [
    {
      label: "id",
      prop: "id",
      width: 60
    },
    {
      label: "Email",
      prop: "email",
      width: 180
    },
    {
      label: "Name",
      prop: "name"
    },
    {
      label: "Username",
      prop: "username",
      render: function (data) {
        return <Tag>{data.username}</Tag>
      }
    },
    {
      label: "Phone",
      prop: "phone"
    },
    {
      label: "Website",
      prop: "website"
    },
    {
      label: "Operations",
      render: function (data) {
        return (
          <span>
            <ButtonComponent type="info" size="small" label="Edit" functionClick={() => editUser(data)} />
            <ButtonComponent type="danger" size="small" label="Delete" functionClick={() => deleteUser(data)} />
          </span>
        )
      }
    }
  ]
  const [user, setUser] = useState({email:"",name:"",  username:"", phone:"", website:""});
  const [modeComponent, setModeComponent] = useState("ADD");

  
  const cancellForm = () => {
    setUser({email:"",name:"",  username:"", phone:"", website:""});
    setModeComponent("ADD");
  }

  const editUser = (data) => {
    setUser(data);
    setModeComponent("EDIT");
  }

  const deleteUser = (data) => {
    deleteUserCall(data);
  }

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h2>User Management</h2>
        <div>
          <ButtonComponent 
            disabled={!user.email && !user.name && !user.username && !user.phone && !user.website  } 
            icon="delete" 
            label="CANCEL" 
            type="danger"  
            functionClick ={() => cancellForm()} 
          />
          
          <ButtonComponent 
            disabled={!user.email || !user.name || !user.username || !user.phone || !user.website  } 
            icon= {modeComponent === "ADD" ? "plus" : "edit"} 
            label={modeComponent === "ADD" ? "ADD USER" : "EDIT USER"} 
            type="success"  
            functionClick = {modeComponent === "ADD" ? () => addUser(user): () => editUserCall(user)}   
          />

        </div>
      </div>
      <div className="mb-3"><UserAddComponent user={user} set={setUser}/></div>
      <UserTableComponent data={users} columns={ARRAY_COLUMS_USER_TABLE}/>
    </div>
  );
};

const mapStateProps = state => ({
  users: state.users || [],
})

const mapDispatchToProps = dispatch => ({
  addUser(user){
    dispatch(startAddUsers(user))
  },
  editUserCall(user){
    dispatch(startEditUsers(user))
  },
  deleteUserCall(user){
    dispatch(startDeleteUsers(user))
  },
  getUsers(){
    dispatch(startGetUsers())
  }
})

export default connect(mapStateProps, mapDispatchToProps)(UserPage);

