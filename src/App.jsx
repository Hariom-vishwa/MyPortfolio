import "./index.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import Loader from "./components/Loader";

gsap.registerPlugin(useGSAP);

function App() {
  const [loading, setLoading] = useState(true);
  const mainRef = useRef(null);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  useGSAP(() => {
    if (!loading && mainRef.current) {
      gsap.fromTo(
        mainRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.inOut" },
      );
    }
  }, [loading]);

  return (
    <>
      <div className="bg-grid"></div>
      <div className="bg-gradient"></div>

      {loading && <Loader onComplete={() => setLoading(false)} />}

      {!loading && (
        <main ref={mainRef}>
          <nav>
            <ul className="nav-list">
              {["Skills", "Projects", "Education", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Components  */}
          <Hero />
          <Skills />
          <Projects />
          <Education />
          <Contact />

          <footer>
            <p>&copy; {new Date().getFullYear()} Hariom Vishwakarma.</p>
          </footer>
        </main>
      )}
    </>
  );
}

export default App;
