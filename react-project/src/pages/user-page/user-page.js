import React, {useEffect, useState, useCallback} from 'react';
import "./user-page.scss"
import 'element-theme-default';
import { connect } from "react-redux";
import ButtonComponent from '../../components/shared-components/button-component/button-component';
import { startGetUsers, startAddUsers, startEditUsers, startDeleteUsers } from '../../redux/actions/user';
import UserTableComponent from '../../components/user-components/user-table-component/user-table-component';
import UserAddComponent from '../../components/user-components/user-add-component/user-add-component';
import { MessageBox, Tag } from 'element-react/next';
import SpinnerComponent from '../../components/shared-components/spinner-component/sppiner-component';

const UserPage = ({editUserCall, addUser, getUsers, users, deleteUserCall, loading}) => {

  useEffect(() => {
    getUsers()
  }, []);

  const ARRAY_COLUMS_USER_TABLE = [
    {
      label: "id",
      prop: "id",
      width: 100
    },
    {
      label: "Email",
      prop: "email",
      width: 500
    },
    {
      label: "Name",
      prop: "name",
      width: 500
    },
    {
      label: "Username",
      prop: "username",
      width: 300,
      render: function (data) {
        return <Tag>{data.username}</Tag>
      }
    },
    {
      label: "Phone",
      prop: "phone",
      width: 300,
    },
    {
      label: "Website",
      prop: "website",
      width: 300,
    },
    {
      label: "Operations",
      fixed: 'right',
      width: 200,
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
    MessageBox.confirm('You confirm to delete', 'Warning', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning'
    }).then(() => {
      deleteUserCall(data);
    }).catch(() => {
      //cancel action
    });
  }

  const handlerAddUser = (user) => {
    addUser(user)
    setUser({email:"",name:"",  username:"", phone:"", website:""});
  }

  return (
    <div>
      <SpinnerComponent fullscreen = {loading} loading={loading}/>
      <div className="d-flex justify-content-between">
        <h2>User Management </h2>
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
            functionClick = {modeComponent === "ADD" ? () => handlerAddUser(user): () => editUserCall(user)}   
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
  loading : state.loading 
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

