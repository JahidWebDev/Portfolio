import React from "react";
import image1 from "../assets/images-1.png";
import image2 from "../assets/images-2.png";
import image3 from "../assets/images-3.png";

const projects = [
  {
    title: "E-Commerce Dashboard",
        image: image1,
    description:
      "A modern admin dashboard for managing products, orders, and users. Built using React, Node.js, and MongoDB. Fully responsive and feature-rich.",
    live: "https://ecom-dashboard.vercel.app",
    github: "https://github.com/JahidWebDev/ecommerceapi",
  },
  {
    title: "Portfolio Website",
        image: image2,
    description:
      "Personal portfolio to showcase projects and skills. Built using React, Tailwind CSS, and deployed with Vercel. Focuses on minimal UX/UI.",
    live: "",
    github: "https://github.com/JahidWebDev/Portfolio",
  },
  {
    title: "Ajency Website",
       image: image3,
    description:
      "A secure and scalable REST API for blog management. Includes JWT auth, CRUD operations, and MongoDB integration.",
    live: "https://my-project-one-puce.vercel.app/",
    github: "https://github.com/JahidWebDev/Ajency-website",
  },
];

const Projects = () => {
  return (
    <section className="bg-[#1f1f1f] text-white px-6 md:px-20 py-20" id="projects">
     <div className="flex items-center gap-4 mb-12">
      <h2 className="text-5xl font-bold text-blue-400 capitalize whitespace-nowrap">
        Projects
      </h2>
      {/* <div className="flex-grow h-[2px] bg-blue-600"></div> */}
    </div>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-blue-500 transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>
            <div className="flex gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Live
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
