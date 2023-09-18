import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_top">
        <div className="footer_left">
          <h3>About Us</h3>
          <p>
            Smart Eye is a leading provider of information technology,
            consulting, and business process services. Our dedicated employees
            offer strategic insights, technological expertise and industry
            experience.
          </p>
          <p>
            We focus on technologies that promise to reduce costs, streamline
            processes and speed time-to-market, Backed by our strong quality
            processes and rich experience managing global...
          </p>
        </div>
        <div className="footer_center">
          <h3>Useful Links</h3>
          <ul>
            <li>About us</li>
            <li>Gallary</li>
            <li>Contact Us</li>
            <li>Portfolio</li>
          </ul>
        </div>
        <div className="footer_right">
          <h3>Contact Us</h3>
          <p>NGO Ethiopia</p>
          <p>Niger District</p>
          <p>Addis Ababa, Ethiopia</p>
          <p>Phone: +251 2 34 54 67</p>
          <p>Email: info@ngoethiopia.com</p>
          <p>Website: www.ngoethiopia.com</p>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="footer_bottom_left">
          <p>2015 © All Rights Reserved | Designed and Developed by ABENEZER TENKIR</p>
        </div>
        <div className="footer_bottom_right">
          <i className="fa fa-facebook-official"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
