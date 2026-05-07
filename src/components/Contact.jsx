import React, { useRef } from "react";
import "../Style/Contact.css";
import { GitBranch, Mail, MapPin, Phone } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".contact-title",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-title",
            start: "top 80%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".contact-card-left",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-grid",
            start: "top 80%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".contact-card-right",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-grid",
            start: "top 80%",
            once: true,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div id="contact" ref={containerRef} className="section-container">
      <h2 className="section-title contact-title">
        <span className="neon-text-purple">04.</span> Connect
      </h2>

      <div className="contact-grid">
        <div className="contact-card-left glass-card">
          <h3>Get In Touch</h3>

          <a
            href="mailto:hawkhariomhawk@gmail.com"
            
            onMouseOver={(e) =>
              (e.currentTarget.style.color = "var(--accent-cyan)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.color = "var(--text-secondary)")
            }
          >
            <Mail className="neon-text-cyan" /> hawkhariomhawk@gmail.com
          </a>

          <a
            href="tel:+916386328261"
            onMouseOver={(e) =>
              (e.currentTarget.style.color = "var(--accent-cyan)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.color = "var(--text-secondary)")
            }
          >
            <Phone className="neon-text-cyan" /> +916386328261
          </a>

          <div className="location">
            <MapPin className="neon-text-cyan" /> Malawan, Ayodhya, U.P. 224205
          </div>

          <a
            href="https://github.com/Hariom-vishwa"
            
            style={{ marginTop: "10px" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.color = "var(--accent-cyan)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.color = "var(--text-secondary)")
            }
          >
            <GitBranch className="neon-text-purple" />{" "}
            https://github.com/Hariom-vishwa
          </a>
        </div>

        <div className="contact-card-right">
          <div>
            <h4>DECLARATION</h4>
            <p>
              "I hereby declare that the above-mentioned information is true and
              correct to the best of my knowledge and belief."
            </p>
            <p>— Hariom Vishwakarma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
