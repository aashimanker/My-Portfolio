import React from "react";

const internships = [
  {
    role: "Mern Stack Intern",
    company: "Codesprint",
    duration: "Oct 2023 - Dec 2023",
    description:
      "I have developed foundational web development skills encompassing HTML, CSS, JavaScript, and Bootstrap, laying a robust groundwork for my journey. Mastering advanced concepts within the MERN stack (MongoDB, Express.js, React, Node.js) has further fortified my backend and frontend development capabilities. Proficient in using GitHub for version control and collaboration, I have seamlessly integrated APIs to create innovative frontend React websites, showcasing my ability to deliver dynamic and responsive user experiences.",
    certificateUrl:"https://drive.google.com/file/d/1XL6JvSTLPG_fTkzJ8XizpHO33YdSNXpF/view?usp=sharing"
  },
  {
    role: "Tech Intern",
    company: "Bytexl",
    duration: "June 2023 - Jul 2023",
    description:
      "I strengthened my understanding of core computer science fundamentals, which provided a solid theoretical base for problem-solving and software development. Alongside this, I developed foundational skills in web development, enabling me to build interactive and responsive user interfaces. Additionally, I acquired practical knowledge in database management using MongoDB, enhancing my ability to design and manage data-driven applications efficiently.",
    certificateUrl:"https://drive.google.com/file/d/1I5pdUxW4y1QccSGy_2-8ZUz2WB_iWitc/view?usp=sharing"    
  },
  
];

const WorkSection = () => {
  return (
    <section
      id="internships"
      className="py-20 px-4 md:px-10 lg:px-20 relative overflow-hidden"
    >
      <h2 className="text-3xl font-extrabold text-center mb-16">💼 Internships</h2>

      {/* Vertical timeline line */}
      <div className="relative max-w-4xl mx-auto before:absolute before:left-5 before:top-0 before:bottom-0 before:w-1 before:bg-gray-300 dark:before:bg-gray-700">

        {internships.map((intern, index) => (
          <div
            key={index}
            className="relative pl-12 mb-12 flex items-start gap-6"
          >
            {/* Timeline dot */}
            <div className="absolute left-2 top-3 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 z-10" />

            {/* Card */}
            <div className="w-full bg-[hsl(var(--card))] text-[hsl(var(--foreground))] rounded-xl p-6 shadow-md hover:shadow-xl transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold">{intern.role}</h3>
              <p className="text-sm text-[hsl(var(--foreground)/0.8)]">{intern.company} • {intern.duration}</p>
              <p className="mt-2 text-[hsl(var(--foreground)/0.9)]">{intern.description}</p>
              
              {intern.certificateUrl && (
  <a
    href={intern.certificateUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-4 text-sm text-blue-600 hover:underline font-medium"
  >
    📄 View Certificate
  </a>
)}

          </div>  
          </div>
        ))}

      </div>
    </section>
  );
};

export default WorkSection;
