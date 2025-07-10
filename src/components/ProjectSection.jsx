import React from 'react';

const ProjectSection = () => {
  const projects = [
    {
      title: 'WordWise',
      description:
        'A powerful web app that analyzes written content for readability, sentiment, grammar, and structure. Built with React and APIs, WordWise helps users refine and optimize their writing with intuitive visual feedback and real-time suggestions.',
      image: 'https://raw.githubusercontent.com/aashimanker/images/main/wordwise.png',
      tags: [
        { name: 'React', color: 'bg-blue-100 dark:bg-blue-900', text: 'text-blue-800 dark:text-blue-300' },
        { name: 'Bootstrap', color: 'bg-green-100 dark:bg-green-900', text: 'text-green-800 dark:text-green-300' },
        { name: 'Node Js', color: 'bg-purple-100 dark:bg-purple-900', text: 'text-purple-800 dark:text-purple-300' },
      ],
      link: 'https://github.com/aashimanker/WordWise',
    },
    {
      title: 'AyurMe',
      description:
        'A personalized health and nutrition platform that combines Ayurvedic principles with modern tech. AyurMe features a Dosha Quiz, Nutrition Analyzer, and an Indian Recipes API, all managed through a secure Appwrite backend for real-time insights.',
      image: 'https://raw.githubusercontent.com/aashimanker/images/main/ayurme.png',
      tags: [
        { name: 'React', color: 'bg-purple-100 dark:bg-purple-900', text: 'text-purple-800 dark:text-purple-300' },
        { name: 'Tailwind CSS', color: 'bg-yellow-100 dark:bg-yellow-900', text: 'text-yellow-800 dark:text-yellow-300' },
        { name: 'Appwrite', color: 'bg-green-100 dark:bg-green-900', text: 'text-green-800 dark:text-green-300' },
      ],
      link: 'https://github.com/aashimanker/AyurMe',
    },
    {
      title: 'Queens-Coffee',
      description:
        'A full-stack billing and inventory system for coffee shops, designed to streamline order processing and revenue tracking. Admins can manage products, generate bills instantly, and view detailed earnings summaries in a sleek UI.',
      image: 'https://raw.githubusercontent.com/aashimanker/images/main/coffee.png',
      tags: [
        { name: 'MERN', color: 'bg-indigo-100 dark:bg-indigo-900', text: 'text-indigo-800 dark:text-indigo-300' },
      ],
      link: 'https://github.com/aashimanker/Queens-Coffee',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-transparent dark:bg-transparent transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))]">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-[hsl(var(--foreground)/0.7)]">
            Check out some of my recent work and case studies.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row-reverse bg-[hsl(var(--card))] text-[hsl(var(--foreground))] rounded-lg shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <div className="sm:w-1/2 w-full h-64 sm:h-auto bg-white flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Project Info */}
              <div className="sm:w-1/2 w-full p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-[hsl(var(--foreground)/0.8)] leading-relaxed">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`rounded-full px-3 py-1 text-xs font-medium ${tag.color} ${tag.text}`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  View on GitHub
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
