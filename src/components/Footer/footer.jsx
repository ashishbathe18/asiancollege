import React from "react";
import "./Footer.css";

import image from "../../assets/Footer/image.png"

const Footer = () => {
  return (
    <>
      <footer className="footer">
        {/* Address */}
        <div className="footer-col">
          <h3>Address</h3>
          <p>
          asian college, Pune <br />
            (Deemed to be University) <br />
            Sant Tukaram Nagar <br />
            Pimpri, Pune 411018
          </p>

          <p><strong>Contact:</strong> +91 20 2780 5000 / 5001</p>
          <p><strong>Email:</strong> info@dpu.edu.in</p>
          <p><strong>Fax:</strong> +91 20 27420010</p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>UCPE and FD</li>
            <li>Incubation Centre (DPU FIIE)</li>
            <li>R and D Cell</li>
            <li>Admissions</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Disclaimer</li>
            <li>DPU ERP</li>
            <li>Mandatory Disclosure</li>
            <li>UGC Public Self Disclosure</li>
            <li>Caste Discrimination</li>
            <li>Grievance Redressal</li>
            <li>Women Harassment</li>
          </ul>
        </div>

        {/* Infrastructure */}
        <div className="footer-col">
          <h3>Infrastructure</h3>
          <div className="infra-grid">
            <img src={image} alt="" />
          </div>
        </div>

        {/* Social Media */}
        <div className="footer-col">
          <h3>Social Media</h3>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-x-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-whatsapp"></i>
          </div>

          <button className="access-btn">Screen Reader Access</button>
          <button className="translate-btn">🌐 Translate</button>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          Copyright ©2026 All Rights Reserved |
          By Software Development Cell, Dr. D. Y. Patil Vidyapeeth, Pune
        </p>
        <span>Site Updated On : 07/08/2025</span>
      </div>
    </>
  );
};

export default Footer;
