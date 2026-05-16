const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Python",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "REST APIs",
  "Postman",
  "AI Tools",
];

function Skills() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-20">
          <p className="text-cyan-400 mb-4">
            MY SKILLS
          </p>

          <h2 className="text-5xl font-bold">
            Technologies I Work With
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass px-8 py-4 rounded-2xl hover:scale-105 transition duration-300"
            >
              <p className="text-lg font-semibold">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;