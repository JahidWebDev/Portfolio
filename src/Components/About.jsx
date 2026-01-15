import React, { useState } from "react";

const About = ({ darkMode = true }) => {
  const [isDarkMode, setIsDarkMode] = useState(darkMode);

  return (
    <section
      id="about"
      className={`relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28 mx-auto max-w-8xl ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
      }`}
      itemScope
      itemType="https://schema.org/Person"
    >


      {/* Glow background - conditionally rendered based on theme */}
      {isDarkMode && (
        <>
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </>
      )}

      {/* Light mode gradient background */}
      {!isDarkMode && (
        <>
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
        </>
      )}

      {/* Container with max-width */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header with semantic HTML */}
        <header className="relative z-10 mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <span className="text-sm font-semibold tracking-wider uppercase mb-2 block">
                <span
                  className={
                    isDarkMode
                      ? "text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full"
                      : "text-blue-600 bg-blue-100 px-3 py-1 rounded-full"
                  }
                >
                  Professional Profile
                </span>
              </span>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                itemProp="name"
              >
                <span
                  className={`bg-gradient-to-r ${
                    isDarkMode
                      ? "from-blue-400 to-purple-500"
                      : "from-blue-600 to-purple-600"
                  } bg-clip-text text-transparent`}
                >
                  About Me
                </span>
              </h1>
              <p
                className={`mt-4 text-xl ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } max-w-3xl`}
                itemProp="description"
              >
                Full-Stack MERN Developer & UI/UX Designer | Passionate about
                creating exceptional digital experiences
              </p>
            </div>

            {/* Call-to-action buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isDarkMode
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 border ${
                  isDarkMode
                    ? "border-gray-700 hover:bg-gray-800 text-white"
                    : "border-gray-300 hover:bg-gray-100 text-gray-800"
                }`}
              >
                View Projects
              </a>
            </div>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="relative z-10 grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left Column - Main Introduction */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <p
                className={`text-lg lg:text-xl leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
                itemProp="description"
              >
                I'm a passionate{" "}
                <span
                  className={`font-bold ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  Full-Stack MERN Developer
                </span>{" "}
                with expertise in building modern, scalable web applications. My
                focus is on creating{" "}
                <span
                  className={`font-semibold ${
                    isDarkMode ? "text-purple-400" : "text-purple-600"
                  }`}
                >
                  high-performance solutions
                </span>{" "}
                using React, Node.js, Express, and MongoDB.
              </p>

              <p
                className={`leading-relaxed ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                With a background in{" "}
                <span className="font-medium">graphic design and UI/UX</span>, I
                bring a unique perspective to development, ensuring that every
                application is not only functional but also visually appealing
                and user-friendly. I believe that exceptional software combines
                technical excellence with thoughtful design.
              </p>

              <div
                className={`p-6 rounded-xl ${
                  isDarkMode
                    ? "bg-gray-800/50 border border-gray-700"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                <h3
                  className={`text-lg font-semibold mb-3 ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  My Philosophy
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Great software solves real problems through clean code,
                  intuitive design, and scalable architecture. I'm committed to
                  continuous learning and staying updated with the latest
                  technologies and best practices.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="pt-6">
              <h3
                className={`text-xl font-semibold mb-6 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Technical Expertise
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "React.js", color: "bg-blue-500/20 text-blue-400" },
                  { name: "Node.js", color: "bg-green-500/20 text-green-400" },
                  { name: "MongoDB", color: "bg-emerald-500/20 text-emerald-400" },
                  { name: "Express.js", color: "bg-gray-500/20 text-gray-400" },
                  { name: "Next.js", color: "bg-black/20 text-black dark:bg-white/20 dark:text-white" },
                  { name: "TypeScript", color: "bg-blue-600/20 text-blue-500" },
                  { name: "Tailwind CSS", color: "bg-cyan-500/20 text-cyan-400" },
                  { name: "UI/UX Design", color: "bg-purple-500/20 text-purple-400" },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className={`px-4 py-3 rounded-lg text-center font-medium transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gray-800/50 hover:bg-gray-800"
                        : "bg-white hover:bg-gray-50 border border-gray-200"
                    }`}
                  >
                    <span className={skill.color.split(" ")[1]}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Timeline & Info Card */}
          <div className="space-y-8">
            {/* Professional Journey Card */}
            <div
              className={`rounded-2xl p-6 space-y-6 shadow-xl ${
                isDarkMode
                  ? "bg-gray-900/70 backdrop-blur-xl border border-gray-800"
                  : "bg-white backdrop-blur-xl border border-gray-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3
                  className={`text-xl font-semibold ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  Journey & Education
                </h3>
                <span
                  className={`text-sm px-3 py-1 rounded-full ${
                    isDarkMode
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  Updated 2025
                </span>
              </div>

           
            </div>

            {/* Quick Stats Card */}
            <div
              className={`rounded-2xl p-6 space-y-6 shadow-xl ${
                isDarkMode
                  ? "bg-gray-900/70 backdrop-blur-xl border border-gray-800"
                  : "bg-white backdrop-blur-xl border border-gray-200"
              }`}
            >
              <h3
                className={`text-xl font-semibold ${
                  isDarkMode ? "text-purple-400" : "text-purple-600"
                }`}
              >
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div
                    className={`text-3xl font-bold mb-1 ${
                      isDarkMode ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    20+
                  </div>
                  <div
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className={`text-3xl font-bold mb-1 ${
                      isDarkMode ? "text-purple-400" : "text-purple-600"
                    }`}
                  >
                    100%
                  </div>
                  <div
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Client Satisfaction
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className={`text-3xl font-bold mb-1 ${
                      isDarkMode ? "text-green-400" : "text-green-600"
                    }`}
                  >
                    3+
                  </div>
                  <div
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className={`text-3xl font-bold mb-1 ${
                      isDarkMode ? "text-cyan-400" : "text-cyan-600"
                    }`}
                  >
                    15+
                  </div>
                  <div
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Technologies Used
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div
              className={`rounded-2xl p-6 text-center ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30"
                  : "bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200"
              }`}
            >
              <h4
                className={`text-lg font-semibold mb-3 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Let's Work Together
              </h4>
              <p
                className={`text-sm mb-4 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Interested in collaborating or have a project in mind?
              </p>
              <a
                href="mailto:hello@example.com"
                className={`inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isDarkMode
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Microdata for SEO */}
      <div itemProp="jobTitle" className="hidden">
        Full Stack MERN Developer
      </div>
      <div itemProp="knowsAbout" className="hidden">
        React.js, Node.js, Express.js, MongoDB, JavaScript, TypeScript, UI/UX Design, Frontend Development, Backend Development
      </div>
    </section>
  );
};

export default About;