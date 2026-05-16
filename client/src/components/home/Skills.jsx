const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],

  Backend: ["Node.js", "Express.js", "Python", "Django", "Flask"],

  Database: ["MongoDB", "SQL"],

  Tools: ["Git", "GitHub", "Postman", "VS Code"],

  AI: ["ChatGPT", "Claude", "Gemini", "Deepseek"],
};

function Skills() {
  return (
    <section className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-slate-900 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-cyan-500 px-4 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;