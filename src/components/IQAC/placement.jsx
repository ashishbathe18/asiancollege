import React, { useState } from "react";
import "./placement.css";

function Placement() {
  const [selectedImg, setSelectedImg] = useState(null);

  const placements = [
    {
      name: "Rahul Patil",
      position: "Frontend Developer",
      company: "TCS",
      college: "Dr. D. Y. Patil College",
      packageAmount: "4.5 LPA",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "Sneha More",
      position: "MERN Stack Developer",
      company: "Infosys",
      college: "SP College Pune",
      packageAmount: "6 LPA",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "Amit Deshmukh",
      position: "Backend Developer",
      company: "Wipro",
      college: "Modern College",
      packageAmount: "5 LPA",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "Priya Kulkarni",
      position: "Software Engineer",
      company: "Capgemini",
      college: "Fergusson College",
      packageAmount: "7 LPA",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <section className="placement-section">
      <div className="placement-container">
        <div className="placement-header">
          <h2 className="placement-title">Our Latest Placed Students</h2>
          <p className="placement-subtitle">
            Meet our talented students who secured their dream jobs.
          </p>
        </div>

        <div className="placement-grid">
          {placements.map((item, index) => (
            <div
              key={index}
              className="placement-card"
              onClick={() => setSelectedImg(item.image)}
            >
              <span className="placement-OrangeITech-head">Asian College</span>

              <div className="placement-img">
                <img src={item.image} alt={item.name} />
              </div>

              <h5>{item.name}</h5>
              <p><strong>Position :</strong> {item.position}</p>
              <h6><strong>Company :</strong> {item.company}</h6>
           
              <div className="student-package">
                <strong>Package :</strong> {item.packageAmount}
              </div>
            </div>
          ))}
        </div>
          
        {selectedImg && (
          <div className="lightbox" onClick={() => setSelectedImg(null)}>
            <span className="close-btn">&times;</span>
            <img
              src={selectedImg}
              alt="Placement"
              className="lightbox-img"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Placement;
