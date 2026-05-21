import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Skills from "../components/home/Skills";
import Experience from "../components/home/Experience";
import Education from "../components/home/Education";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";
import Footer from "../components/common/Footer";

function Home() {
  return (
    <div className="bg-slate-950 text-white overflow-hidden">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Education />

      <Projects />

      <Contact />

      <Footer />

    </div>
  );
}

export default Home;