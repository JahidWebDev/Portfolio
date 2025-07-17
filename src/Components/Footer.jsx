import React from "react";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-gray-400 py-6 px-4 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Zahid Hossen. All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/JahidWebDev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/jahid.sheikh.677380/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin" // Optional: Replace with real link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
