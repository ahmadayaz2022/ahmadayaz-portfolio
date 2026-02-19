// import "../styles/home.css";
import "../src/components/home.css";

export default function Home() {
  return (
    <section className="home">
      <h1>Hi, I'm Ahmad Ayaz</h1>
      <h2>MERN Stack Developer</h2>
      <p>
        I build scalable, secure, and modern web applications using
        MongoDB, Express, React, and Node.js.
      </p>
      <div className="buttons">
        <a href="/projects">View Projects</a>
        <a href="/contact" className="outline">Hire Me</a>
      </div>
    </section>
  );
}
