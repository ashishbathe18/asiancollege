import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div>
      <div
        className="contact-hero"
        style={{
          backgroundImage: `url(https://www.asianacademypune.ac.in/writable/uploads/head-banner.jpg)`,
        }}
      >
        <div className="overlay">
          <h1>Contact Us</h1>
        </div>
        
        <div className="breadcrumb">
          <span className="home">Home</span>
          <span className="arrow">›</span>
          <span>Contact Us</span>
        </div>
      </div>
          <div className="contact-wrapper">
      {/* LEFT SIDE */}
      <div className="contact-info">
        <h2>Asian College of Science and Commerce</h2>

        <p>
          <i className="icon">📍</i>
          Sr.No.28/15/16, Narhe Dhayri Road (Pari Company Chowk),
          Dhayari, Tal-Haveli, Pune - 411041
        </p>

        <p>
          <i className="icon">📞</i> +91-9975976605
        </p>

        <p>
          <i className="icon">☎️</i> +91-020-24690610, +91-020-24690620
        </p>

        <p>
          <i className="icon">✉️</i> asianacademypune@gmail.com
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="contact-form">
        <form>
          <label>
            Name <span>*</span>
          </label>
          <input type="text" placeholder="Name" />

          <div className="row">
            <div>
              <label>
                Mobile Number <span>*</span>
              </label>
              <input type="text" placeholder="Mobile Number" />
            </div>

            <div>
              <label>E-Mail Address</label>
              <input type="email" placeholder="E-Mail Address" />
            </div>
          </div>

          <label>Subject</label>
          <input type="text" placeholder="Subject" />

          <label>Message</label>
          <textarea placeholder="Message"></textarea>

          <label>
            Captcha <span>*</span>
          </label>
          <div className="captcha-row">
            <input type="text" placeholder="Captcha" />
            <div className="captcha-box">43g</div>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
     <div className="map-container">
      <iframe
        title="Asian College Location"
        src="https://www.google.com/maps?q=AAER's%20Asian%20College%20of%20Science%20and%20Commerce%20Pune&output=embed"
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
    </div>
  );
}

export default Contact;