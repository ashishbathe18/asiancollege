import React from "react";
import "./Blog.css";

const institutes = [
  "Dr. D. Y. Patil Arts College",
  "Dr. D. Y. Patil Commerce College",
 
];

function Blog() {
  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        {institutes.map((inst, index) => (
          <div key={index} className="sidebar-item">
            {inst}
          </div>
        ))}
      </aside>

      {/* Main Content */}
      <div className="main-wrapper">
        {/* ===== SECTION 1 ===== */}
        <main className="main-content grid-box">
          <div className="box header-box">
            <h1>Dr. D. Y. Patil Arts & Commerce College</h1>
            <h2>FACULTY APPOINTMENTS</h2>
          </div>

          <div className="box intro-box">
            Applications are invited from eligible Indian nationals for teaching
            positions in the Arts and Commerce streams for the academic year
            2026–27.
          </div>

          <div className="box table-box">
            <table>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>No. of Posts</th>
                  <th>Department</th>
                  <th>Eligibility</th>
                  <th>Reporting Authority</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Assistant Professor</td>
                  <td>04</td>
                  <td>Arts & Commerce</td>
                  <td>
                    <strong>Essential:</strong> Master’s Degree with minimum 55%
                    marks as per UGC norms.
                    <br />
                    <strong>Desirable:</strong>
                    <ol>
                      <li>NET / SET qualified</li>
                      <li>Teaching experience</li>
                      <li>Good communication skills</li>
                    </ol>
                  </td>
                  <td>
                    Principal <br />
                    Dr. D. Y. Patil Arts & Commerce College <br />
                    Pune
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="box details-box">
            <strong>Position Details:</strong>
            <ul>
              <li>Post: Assistant Professor</li>
              <li>No. of Vacancies: 04</li>
              <li>Employment Type: Contract / Permanent</li>
              <li>Salary: As per UGC & University norms</li>
            </ul>

            <strong>General Conditions:</strong>
            <ol>
              <li>Appointment subject to interview</li>
              <li>No TA/DA will be paid</li>
              <li>Original documents required</li>
            </ol>
          </div>

          <div className="box footer-box">Published on 21 January 2026</div>
        </main>

        {/* ===== SECTION 2 ===== */}
        <main className="main-content notice-box">
          <div className="notice-header">
            <h1>Dr. D. Y. Patil Arts & Commerce College, Pune</h1>
            <p>(Affiliated to Recognized University)</p>
            <p className="small-text">
              Accredited Institution <br />
              Pune – Maharashtra
            </p>
          </div>

          <div className="notice-title">TEACHING POSITIONS</div>

          <div className="notice-subtitle">
            Applications are invited for the following posts
          </div>

          <div className="notice-position">Assistant Professor</div>

          <div className="notice-grid">
            <div className="label">Educational Qualification:</div>
            <div className="value">
              Master’s Degree in Arts / Commerce with minimum 55% marks.
            </div>

            <div className="label">Experience:</div>
            <div className="value">
              Teaching experience preferred for senior positions.
            </div>

            <div className="label">Age Limit:</div>
            <div className="value">As per University & Govt. norms.</div>

            <div className="label">Required Skills:</div>
            <div className="value">
              <ol>
                <li>Subject knowledge</li>
                <li>Communication skills</li>
                <li>Student mentoring</li>
                <li>Academic research interest</li>
              </ol>
            </div>
          </div>

          <div className="notice-submit">
            Interested candidates should submit their application on or before
            <strong> January 27, 2026</strong>.
            <br />
            📄 <a href="#">Application Form click here</a>
          </div>

          <div className="notice-footer">Published on 21 January 2026</div>
        </main>
      </div>
    </div>
  );
}

export default Blog;