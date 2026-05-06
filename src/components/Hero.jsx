import React, { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./Style/hero.css";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.5 });

      tl.fromTo(
        ".hero-status",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      )
        .fromTo(
          ".hero-title",
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6",
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5",
        )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5",
        )
        .fromTo(
          ".hero-buttons",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5",
        )
        .fromTo(
          ".scroll-indicator",
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          "-=0.6",
        )
        .to(
          ".scroll-indicator svg",
          {
            y: 10,
            repeat: -1,
            yoyo: true,
            duration: 1,
            ease: "power1.inOut",
          },
          "-=0.3",
        );
    },
    { scope: containerRef },
  );
  return (
    <>
      <div ref={containerRef} className="hero-container section-container">
        <div>
          <p className="hero-status neon-text-cyan">FRONTEND WEB DEVELOPER</p>
          <h1 className="hero-title">
            Hariom <br />
            <span className="hero-title-purple">Vishwakarma.</span>
          </h1>
          <h2 className="hero-subtitle">
            I build{" "}
            <span style={{ color: "var(--text-primary" }}>
              responsive web applications.
            </span>
          </h2>
          <p className="hero-description">
            Frontend Developer skilled in HTML, CSS, JavaScript, ReactJS, and
            GSAP, with hands-on experience building real-world projects. Also
            familiar with Python and MySQL, and eager to contribute to creating
            responsive, user-focused web applications.
          </p>
          <div
            className="hero-buttons"
            style={{ display: "flex", gap: "20px" }}
          >
            <a href="#projects" className="glass-card">
              View Projects
            </a>
            <a href="#contact" className="contact-btn">
              Contact Me
            </a>
          </div>
        </div>
        <div className="scroll-indicator">
          <span style={{ letterSpacing: "2px" }}>SCROLL</span>
          <ChevronDown
            size={24}
            style={{
              color: "var(--accent-cyan)",
              textShadow: "0 0 10px var(--accent-cyan-glow)",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
