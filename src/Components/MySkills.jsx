import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit } from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiExpress,
  SiGraphql,
  SiPostman,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 size={40} />, name: "HTML", color: "#E34F26" },
  { icon: <FaCss3Alt size={40} />, name: "CSS", color: "#1572B6" },
  { icon: <FaJs size={40} />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <FaReact size={40} />, name: "React", color: "#61DAFB" },
  { icon: <SiMongodb size={40} />, name: "MongoDB", color: "#47A248" },
  { icon: <FaNodeJs size={40} />, name: "Node.js", color: "#339933" },
  { icon: <SiNextdotjs size={40} />, name: "Next.js", color: "#ffffff" },
  { icon: <SiTailwindcss size={40} />, name: "Tailwind CSS", color: "#38B2AC" },
  { icon: <SiBootstrap size={40} />, name: "Bootstrap", color: "#7952B3" },
  { icon: <SiFigma size={40} />, name: "Figma", color: "#F24E1E" },
  { icon: <SiExpress size={40} />, name: "Express.js", color: "#ffffff" },
  { icon: <SiGraphql size={40} />, name: "GraphQL", color: "#E10098" },
  { icon: <FaGit size={40} />, name: "Git", color: "#F05032" },
  { icon: <SiPostman size={40} />, name: "Postman", color: "#FF6C37" },
  { icon: <SiAdobephotoshop size={40} />, name: "Photoshop", color: "#31A8FF" },
  { icon: <SiAdobeillustrator size={40} />, name: "Illustrator", color: "#FF9A00" },
];


const MySkills = () => {
    return (
       <section id="skills" className="bg-[#1f1f1f] text-white px-6 md:px-20 py-16">
  <div className=" min-h-screen mx-auto px-4">
    {/* Title */}
    <div className="flex items-center blue-600 gap-4 mb-12">
      <h2 className="text-5xl font-bold text-blue-400 capitalize whitespace-nowrap">
         skills
      </h2>
      <div className="flex-grow h-[2px] bg-blue-400"></div>
    </div>

    {/* Skill Groups */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Front-End */}
      <div>
        <h3 className="text-2xl font-semibold text-[#cbd5e1] mb-4">🎨 Front-End</h3>
        <ul className="space-y-2 text-gray-300 list-disc list-inside">
          <li>HTML, CSS, Figma</li>
          <li>Concept of Web Design, Flex, Grid</li>
          <li>Bootstrap, TailwindCSS, Ant Design, Shadcn UI</li>
          <li>BEM Methodology, SASS, Materialize</li>
          <li>Animation (GSAP, Framer Motion)</li>
        </ul>
      </div>

      {/* JavaScript & React */}
      <div>
        <h3 className="text-2xl font-semibold text-[#cbd5e1] mb-4">⚛️ JavaScript & React</h3>
        <ul className="space-y-2 text-gray-300 list-disc list-inside">
          <li>JavaScript</li>
          <li>ECMAScript (ES6 & Beyond)</li>
          <li>DOM Manipulation, Async Programming</li>
          <li>React, React Router, Hooks</li>
          <li>Redux, Context API</li>
          <li>Next JS, TypeScript</li>
          <li>React Native (App Development)</li>
        </ul>
      </div>

      {/* Backend & API */}
      <div>
        <h3 className="text-2xl font-semibold text-[#cbd5e1] mb-4">🔐 Backend & API</h3>
        <ul className="space-y-2 text-gray-300 list-disc list-inside">
          <li>Node.js, Express.js</li>
          <li>MongoDB, Template Engine</li>
          <li>REST API, JWT</li>
          <li>Firebase, Firebase Auth</li>
          <li>Socket.IO, GraphQL</li>
        </ul>
      </div>

      {/* Tools & Deployment */}
      <div>
        <h3 className="text-2xl font-semibold text-[#cbd5e1] mb-4">🛠️ Tools & Deployment</h3>
        <ul className="space-y-2 text-gray-300 list-disc list-inside">
          <li>Git, GitHub</li>
          <li>Vercel, Netlify, Render</li>
          <li>Testing</li>
        </ul>
      </div>
    </div>
     <section id="skills" className="bg-[#1a1a1a] text-white mt-10 px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto">
      
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-[#1f1f1f] rounded-xl shadow-md hover:scale-105 transition-transform duration-300 group"
            >
              <div
                className="mb-2 transition-colors duration-300"
                style={{
                  color: skill.color,
                }}
              >
                {skill.icon}
              </div>
              <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
  
</section>

    );
};

export default MySkills;
