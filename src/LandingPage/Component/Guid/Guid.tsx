import React from "react";
import "./Guid.css";
export default function Guid() {
  return (
    <section
      id="guid"
      className="h-[100vh] w-full bg-[#0098C4] flex flex-col gap-y-10 md:gap-y-32 justify-center items-center px-10 md:px-20"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-shadow-md text-center text-white capitalize">
        How to use EvaEasy
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <iframe
          className="mx-5 w-full h-[200px] md:w-1/2 md:h-[350px] border-4 rounded-xl border-black"
          src="https://www.youtube.com/embed/p_di4Zn4wz4?si=HALuihmh6GNMRDkg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <p className="w-full md:w-1/2 md:px-5 text-white font-medium text-2xl">
          Learn how to use the platform so you can create or upload your lists,
          modify them, and use the functions you want to calculate your
          evaluation.
        </p>
      </div>
    </section>
  );
}
