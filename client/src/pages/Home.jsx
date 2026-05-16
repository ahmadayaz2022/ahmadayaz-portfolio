import Navbar from "../components/common/Navbar";
import Hero from "../components/common/Hero";
import About from "../components/home/About";
import Skills from "../components/home/Skills";
import Experience from "../components/home/Experience";
import Footer from "../components/common/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default Home;