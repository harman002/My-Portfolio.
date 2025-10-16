import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
