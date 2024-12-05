import React from "react";
import welcomImg from "/welcom.png";

function Welcome() {
  return (
    <div
      id="home"
      className="h-screen w-full flex flex-col md:flex-row justify-center items-center gap-10 p-6 md:p-20 bg-gradient-to-r from-[#080220] via-[#120934] to-[#1a093d] text-white"
    >
      <div className="w-full md:w-1/2 flex flex-col justify-start items-center text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-bold text-shadow-md">
          <span className="text-[#0098C4]">Eva</span>Easy
        </h1>
        <h4 className="font-mono mt-2 mb-4 text-base md:text-xl opacity-80">
          Manage your lists faster than you think
        </h4>
        <div className="flex flex-row gap-2 mt-4">
          <button className=" px-4 py-2 bg-transparent border-2 border-white text-lg font-semibold rounded-full hover:bg-white hover:text-[#1a093d] transition duration-300 shadow-lg">
            Get started
          </button>
          <button className="px-4 py-2 bg-transparent border-2 border-white text-lg font-semibold rounded-full hover:bg-white hover:text-[#1a093d] transition duration-300 shadow-lg">
            Get the APP
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-center">
        <img
          src={welcomImg}
          alt="Welcome"
          className="w-48 md:w-72 shadow-lg rounded-lg"
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-[110px] border-none absolute bottom-0"
        preserveAspectRatio="none"
        viewBox="0 0 1280 110"
      >
        <g mask='url("#SvgjsMask1117")' fill="none">
          <path
            d="M 0,80 C 85.4,67.2 256.2,20.4 427,16 C 597.8,11.6 683.4,58.2 854,58 C 1024.6,57.8 1194.8,23.6 1280,15L1280 110L0 110z"
            fill="rgba(0, 152, 196, 1)"
          ></path>
        </g>
        <defs>
          <mask id="SvgjsMask1117">
            <rect width="1280" height="110" fill="#ffffff"></rect>
          </mask>
        </defs>
      </svg>
    </div>
  );
}

export default Welcome;
