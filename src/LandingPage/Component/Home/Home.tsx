import React from "react";
import ChipTabs from "../NavBra/Navbar";
import Welcome from "../Welcome/Welcom";
import Guid from "../Guid/Guid";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";

function Home() {
  return (
    <>
      <ChipTabs />
      <Welcome></Welcome>
      <Guid></Guid>
      <AboutUs></AboutUs>
      <Contact></Contact>

      <footer className=" dark:bg-gray-900 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <h1 className="text-2xl md:text-4xl font-bold text-shadow-md text-white">
                <span className="text-[#0098C4]">Eva</span>Easy
              </h1>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#home" className="hover:underline me-4 md:me-6">
                  Home
                </a>
              </li>
              <li>
                <a href="#guid" className="hover:underline me-4 md:me-6">
                  Guid
                </a>
              </li>
              <li>
                <a href="#aboutUs" className="hover:underline me-4 md:me-6">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#home" className="hover:underline">
              EvaEasy
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default Home;
