import React, {useEffect} from 'react';
import "./user-page.scss"
import 'element-theme-default';
import { connect } from "react-redux";
import ButtonComponent from '../../components/shared-components/button-component/button-component';
import { startGetUsers } from '../../redux/actions/user';

const UserPage = ({addUser, getUsers, users }) => {

  useEffect(() => {
    let mounted = true;
    console.log(mounted);
    getUsers();
    return () => mounted = false;
  }, [])
  console.log(users);
  return (
    <div>
      <h1>User Page</h1>
      <ButtonComponent label="ADD USER" type="primary" functionClick ={() => addUser({'name':'german'})} />
    </div>
  
  );
  
};

const mapStateProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  addUser(user){
    dispatch(startGetUsers(user))
  },
  getUsers(){
    dispatch(startGetUsers())
  }
})

export default connect(mapStateProps, mapDispatchToProps)(UserPage);

