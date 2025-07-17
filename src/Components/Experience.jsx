import React from "react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Creative IT Institute",
    duration: "Jun 16, 2023 – Dec 16, 2023",
    achievements: [
      "Built responsive interfaces using React.js and Tailwind CSS",
      "Created UI components and ensured pixel-perfect designs",
      "Collaborated with mentors and teams to meet client needs",
    ],
  },
  {
    role: "MERN Stack Developer",
    company: "Creative IT Institute",
    duration: "Jan 8, 2024 – Jun 8, 2024",
    achievements: [
      "Developed full-stack web applications using MongoDB, Express, React, and Node.js",
      "Built secure RESTful APIs and integrated backend services",
      "Completed capstone project simulating real-world product launch",
    ],
  },
  {
    role: "Graphic Designer",
    company: "Freelance",
    duration: "2019 – Present",
    achievements: [
      "Designed logos, posters, and web UI for 20+ clients",
      "Used Figma, Photoshop, and Illustrator for visual storytelling",
      "Worked with developers to implement designs into live apps",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#121212] text-white px-6 md:px-20 py-20">
     <div className="flex items-center gap-4 mb-12">
      <h2 className="text-5xl font-bold text-blue-400 capitalize whitespace-nowrap">
        Experience
      </h2>
      <div className="flex-grow h-[2px] bg-blue-400"></div>
    </div>
      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-[#1e1e1e] p-6 rounded-lg shadow-md">
            <div className="flex justify-between flex-wrap gap-2 mb-2">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <span className="text-sm text-gray-400">{exp.duration}</span>
            </div>
            <p className="text-gray-300 mb-2 italic">{exp.company}</p>
            <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
              {exp.achievements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
