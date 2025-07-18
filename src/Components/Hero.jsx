import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import profile from "../assets/jahid.jpg";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-[#1f1f1f] text-white px-6 md:px-20 py-10">
      <nav className="sticky top-0 left-0 right-0 z-50 px-6 py-4 shadow-md 
                bg-[#1f1f1f]/30 backdrop-blur-md backdrop-saturate-150 
                border-b border-white/10 text-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold">ZahidHossen</h1>

          <ul className="hidden md:flex space-x-8 text-lg">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-gray-400 transition">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://github.com/JahidWebDev"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 text-xl hover:text-gray-400 hidden md:inline"
          >
            <FaGithub />
          </a>

          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <ul className="md:hidden mt-4 space-y-4 px-4 text-lg">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block hover:text-gray-400 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://github.com/JahidWebDev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-400"
              >
                <FaGithub /> GitHub
              </a>
            </li>
          </ul>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white min-h-screen flex items-center justify-between px-5 md:px-19">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h3 className="text-lg text-gray-400">Hello, I’m Zahid Hossen,</h3>
          <h1 className="text-2xl md:text-6xl font-extrabold leading-tight text-slate-100">
            <Typewriter
              words={[
                'MERN Stack Developer',
                'Frontend Developer',
                'Graphic Designer',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-500">I’m a passionate MERN Stack Developer, creative Frontend Developer, and visual storyteller through Graphic Design — turning ideas into powerful digital experiences.</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 pt-4 space-y-4 sm:space-y-0">
            <a
              href="/resume.pdf"
              className="inline-block bg-blue-400 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-center"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-block border border-white hover:bg-white hover:text-black px-6 py-2 rounded-md text-center"
            >
              Contact Me
            </a>
          </div>

        </div>

        {/* Right Content */}
        {/* <div className="hidden md:block flex-1 text-center">
          <img
            src={profile}
            alt="Zahid Hossen"
            className="w-64 h-64 rounded-xl object-cover mx-auto"
          />
        </div> */}
        <div className="hidden md:block flex-1 text-center">
          <img
            src={profile}
            alt="Zahid Hossen"
            className="w-64 h-90 rounded-xl object-cover mx-auto grayscale hover:grayscale-0 transition duration-500"
          />
        </div>

      </section> 
    </div>
  );
};

export default Hero;
