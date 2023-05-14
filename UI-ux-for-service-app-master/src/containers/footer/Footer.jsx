import React from 'react';
import sevaLogo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="seva__footer section__padding">
    <div className="seva__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="seva__footer-btn">
      <p>Early Access</p>
    </div>

    <div className="seva__footer-links">
      <div className="seva__footer-links_logo">
        <img src={sevaLogo} alt="seva_logo" />
        <p>sldfjksldfkj sldkfj dsflj <br /> All Rights Reserved</p>
      </div>
      <div className="seva__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="seva__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="seva__footer-links_div">
        <h4>Get in touch</h4>
        <p>Mayflower forest in concrete</p>
        <p>12313131123</p>
        <p>email</p>
      </div>
    </div>

    <div className="seva__footer-copyright">
      <p>Shhhhh some is watching you.</p>
    </div>
  </div>
);

export default Footer;
