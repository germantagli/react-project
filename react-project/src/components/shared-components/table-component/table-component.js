import React from 'react';
import { Table } from 'element-react/next';
import "./table-component.scss"
import 'element-theme-default';

const TabletComponent = (props, context) => {

  /** Component created to share it with the rest of the application renders a loading based on the properties that are passed
    *@prop {array}   data       -> table data
    *@prop {array}   columns    -> columns
    *@prop {string}  emptyText  -> Displayed text when data is empty. You can customize this area with slot="empty"
  **/

  const { data , columns, emptyText="not data" } = props;
  
  return (
    <Table
      style={{width: '100%'}}
      columns={columns}
      data={data}
      emptyText={emptyText}
    />
  );
};

export default TabletComponent;

