import React from 'react';
import "./user-table-component.scss"
import 'element-theme-default';
import TabletComponent from '../../shared-components/table-component/table-component';

const UserTableComponent = (props, context) => {
  const { data , columns } = props;
  return (
    <div>
      <TabletComponent  columns={columns} data={data}/>
    </div>
  );
  
};

export default UserTableComponent;

