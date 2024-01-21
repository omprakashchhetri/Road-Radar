import React from "react";
import Logo from "../Assets/road-radar-footer.png";
import { FaXTwitter } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-color">
        <div className="footer-wrapper">
          <div className="footer-section-one">
            <div className="footer-logo-container">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
              <p className="text-center">
                We're creating a strong system to track buses in real-time,
                making transportation management more efficient.
              </p>
              {/* <h1>Road Radar</h1> */}
            </div>
          </div>
          <div className="footer-section-two">
            <div className="footer-section-columns">
              <h5 className="mb-3">
                <u>Company</u>
              </h5>
              <span>Home</span>
              <span>Cities</span>
              <span>About</span>
              <span>Contact</span>
              <span>Blog</span>
              {/* <span>Work</span> */}
            </div>
            <div className="footer-section-columns">
              <h5 className="mb-3">
                <u>Contact Us</u>
              </h5>
              <span>123-456-789</span>
              <span>roadradar@gmail.com</span>
              <span>info.roderadar@gmail.com</span>
              <span>help.roderadar@gmail.com</span>
            </div>
            <div className="footer-section-columns">
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
        <hr className="hr-br" />
        <div className="copy-right w-100 d-flex justify-content-between align-items-center">
          <div className="footer-copy-right">
            <span className="text-light">
              Copyright © Road Radar • All rights reserved.
            </span>
          </div>
          <div className="footer-icons">
            <FaXTwitter />
            <SiLinkedin />
            <BsYoutube />
            <FaFacebookF />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
