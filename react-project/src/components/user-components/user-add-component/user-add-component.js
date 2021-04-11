import React from 'react';
import "./user-add-component.scss"
import 'element-theme-default';
import { Row, Col } from 'react-bootstrap';
import InputTextComponent from '../../shared-components/input-text-component/input-text-component';
import { Card } from 'element-react/next';

const UserAddComponent = (props, context) => {
  const { user , set } = props;
  return (
    <div>
      <Card className="mt-3">
        <Row>
          <Col md={4} className="mb-3">
            <InputTextComponent label="Email" value={user.email} change={(value) => set({...user, email:value }) }/>
          </Col>
          <Col md={4} className="mb-3">
            <InputTextComponent label="Name"  value={user.name} change={(value) => set({...user, name:value }) } />
          </Col>
          <Col md={4} className="mb-3">
            <InputTextComponent label="Username" value={user.username} change={(value) => set({...user, username:value }) }/>
          </Col>
          <Col md={6} className="mb-3">
            <InputTextComponent label="Phone" value={user.phone} change={(value) => set({...user, phone:value }) }/>
          </Col>
          <Col md={6} className="mb-3">
            <InputTextComponent label="Website" value={user.website} change={(value) => set({...user, website:value }) }/>
          </Col>
        </Row>
      </Card>
    </div>
  );
  
};

export default UserAddComponent;

