"use client";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#01030A] py-6">

      {/* TOP LIGHT */}
      <div className="absolute left-1/2 top-0 h-[1px] w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

      {/* BLUE GLOW */}
      <div className="absolute left-1/2 top-0 h-32 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03]">

        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 md:flex-row">

        {/* LEFT */}
        <div>

          <h3 className="text-xl font-black tracking-tight text-white">

            Sandeep
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Sharma
            </span>

          </h3>

          <p className="mt-1 text-sm text-gray-500">

            Software Developer • React • Three.js

          </p>

        </div>

        {/* SOCIALS */}
        <div className="flex items-center gap-4">

          <a
            href="https://github.com/SandeepSharmaSS"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition duration-300 hover:border-blue-500/20 hover:bg-blue-500/10 hover:text-white"
          >

            <FaGithub className="transition duration-300 group-hover:scale-110" />

          </a>

          <a
            href="http://www.linkedin.com/in/sandeep-sharma-6a4435349"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition duration-300 hover:border-blue-500/20 hover:bg-blue-500/10 hover:text-white"
          >

            <FaLinkedin className="transition duration-300 group-hover:scale-110" />

          </a>

          <a
            href="https://www.instagram.com/trekwith_akhil"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition duration-300 hover:border-pink-500/20 hover:bg-pink-500/10 hover:text-white"
          >

            <FaInstagram className="transition duration-300 group-hover:scale-110" />

          </a>

        </div>

        {/* RIGHT */}
        <p className="text-sm text-gray-500">

          © 2026 Sandeep Sharma. All rights reserved.

        </p>

      </div>

    </footer>
  );
};

export default Footer;