import React from 'react';

const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    <SkillItem
                        imageSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                        altText="HTML"
                        skillName="HTML5"
                    />
                    <SkillItem
                        imageSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                        altText="CSS"
                        skillName="CSS3"
                    />
                    <SkillItem
                        imageSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                        altText="JavaScript"
                        skillName="JavaScript"
                    />
                    <SkillItem
                        imageSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        altText="React"
                        skillName="React.js"
                    />
                    <SkillItem
                        imageSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg
"
                        altText="MongoDB"
                        skillName="MongoDB"
                    />
                    <SkillItem
                        imageSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                        altText="TailwindCSS"
                        skillName="TailwindCSS"
                    />
                    <SkillItem
                        imageSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                        altText="Node.js"
                        skillName="Node.js"
                    />
                    <SkillItem
                        imageSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                        altText="Git"
                        skillName="Git"
                    />
                </div>
            </div>
        </section>
    );
};

// const SkillItem = ({ imageSrc, altText, skillName }) => {
//     return (
//         <div className="flex flex-col items-center p-4 rounded-xl shadow-lg transition transform hover:scale-105 bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-600">
//             <img src={imageSrc} alt={altText} className="w-12 h-12 mb-2" />
//             <span className="text-gray-800 dark:text-gray-300">{skillName}</span>
//         </div>
//     );
// };
const SkillItem = ({ imageSrc, altText, skillName }) => {
    return (
        <div className="flex flex-col items-center p-4 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-md bg-[hsl(var(--card))] text-[hsl(var(--foreground))]">
            <img src={imageSrc} alt={altText} className="w-12 h-12 mb-2" />
            <span>{skillName}</span>
        </div>
    );
};

export default SkillsSection;
