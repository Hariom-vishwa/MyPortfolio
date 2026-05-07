import React from "react";
import "../Style/Education.css"

const educationData = [
  {
    year: "2025",
    title: "Web Development (1 year)",
    institution: "LNIT Sultanpur, U.P.",
    type: "course",
  },
  {
    year: "2025",
    title: "5-Day MSME Certification",
    institution: "MSME",
    type: "cert",
  },
  {
    year: "2024",
    title: "Bachelor of Arts (B.A.)",
    institution: "Geography & English",
    type: "degree",
  },
  {
    year: "2018",
    title: "CCC Certification",
    institution: "NIELIT",
    type: "cert",
  },
  {
    year: "2018",
    title: "Class 12th",
    institution: "Physics, Chemistry, Math and English",
    type: "school",
  },
];

const Education = () => {
  return (
    <div id="education" className="section-container">
      <h2 className="section-title education-title">
        <span className="neon-text-cyan">03.</span> Education & Certificates
      </h2>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        {educationData.map((itme, index) => (
          <div className="timeline-item hover-target">
            <div className="timeline-dot"></div>
            <div className="card-cont">
              <span>
                {itme.year}
              </span>
              <h3>
                {itme.title}
              </h3>
              <p>
                {itme.institution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
