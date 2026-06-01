"use client";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";

import {
  Mail,
} from "lucide-react";

const Footer = () => {

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10 bg-[#01030A] py-4">

      {/* TOP LIGHT */}
      <div className="absolute left-1/2 top-0 h-[1px] w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

      {/* GLOW */}
      <div className="absolute left-1/2 top-0 h-24 w-[420px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[90px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03]">

        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "38px 38px",
          }}
        />

      </div>

      {/* MAIN */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 px-5 md:flex-row">

        {/* LEFT */}
        <div className="text-center md:text-left">

          <h3 className="text-2xl font-black tracking-tight text-white">

            Sandeep

            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Sharma
            </span>

          </h3>

          <p className="mt-1 text-sm text-gray-500">

           • Software Developer •

          </p>

        </div>

        {/* CENTER */}
        <div className="flex flex-wrap items-center justify-center gap-3">

          {/* PHONE */}
          <a
            href="tel:+917562870848"
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400 transition duration-300 hover:border-violet-500/20 hover:bg-violet-500/10 hover:text-white"
          >

            <FaPhoneAlt className="text-[13px]" />

            +91 7562870848

          </a>

          {/* EMAIL */}
          <a
            href="mailto:sandeep20ryan@gmail.com"
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400 transition duration-300 hover:border-blue-500/20 hover:bg-blue-500/10 hover:text-white"
          >

            <Mail size={15} />

            Gmail

          </a>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          <a
            href="https://github.com/SandeepSharmaSS"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-violet-500/20 hover:bg-violet-500/10 hover:text-white"
          >

            <FaGithub className="text-[17px] transition duration-300 group-hover:scale-110" />

          </a>

          <a
            href="https://www.linkedin.com/in/sandeep-sharma-6a4435349"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-blue-500/10 hover:text-white"
          >

            <FaLinkedin className="text-[17px] transition duration-300 group-hover:scale-110" />

          </a>

          <a
            href="https://www.instagram.com/trekwith_akhil"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-pink-500/20 hover:bg-pink-500/10 hover:text-white"
          >

            <FaInstagram className="text-[17px] transition duration-300 group-hover:scale-110" />

          </a>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="relative z-10 mt-4 border-t border-white/5 pt-4 text-center">

        <p className="text-xs tracking-wide text-gray-500">

          © 2026 Sandeep Sharma. All rights reserved.

        </p>

      </div>

    </footer>
  );
};

export default Footer;