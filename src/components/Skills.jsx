import React, { useRef } from "react";
import "./Style/Skills.css";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, ScrollTrigger);

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
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".skills-title",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skills-title",
            start: "top 80%",
            once: true,
          },
        },
      );
      gsap.fromTo(
        ".skill-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".skill-card",
            start: "top 85%",
            once: true,
          },
        },
      );
      gsap.fromTo(
        ".additional-caps",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".additional-caps",
            start: "top 90%",
            once: true,
          },
        },
      );

      // Card hover effect
      const cards = document.querySelectorAll(".skill-card");
      cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05,
            borderColor: "var(--accent-purple)",
            boxShadow: "0 0 15px var(--accent-purple-glow)",
            duration: 0.3,
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            borderColor: "rgba(255, 255, 255, 0.05)",
            boxShadow: "none",
            duration: 0.3,
          });
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      id="skills"
      ref={containerRef}
      className="skills-container section-container"
    >
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
          <li style={{ marginBottom: "5px" }}>
            • MS Office (Word, Excel, PowerPoint)
          </li>
          <li>• Typing Speed: 55 WPM (English)</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
