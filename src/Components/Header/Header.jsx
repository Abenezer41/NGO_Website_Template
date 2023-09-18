import React from "react";
import './Header.css'

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_left">
        <div className="header_email">
        <i class="fa fa-envelope-o"></i>
        <span>Abenezertenkir41@gmail.com</span>
        </div>
        <span>|</span>
        <div className="header_phone">
        <i className="fa fa-volume-control-phone"></i>
        <span>+251 2 13 24 54</span>
        </div>
      </div>

      <div className="header_center">
        <span>Folow Us : </span>
        <i className="fa fa-facebook-official"></i>
        <i className="fa fa-twitter"></i>
        <i className="fa fa-instagram"></i>
        <i className="fa fa-linkedin"></i>
      </div>

      <div className="header_right">
        <button className="btn1">Join Us</button>
        <button className="btn2">Donate</button>
      </div>
    </div>
  );
};

export default Header;
