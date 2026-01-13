import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";
import profile from "../assets/jahid-hossen.jpg";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Courses", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/JahidWebDev", label: "GitHub" },
    { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
    { icon: <FaFacebook />, href: "#", label: "Facebook" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#0F0F0F] text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation Bar */}
      <nav className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${darkMode ? 'bg-[#0F0F0F]/90 border-gray-800' : 'bg-white/90 border-gray-200'}`}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
            
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                ZahidHossen
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors duration-300 group ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
                >
                  {link.name}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500"></span>
                </a>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}


<button
  onClick={toggleDarkMode}
  aria-label="Toggle theme"
  className="relative w-16 h-8 rounded-full transition-all duration-300 focus:outline-none"
>
  {/* Track */}
  <div
    className={`absolute inset-0 rounded-full transition-all duration-300 ${
      darkMode ? "bg-[#ededed]" : "bg-[#1c1c1c]"
    }`}
  />


<div
  className={`absolute top-[3px] w-[26px] h-[26px] rounded-full shadow-md transition-all duration-300 ${
    darkMode
      ? "left-[35px] bg-[#1f1f1f]"
      : "left-[3px] bg-white"
  }`}
/>

</button>




              {/* GitHub Button */}
<a
  href="https://github.com/JahidWebDev"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-lg text-white
             dark:bg-white dark:text-gray-900
            bg-gray-800 dark:hover:bg-gray-200
             transition-all duration-300"
>
  <FaGithub className="w-5 h-5" />
  <span className="font-medium">GitHub</span>
</a>



              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className={`md:hidden p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <FaTimes className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
                ) : (
                  <FaBars className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className={`md:hidden mt-4 py-4 border-t transition-colors ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`block py-3 px-4 rounded-lg transition-colors duration-300 ${darkMode ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-100 text-gray-800'}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://github.com/JahidWebDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 py-3 px-4 rounded-lg transition-colors ${darkMode ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-white'}`}
                  onClick={() => setMenuOpen(false)}
                >
                  <FaGithub className="w-5 h-5" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
 <section className="relative py-16 sm:py-20 overflow-hidden">
  <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

    {/* ================= LEFT CONTENT ================= */}
    <div className="space-y-6 sm:space-y-8 lg:space-y-10">

      {/* Badge */}
      <div
        className={`inline-flex items-center justify-center space-x-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full border-2
                    backdrop-blur-sm transition-colors duration-300
                    ${darkMode
                      ? "border-white/60 text-white hover:bg-white hover:text-gray-900"
                      : "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                    }`}
      >
        <div
          className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full animate-pulse 
                      ${darkMode ? "bg-white" : "bg-[#6dd900]"}`}
        ></div>
        <span className="text-xs sm:text-sm font-semibold tracking-wide">
          Frontend / MERN Stack Developer
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
        <span className={darkMode ? "text-white" : "text-gray-900"}>Hello, I'm</span>
        <br />
        <span className={darkMode ? "text-white" : "text-gray-900"}>Zahid Hossen</span>
      </h1>

      {/* Typewriter */}
      <div
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold h-12 sm:h-14 md:h-16
                    ${darkMode ? "text-gray-200" : "text-gray-800"}`}
      >
        <Typewriter
          words={[
            "Frontend Developer",
            "MERN Stack Developer",
            "React Specialist",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </div>

      {/* Description */}
      <p className={`text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
        Frontend & MERN Stack Developer building modern, responsive, and SEO-friendly web apps. Skilled in React, Node.js, Express, and MongoDB, I create fast, clean, and user-friendly digital experiences.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-3 sm:gap-5 pt-3 sm:pt-4">
        <a
          href="/resume.pdf"
          download
          className={`inline-flex items-center space-x-2 sm:space-x-3 px-6 sm:px-9 py-2.5 sm:py-4 rounded-xl text-base sm:text-lg font-semibold
                      transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                      ${darkMode
                        ? "bg-white text-gray-900 hover:bg-gray-200"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                      }`}
        >
          <FaDownload className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Download Resume</span>
        </a>

        <a
          href="#contact"
          className={`inline-flex items-center space-x-2 sm:space-x-3 px-6 sm:px-9 py-2.5 sm:py-4 rounded-xl text-base sm:text-lg font-semibold border-2
                      transition-all duration-300 hover:-translate-y-1
                      ${darkMode
                        ? "border-white text-white hover:bg-white hover:text-gray-900"
                        : "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                      }`}
        >
          <span>Contact Me</span>
          <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
      </div>

      {/* Social Links */}
      <div className="pt-4 sm:pt-6">
        <p className={`mb-2 sm:mb-4 text-sm sm:text-base ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
          Connect with me
        </p>
        <div className="flex space-x-2 sm:space-x-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center
                          transition-all duration-300 hover:-translate-y-1
                          hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:text-white
                          ${darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-800"}`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* ================= RIGHT CONTENT ================= */}
    <div className="relative mt-10 lg:mt-0">
      <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto lg:mx-0">

        {/* Glow */}
        <div className="absolute -inset-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl blur-2xl opacity-20"></div>

        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
          <img
            src={profile}
            alt="Zahid Hossen"
            className="w-full h-auto object-cover"
          />

          {/* Floating Badge */}
          <div
            className={`absolute bottom-4 sm:bottom-8 left-4 sm:left-8 px-4 sm:px-6 py-2 sm:py-3 rounded-xl backdrop-blur-sm shadow-lg
                        ${darkMode ? "bg-gray-900/90" : "bg-white/90"}`}
          >
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center">
                <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <p className={`text-sm sm:text-base ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  GitHub Projects
                </p>
                <p className={`text-lg sm:text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                  50+
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Badge */}
        <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-gradient-to-br from-orange-500 to-pink-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-xl">
          <p className="font-bold text-sm sm:text-lg">3+ Years</p>
          <p className="text-xs sm:text-sm opacity-90">Experience</p>
        </div>
      </div>
    </div>

  </div>
</section>

    </div>
  );
};

export default Hero;