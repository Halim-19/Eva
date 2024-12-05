import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full px-6 md:px-16 lg:px-32 py-16 bg-[#0098C4] text-white"
    >
      <div className="max-w-5xl mx-auto text-center space-y-12">
        {/* Section Header */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
          <p className="text-gray-200 mt-2">
            Have questions or want to connect? Drop us a message or follow us on
            social media!
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white text-black p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-center text-[#0098C4]">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-[#0098C4] text-black"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-[#0098C4] text-black"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-[#0098C4] text-black"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#0098C4] text-white font-medium py-2 rounded hover:bg-[#0078A4] transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-center items-center space-y-6">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex flex-row gap-3 md:flex-col ">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-200 hover:text-blue-400 transition"
              >
                <FaFacebook className="mr-2 text-3xl " />
                Facebook
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-200 hover:text-blue-300 transition"
              >
                <FaX className="mr-2 text-3xl font-extrabold" />X
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-200 hover:text-pink-400 transition"
              >
                <FaInstagram className="mr-2 text-3xl font-extrabold" />
                Instagram
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-200 hover:text-blue-400 transition"
              >
                <FaLinkedin className="mr-2 text-3xl font-extrabold" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
