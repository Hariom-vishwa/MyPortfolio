import "./App.css";
import "./index.css"
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="bg-grid"></div>
      <div className="bg-gradient"></div>

      <main>
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
        <Projects/>
        <Education/>
        <Contact/>

        <footer>
          <p>
            &copy; {new Date().getFullYear()} Hariom Vishwakarma.
          </p>
        </footer>
      </main>
    </>
  );
}

export default App;
