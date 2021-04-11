import React, {useEffect, useState} from 'react';
import "./user-page.scss"
import 'element-theme-default';
import { connect } from "react-redux";
import ButtonComponent from '../../components/shared-components/button-component/button-component';
import { startGetUsers, startAddUsers } from '../../redux/actions/user';
import UserTableComponent from '../../components/user-components/user-table-component/user-table-component';
import { ARRAY_COLUMS_USER_TABLE } from '../../constants';
import UserAddComponent from '../../components/user-components/user-add-component/user-add-component';

const UserPage = ({addUser, getUsers, users }) => {

  useEffect(() => {
    let mounted = true;
    console.log(mounted);
    if(!users.length) {getUsers()} 
    return () => mounted = false;
  }, [])

  const [user, setUser] = useState({email:"",name:"",  username:"", phone:"", website:""});

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h2>User Management</h2>
        <ButtonComponent 
          disabled={!user.email || !user.name || !user.username || !user.phone || !user.website  } 
          icon="plus" 
          label="ADD USER" 
          type="success"  
          functionClick ={() => addUser(user)} 
        />
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
  getUsers(){
    dispatch(startGetUsers())
  }
})

export default connect(mapStateProps, mapDispatchToProps)(UserPage);

