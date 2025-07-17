import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-[#1f1f1f] text-white px-6 md:px-20 py-16">
      {/* Section Title */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-5xl font-bold text-blue-400">About</h2>
        {/* <div className="flex-grow h-[2px] bg-blue-400"></div> */}
      </div>

      {/* Description Text */}
      <p className="text-lg text-gray-300 max-w-4xl mb-20 leading-relaxed">
      I’m a MERN Stack Developer with a passion for creating fast, responsive, and scalable web applications. I specialize in React.js, Node.js, Express, and MongoDB, building both frontend and backend systems with clean, efficient code. I also have a background in graphic design, allowing me to blend functionality with creative UI/UX. Whether developing full-stack projects or crafting visual designs, I focus on performance, usability, and detail. I’m always eager to learn, solve real-world problems, and collaborate on meaningful work. I'm open to freelance projects, full-time roles, and creative tech challenges.
      </p>

      {/* Skills / Experience Cards */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold">Front-End</h3>
          <p className="mt-2 text-gray-400 underline underline-offset-4">
            60+ Hours Experience
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold">Backend</h3>
          <p className="mt-2 text-gray-400 underline underline-offset-4">
            4 Years Experience
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold">Graphics Design</h3>
          <p className="mt-2 text-gray-400 underline underline-offset-4">
            120+ Hours Experience
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default About;
