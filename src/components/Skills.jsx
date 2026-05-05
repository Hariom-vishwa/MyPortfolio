import React from "react";
import "./Style/skills.css";
import "../index.css";

const skills = [
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "ReactJS", category: "Frontend" },
  { name: "GSAP", category: "Frontend" },
  { name: "Python", category: "Backend" },
  { name: "MySQL", category: "Backend" },
  { name: "Responsive Web Design", category: "Design" },
  { name: "Animated Websites", category: "Design" },
  { name: "UI/UX Basics", category: "Design" },
];

const Skills = () => {
  return (
    <div id="skills" className="skills-container section-container">
      <h2 className="skills-title section-title">
        <span className="neon-text-cyan">01.</span> Tech Stack
      </h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card glass-card">
            <h3>{skill.name}</h3>
            <p>{skill.category}</p>
          </div>
        ))}
      </div>

      <div className="additional-caps glass-card">
        <h3>Additional Capabilities</h3>
        <ul>
          <li style={{marginBottom:"5px"}}>• MS Office (Word, Excel, PowerPoint)</li>
          <li>• Typing Speed: 55 WPM (English)</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
