import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_upper">
        <div className="footer_div">
          <div className="footer_title">
            <h3>Our Branches</h3>
          </div>
          <div className="footer_info">
            <span>Serbia</span>
            <span>Spain</span>
            <span>England</span>
            <span>Russia</span>
            <span>Greece</span>
          </div>
        </div>
        <div className="footer_div">
          <div className="footer_title">
            <h3>Quick Links</h3>
          </div>
          <div className="footer_info">
            <span>Home</span>
            <span>About</span>
            <span>Products</span>
            <span>Rewiev</span>
            <span>Contact Us</span>
          </div>
        </div>
        <div className="footer_div">
          <div className="footer_title">
            <h3>Contact Info</h3>
          </div>
          <div className="footer_info">
            <span>+38163 / 11-88-180</span>
            <span>+38111 / 128-429</span>
            <span>timotijevicvlada@gmail.com</span>
            <span>Belgrade, Serbia</span>
            <span>New Belgrade</span>
          </div>
        </div>
        <div className="footer_div">
          <div className="footer_title">
            <h3>Social Media</h3>
          </div>
          <div className="footer_info">
            <span>Facebook</span>
            <span>Instgram</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
            <span>Tik Tok</span>
          </div>
        </div>
      </div>
      <div className="footer_lower">
            <h3>Coffee shop by | <span>Vladimir Timotijevic</span></h3>
      </div>
    </div>
  );
};

export default Footer;
