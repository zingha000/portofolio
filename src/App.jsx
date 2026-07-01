import Navbar from "./components/Navbar";
import BackgroundMotif from "./components/BackgroundMotif";
import BackToTop from "./components/BackToTop";
import Hero from "./sections/Hero";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="font-sans relative">
      <BackgroundMotif />
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      <BackToTop />
    </div>
  );
}

export default App;