import { useEffect, useState } from "react";
import API from "../../services/api";

function Skills() {

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    const res = await API.get("/skills");
    setSkills(res.data);
  };

  return (
    <section id="skills" className="p-10">

      <h1 className="text-4xl font-bold mb-10 text-center">
        Skills
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {skills.map((skill) => (

          <div
            key={skill._id}
            className="bg-slate-800 p-5 rounded-xl"
          >

            <h2 className="text-2xl mb-3">
              {skill.name}
            </h2>

            <div className="w-full bg-gray-600 rounded-full h-3">

              <div
                className="bg-cyan-500 h-3 rounded-full"
                style={{ width: `${skill.percentage}%` }}
              ></div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;