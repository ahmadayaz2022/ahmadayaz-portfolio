const experiences = [
  {
    title: "Full-Stack Development Intern",
    company: "SeeBiz Pvt. Ltd.",
    duration: "Dec 2025 - May 2026",
  },

  {
    title: "Python Developer Trainee",
    company: "UET Peshawar",
    duration: "Jul 2024 - Oct 2024",
  },
];

function Experience() {
  return (
    <section className="bg-slate-900 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-950 p-8 rounded-2xl border border-slate-700"
            >
              <h3 className="text-2xl font-bold mb-2">
                {exp.title}
              </h3>

              <p className="text-cyan-400 mb-2">
                {exp.company}
              </p>

              <p className="text-gray-400">
                {exp.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;