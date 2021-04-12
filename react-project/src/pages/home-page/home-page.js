import React from 'react';
import "./home-page.scss"
import 'element-theme-default';
import { Alert } from 'element-react/next';
import { Row, Col } from 'react-bootstrap';
import img404 from '../../error.png';
import destopk from '../../screen2.png'; 
import mobile from '../../screen1.png';  

const HomePage = (props, context) => {
  return (
    <div>
      <Row>
      <Col md={12}>
        <Alert
          title="Informazione"
          type="info"
          description="In questa primera versione de la aplicazione, potrai fare : Inserimento, Modifica, Cancellazione e Visualizazione della lista de tutti gli User "
          showIcon={true} />
      </Col>
      
      <Col md={12} className="text-center mt-5">
          <h2>Desktop</h2>
          <img src={destopk} class="img-fluid" alt="" width="75%"></img>
          <h2>Mobile</h2>
          <img src={mobile}  class="img-fluid" alt="" width="50%"></img>
      </Col>
            
      <Col md={6} className="text-center mt-5">
       
      </Col>

      </Row>
    </div>
   );    
};

export default HomePage;

