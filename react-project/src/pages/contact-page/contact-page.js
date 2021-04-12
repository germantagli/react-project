import React from 'react';
import "./contact-page.scss"
import 'element-theme-default';
import img404 from '../../error.png'; 

const ContactPage = (props, context) => {

  return (
    <div className="text-center mt-5">
      <img src={img404} alt="" />
    </div>
  );
  
};

export default ContactPage;

