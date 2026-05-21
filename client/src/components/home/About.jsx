function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-900">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-16 text-cyan-400">
          About Me
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              alt="about"
              className="rounded-2xl"
            />
          </div>

          <div>

            <p className="text-gray-300 leading-9 text-lg">
              I am Ahmad Ayaz, a Software Engineering graduate passionate about MERN stack development, AI applications, Python programming, and building scalable web applications.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-slate-800 p-6 rounded-xl">
                <h2 className="text-3xl font-bold text-cyan-400">10+</h2>
                <p>Projects Completed</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl">
                <h2 className="text-3xl font-bold text-cyan-400">MERN</h2>
                <p>Full Stack Developer</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;