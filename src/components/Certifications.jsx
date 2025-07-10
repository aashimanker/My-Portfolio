import React from "react";

const certifications = [
  {
    title: "Java Programming Fundamentals",
    provider: "Infosys",
    link: "https://drive.google.com/file/d/1yD5YAE8GoZdkc0UrvI-z093j3G-YQL5U/view?usp=sharing",
  },
  {
    title: "Full Stack Development with MERN",
    provider: "Cisco ThingQbator",
    link: "https://drive.google.com/file/d/1AF1UUZiZ_bsYYcRs8c5wccJgDed9dKRR/view?usp=sharing",
  },
  {
    title: "Web Dev Basics",
    provider: "Infosys",
    link: "https://drive.google.com/file/d/1FdZq_7GwovK5PMODP8HhazxLco1nkxL3/view?usp=sharing",
  },
  {
    title: "C Programming",
    provider: "Codechef",
    link: "https://drive.google.com/file/d/1aI2PPzBx4jyV58_mUc60FWbVjRiuqAw5/view?usp=sharing",
  },
  {
    title:"Data Analytics and Process Automation - Alteryx",
    provider:"Eduskills",
    link:"https://drive.google.com/file/d/1exxWMGnzSNy-ZXb4DhJSrUYGXWRQAnnq/view?usp=sharing"
  },
  {
    title:"Bootcamp-Web Dev",
    provider:"Devtown",
    link:"https://drive.google.com/file/d/1SQF7PmA7JobHqiklc_n2VqLX_PM6Ogzq/view?usp=sharing"
  }
];

const Certifications = () => {
  return (
//     <section
//       id="certifications"
//       className="py-20 px-4 md:px-10 lg:px-20 relative"
//     >
//       <h2 className="text-3xl font-extrabold text-center mb-12">
//         🏅 My Certifications
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
//         {certifications.map((cert, index) => (
// <a
//   key={index}
//   href={cert.link}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="relative group w-[90%] sm:w-72 bg-[hsl(var(--card))] text-[hsl(var(--foreground))] p-6 rounded-xl shadow-md border border-transparent transition-transform duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-xl"
//   style={{
//     animation: `float${index % 2 === 0 ? "Up" : "Down"} 4s ease-in-out infinite`,
//   }}
// >
//   <h3 className="text-lg font-semibold">{cert.title}</h3>
//   <p className="text-sm text-[hsl(var(--foreground)/0.8)]">{cert.provider}</p>

//   <a
//     href={cert.link}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
//   >
//     📄 View Certificate
//   </a>
// </a>

//         ))}
//       </div>

//       {/* Floating keyframes */}
//       <style>{`
//         @keyframes floatUp {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-6px); }
//           100% { transform: translateY(0px); }
//         }
//         @keyframes floatDown {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(6px); }
//           100% { transform: translateY(0px); }
//         }
//       `}</style>
//     </section>
 <section
      id="certifications"
      className="py-20 px-4 md:px-10 lg:px-20 relative"
    >
      <h2 className="text-3xl font-extrabold text-center mb-12">
        🏅 My Certifications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="relative group w-[90%] sm:w-72 bg-[hsl(var(--card))] text-[hsl(var(--foreground))] p-6 rounded-xl shadow-md border border-transparent transition-transform duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-xl"
            style={{
              animation: `float${index % 2 === 0 ? "Up" : "Down"} 4s ease-in-out infinite`,
            }}
          >
            <h3 className="text-lg font-semibold">{cert.title}</h3>
            <p className="text-sm text-[hsl(var(--foreground)/0.8)]">
              {cert.provider}
            </p>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              📄 View Certificate
            </a>
          </div>
        ))}
      </div>

      {/* Floating keyframes */}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        @keyframes floatDown {
          0% { transform: translateY(0px); }
          50% { transform: translateY(6px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default Certifications;
