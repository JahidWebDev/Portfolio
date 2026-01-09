import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaBars, FaTimes, FaSun, FaMoon, FaInstagram, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import profile from "../assets/jahid-hossen.jpg";


const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved theme preference or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Courses", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 md:px-20 py-10 transition-colors duration-300">
      <nav className="sticky top-0 left-0 right-0 z-50 px-6 py-4 shadow-md 
                bg-white/80 dark:bg-[#0f0c0c]/80 backdrop-blur-md backdrop-saturate-150 
                border-b border-gray-200 dark:border-white/10 
                text-gray-800 dark:text-white transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold">ZahidHossen</h1>

          <ul className="hidden md:flex space-x-8 text-lg">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="relative group transition-colors duration-300"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 
                              group-hover:w-full transition-all duration-300 ease-out"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle Button */}
         <button
  onClick={toggleDarkMode}
  aria-label="Toggle theme"
  className={`relative flex items-center w-24 h-10 rounded-full border 
  transition-all duration-300
  ${darkMode 
    ? "bg-black border-gray-700" 
    : "bg-white border-gray-300"}`}
>
  {/* Slider */}
  <span
    className={`absolute top-1 left-1 w-8 h-8 rounded-full flex items-center 
    justify-center transition-all duration-300
    ${darkMode 
      ? "translate-x-14 bg-white text-black" 
      : "translate-x-0 bg-black text-white"}`}
  >
    {darkMode ? <FaMoon size={14} /> : <FaSun size={14} />}
  </span>

  {/* Text */}
  <span className="flex justify-between w-full px-3 text-xs font-semibold">
    <span className={darkMode ? "text-gray-500" : "text-black"}>LIGHT</span>
    <span className={darkMode ? "text-white" : "text-gray-400"}>DARK</span>
  </span>
</button>


            <a
              href="https://github.com/JahidWebDev"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-2xl text-orange-500 hover:text-orange-600 
                        dark:hover:text-orange-400 transition-colors duration-300 hidden md:inline"
            >
              <FaGithub />
            </a>

            <div className="md:hidden">
              <button 
                onClick={toggleMenu} 
                aria-label="Toggle Menu"
                className="text-gray-800 dark:text-white 
                          hover:text-orange-500 dark:hover:text-orange-400 
                          transition-colors"
              >
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-white/10">
            <ul className="space-y-4 px-4 text-lg">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block py-2 relative group transition-colors duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 
                                  group-hover:w-full transition-all duration-300 ease-out"></span>
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-gray-200 dark:border-white/10">
                <div className="flex items-center justify-between">
                  <a
                    href="https://github.com/JahidWebDev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 py-2 text-orange-500 
                              hover:text-orange-600 dark:hover:text-orange-400 
                              transition-colors duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaGithub className="text-xl" /> 
                    <span className="relative group">
                      <span className="relative z-10">GitHub</span>
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] 
                                    bg-orange-500 group-hover:w-full 
                                    transition-all duration-300 ease-out"></span>
                    </span>
                  </a>
                  
                  {/* Mobile Dark Mode Toggle */}
                  <button
                    onClick={toggleDarkMode}
                    aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 
                              hover:bg-gray-200 dark:hover:bg-gray-700 
                              transition-colors duration-300"
                  >
                    {darkMode ? (
                      <FaSun className="w-5 h-5 text-yellow-500" />
                    ) : (
                      <FaMoon className="w-5 h-5 text-gray-700" />
                    )}
                  </button>
                </div>
              </li>
            </ul>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white min-h-[calc(100vh-120px)] flex items-center justify-between px-4 md:px-19 transition-colors duration-300">
        {/* Left Content */}
        <div className="flex-2 space-y-6">
          <div className="md:ml-28">
            <h3 className="text-lg text-gray-600 dark:text-gray-400">Hello, I'm Zahid Hossen,</h3>
          <h1 className="text-[34px] md:text-6xl font-extrabold leading-tight text-gray-800 dark:text-slate-100">
  <Typewriter
    words={[
      'Frontend Developer',
      'MERN Stack Developer',
    ]}
    loop={0}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1200}
  />
</h1>

            <p className="mt-4 text-[14px] md:text-xl text-gray-600 dark:text-gray-400">
              I'm a passionate MERN Stack Developer, creative Frontend Developer, and visual storyteller through Graphic Design — turning ideas into powerful digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 pt-4 space-y-4 sm:space-y-0">
            <a
  href="/resume.pdf"
  download
  className="
    inline-block px-6 py-3 rounded-md font-medium text-center
    transition-all duration-300
    bg-black text-white hover:bg-gray-800
    dark:bg-white dark:text-black dark:hover:bg-gray-200
  "
>
  Download Resume
</a>

              <a
                href="#contact"
                className="inline-block border border-gray-800 dark:border-gray-300 text-gray-800 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-300 hover:text-white dark:hover:text-gray-900 px-6 py-3 rounded-md text-center transition-colors duration-300 font-medium"
              >
                Contact Me
              </a>
              
            </div>
            
          </div>

        </div>


        {/* Right Content - Profile Image */}
        <div className="hidden md:block transform rotate-right-100 flex-1 text-center">
          <div className="relative w-64 h-90 mx-auto group">
            <img
              src={profile}
              alt="Zahid Hossen"
              className="w-full h-full rounded-xl object-cover transition-all duration-500 group-hover:grayscale-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;