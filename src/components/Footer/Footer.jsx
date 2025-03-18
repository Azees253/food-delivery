import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img
            src={assets.logo}
            alt=""
            style={{ width: "150px", height: "70px" }}
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
            voluptatum magnam cum labore ipsam, fuga error beatae iure quisquam
            quaerat?
          </p>
          <div className="footer-social-icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GETINTOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 @ Tomato.com -All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
