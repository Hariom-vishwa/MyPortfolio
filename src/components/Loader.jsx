import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import "../Style/Loader.css"

gsap.registerPlugin(useGSAP);

const Loader = ({onComplete}) => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);
    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
    gsap.to(barRef.current, {
      width: `${progress}%`,
      duration: 0.2,
      ease: "power1.out",
    });

    if (progress >= 100) {
      gsap.to(containerRef.current, {
        y: "-100vh",
        opacity: 0,
        duration: 0.88,
        ease: "power3.inOut",
        delay: 0.5,
        onComplete: onComplete,
      });
    }
  }, [progress, onComplete]);

  return (
    <div ref={containerRef} className="loader-container">
      <div className="progress-parent">
        <div ref={barRef} className="progress-bar"></div>
      </div>
      <div className="progress-count">
        {progress >=100? "SYSTEM READY" : `LOADING ${progress}%`}
      </div>
    </div>
  );
};

export default Loader;
