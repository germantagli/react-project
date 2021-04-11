import React from 'react';
import { Menu } from 'element-react/next';
import "./menu-component.scss"
import 'element-theme-default';
import { Link } from "react-router-dom";

const MenuComponent = (props, context) => {

  return (
    <div>
      <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal">

        {/* MENU DESTOKP */}
          <Menu.Item index="1" className="d-none d-sm-none d-md-block"><Link to="/">Home</Link></Menu.Item>
          <Menu.Item index="2" className="d-none d-sm-none d-md-block"><Link to="/user">User</Link></Menu.Item>
          <Menu.Item index="3" className="d-none d-sm-none d-md-block"><Link to="/contact">Contact</Link></Menu.Item>
          <Menu.Item index="4" className="d-none d-sm-none d-md-block"><Link to="/about">About</Link></Menu.Item>
        {/* MENU DESTOKP */}
        
        {/* MENU MOBILE */}
          <Menu.SubMenu index="5"  title={<span><i className="el-icon-menu"></i></span>} className="d-block d-sm-block d-md-none">
            <Menu.Item index="1" ><Link to="/">Home</Link></Menu.Item>
            <Menu.Item index="2"><Link to="/user">User</Link></Menu.Item>
            <Menu.Item index="3"><Link to="/contact">Contact</Link></Menu.Item>
            <Menu.Item index="4"><Link to="/about">About</Link></Menu.Item>
          </Menu.SubMenu>
        {/* MENU MOBILE */}

        <Menu.SubMenu index="6" style={{float: "right"}} title={<span><i class="el-icon-message"></i></span>}>
          <Menu.Item index="6-1"><span>no message to read</span></Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu index="7" style={{float: "right"}} title={<span><i className="el-icon-setting"></i>Config</span>}>
            <Menu.Item index="7-1"><i class="el-icon-edit"></i> Change Lingua</Menu.Item>
            <Menu.Item index="7-2">Logout</Menu.Item>
        </Menu.SubMenu>

      </Menu>
    </div>

    

  );
  
};

export default MenuComponent;

