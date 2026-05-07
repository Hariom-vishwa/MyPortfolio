import { Layout, Terminal } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import "../Style/Projects.css";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const containerRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const localProjects = [
      // Web Development Projects
      {
        title: "SMOODH Beverage Landing Page",
        desc: "Designed an interactive beverage landing page inspired by Parle Agro's SMOODH. Implemented smooth scroll-based animations using GSAP and ScrollTrigger, with dynamic transitions between sections and visually engaging product showcases.",
        category: "web",
        iconName: "Layout",
        tech: ["HTML", "CSS", "JavaScript", "GSAP", "ScrollTrigger"],
      },
      {
        title: "TechTrove E-Commerce Platform",
        desc: "Built a responsive e-commerce website for premium electronics. Enhanced user experience with interactive carousels and GSAP powered animations.",
        category: "web",
        iconName: "Layout",
        tech: ["HTML", "CSS", "JavaScript", "GSAP"],
      },
      {
        title: "BrownStone Hotel Booking Website",
        desc: "Developed a modern hotel booking interface with visually appealing UI and smooth GSAP animations. Focused on clean layout, interactive elements, and user-friendly navigation to simulate a real-world booking experience and enhance frontend development skills.",
        category: "web",
        iconName: "Layout",
        tech: ["HTML", "CSS", "JavaScript", "GSAP"],
      },
      {
        title: "Weather App",
        desc: "Developed a responsive weather app using ReactJS with real-time API integration. Displays temperature, humidity, and wind speed, adapting seamlessly to all screens.",
        category: "web",
        iconName: "Layout",
        tech: ["ReactJS", "API", "CSS"],
      },
      {
        title: "Quill – Notes Web App",
        desc: "Created a responsive Notes app with add, edit, and delete functionality. Designed an intuitive UI with smooth device adaptability for better usability.",
        category: "web",
        iconName: "Layout",
        tech: ["HTML", "CSS", "JavaScript"],
      },
      // Python Projects
      {
        title: "Bank Account Management",
        desc: "Built using Python OOP with an Account class to manage balance and account number. Supports debit, credit, and balance inquiry through a command-line interface.",
        category: "python",
        iconName: "Terminal",
        tech: ["Python", "OOP", "CLI"],
      },
      {
        title: "Unit Conversion CLI Tool",
        desc: "Created a beginner-friendly CLI tool for quick conversions (km-mi, lbs-kg, sec-min, °C-°F, cm-in, INR-USD/Euro). Interactive tool for daily calculation needs.",
        category: "python",
        iconName: "Terminal",
        tech: ["Python", "CLI"],
      },
      {
        title: "Command-Line To-Do App",
        desc: "Developed a CLI-based To-Do app with CRUD operations to manage tasks. Implemented file handling to store tasks in a text file for persistence.",
        category: "python",
        iconName: "Terminal",
        tech: ["Python", "File Handling"],
      },
      {
        title: "CLI Based Quiz App",
        desc: "Designed a Python quiz app with multiple-choice questions and instant feedback. Practiced handling dictionaries, loops, and user input for a real project experience.",
        category: "python",
        iconName: "Terminal",
        tech: ["Python", "Dictionaries", "Loops"],
      },
    ];
    setProjects(localProjects);
  }, []);

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter,
  );

  useGSAP(
    () => {
      gsap.fromTo(
        ".projects-title",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          ScrollTrigger: {
            trigger: ".projects-title",
            start: "top 80%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".projects-filters",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-filters",
            once: true,
          },
        },
      );
    },
    { scope: containerRef },
  );

  useGSAP(() => {
    if (!projectsRef.current) return;

    gsap.fromTo(
      ".project-card",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out",
      },
    );
  }, [filter]);

  return (
    <div id="projects" ref={containerRef} className="section-container">
      <h2 className="section-title projects-title">
        <span className="neon-text-purple">02.</span> Projects
      </h2>

      <div className="projects-filters">
        {["all", "web", "python"].map((cat) => (
          <button
            key={cat}
            className={`hover-target glass-card filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div ref={projectsRef} className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div
            key={project.title}
            className="project-card hover-target"
            data-category={project.category}
          >
            <div className="project-card-inner">
              <div className="project-card-front glass-card">
                <div>
                  <div className="project-header">
                    {project.iconName === "Layout" ? (
                      <Layout className="neon-text-cyan" />
                    ) : (
                      <Terminal className="neon-text-purple" />
                    )}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
              </div>

              <div className="project-card-back glass-card">
                <p className="project-desc-text">{project.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
