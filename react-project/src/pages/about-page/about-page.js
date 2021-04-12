import React from 'react';
import "./about-page.scss"
import 'element-theme-default';
import img404 from '../../error.png'; 

const AboutPage = (props, context) => {

  return (
    <div className="text-center mt-5">
      <img src={img404} alt="" />
    </div>
  );
  
};

export default AboutPage;

