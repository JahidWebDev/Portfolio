import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vrfxqa8",    
        "template_jftpe7b", 
        form.current,
        "VV_o1hjWQVsWaOnT7"     
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-[#121212] text-white py-20 px-6 md:px-20 flex justify-center"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-blue-400 mb-12 text-left">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info + Socials */}
          <div className="space-y-6 text-left text-gray-300">
            <p className="text-lg font-medium">You can also reach me directly:</p>

            <div className="space-y-2">
              <p className="flex items-center gap-2 hover:text-white transition">
                <FaEnvelope className="text-blue-400" /> webdeveloper2324@gmail.com
              </p>
              <p className="flex items-center gap-2 hover:text-white transition">
                <FaPhone className="text-blue-400" /> 01777169849
              </p>
            </div>

            <div className="mt-6">
              <p className="mb-2 text-sm uppercase tracking-wide text-gray-400">
                Follow Me
              </p>
              <div className="flex gap-4 text-xl">
                <a
                  href="https://github.com/JahidWebDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-blue-400" />
                </a>
                
                <a
                  href="https://www.linkedin.com/in/jahid227mernfullstackdeveloperbd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-blue-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 rounded bg-[#1e1e1e] border border-gray-600 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 rounded bg-[#1e1e1e] border border-gray-600 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full px-4 py-2 rounded bg-[#1e1e1e] border border-gray-600 focus:outline-none focus:border-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded shadow"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
