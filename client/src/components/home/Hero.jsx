// import { useEffect, useState } from "react";
// import API from "../../services/api";

// function Hero() {

//   const [hero, setHero] = useState({});

//   useEffect(() => {
//     fetchHero();
//   }, []);

//   const fetchHero = async () => {
//     const res = await API.get("/hero");
//     setHero(res.data);
//   };

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center bg-gradient-to-b from-slate-950 to-slate-900"
//     >

//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">

//         <div>

//           <p className="text-cyan-400 text-xl mb-4">
//             Hello, I'm
//           </p>

//           <h1 className="text-6xl font-bold leading-tight mb-5">
//             {hero.title}
//           </h1>

//           <h2 className="text-3xl text-gray-300 mb-6">
//             {hero.subtitle}
//           </h2>

//           <p className="text-gray-400 leading-8 mb-8">
//             {hero.description}
//           </p>

//           <div className="flex gap-4">

//             <button className="bg-cyan-500 px-6 py-3 rounded-lg font-semibold">
//               Hire Me
//             </button>

//             <button className="border border-cyan-500 px-6 py-3 rounded-lg font-semibold">
//               Download CV
//             </button>

//           </div>

//         </div>

//         <div className="flex justify-center">

//           <img
//             src={hero.image}
//             alt="hero"
//             className="w-[400px] h-[400px] object-cover rounded-full border-4 border-cyan-500 shadow-2xl"
//           />

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Hero;

import { useEffect, useState } from "react";
import API from "../../services/api";

function Hero() {

  const [hero, setHero] = useState(null);

  useEffect(() => {
    fetchHero();
  }, []);

  const fetchHero = async () => {
    try {

      const res = await API.get("/hero");

      setHero(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-b from-slate-950 to-slate-900"
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">

        <div>

          <p className="text-cyan-400 text-xl mb-4">
            Hello, I'm
          </p>

          <h1 className="text-6xl font-bold leading-tight mb-5">
            {hero?.title || "Ahmad Ayaz"}
          </h1>

          <h2 className="text-3xl text-gray-300 mb-6">
            {hero?.subtitle || "MERN Stack Developer"}
          </h2>

          <p className="text-gray-400 leading-8 mb-8">
            {hero?.description || "Software Engineering graduate passionate about MERN stack and AI development."}
          </p>

          <div className="flex gap-4">

            <button className="bg-cyan-500 px-6 py-3 rounded-lg font-semibold">
              Hire Me
            </button>

            <button className="border border-cyan-500 px-6 py-3 rounded-lg font-semibold">
              Download CV
            </button>

          </div>

        </div>

        <div className="flex justify-center">

          <img
            src={
              hero?.image ||
              ""
            }
            alt="hero"
            className="w-[400px] h-[400px] object-cover rounded-full border-4 border-cyan-500 shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;