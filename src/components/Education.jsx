import React, { useRef } from "react";
import "../Style/Education.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

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
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".education-title",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".education-title",
            start: "top 80%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".timeline-item",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 85%",
            once: true,
          },
        },
      );

      const items = document.querySelectorAll(".timeline-item");
      items.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          gsap.to(item, {
            x: 10,
            backgroundColor: "rgba(17,17,26,0.8)",
            borderColor: "rgba(0,243,255,0.2)",
            duration: 0.3,
          });
        });
        item.addEventListener("mouseleave", () => {
          gsap.to(item, {
            x: 0,
            backgroundColor: "rgba(17,17,26,0.4)",
            borderColor: "rgba(255,255,255,0.05)",
            duration: 0.3,
          });
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <div id="education" ref={containerRef} className="section-container">
      <h2 className="section-title education-title">
        <span className="neon-text-cyan">03.</span> Education & Certificates
      </h2>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        {educationData.map((itme, index) => (
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="card-cont">
              <span>{itme.year}</span>
              <h3>{itme.title}</h3>
              <p>{itme.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
