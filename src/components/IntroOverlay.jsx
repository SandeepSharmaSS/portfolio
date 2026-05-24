"use client";

import { motion } from "framer-motion";

import IntroScene from "@/canvas/IntroScene";

const IntroOverlay = ({ onEnter }) => {

  return (
    <section className="fixed inset-0 z-[999] overflow-hidden bg-[#020617]">

      {/* 3D WORLD */}
      <div className="absolute inset-0">

        <IntroScene />

      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#020617]/30 to-black/90" />

      {/* SIDE SHADOW */}
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-black/80 via-black/30 to-transparent sm:w-[70%]" />

      {/* CONTENT */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        className="absolute left-0 top-1/2 z-20 w-full -translate-y-1/2 px-6 sm:px-10 lg:left-14 lg:max-w-2xl lg:px-0"
      >

        {/* TAG */}
        <p className="mb-4 text-[10px] uppercase tracking-[0.45em] text-purple-300 sm:mb-5 sm:text-xs md:text-sm">

          Futuristic Creative Developer

        </p>

        {/* HEADING */}
        <h1 className="text-4xl font-black leading-none text-white sm:text-5xl md:text-6xl lg:text-7xl">

          Beyond

          <span className="bg-gradient-to-r from-violet-300 via-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
            {" "}
            Reality
          </span>

        </h1>

        {/* DESC */}
        <p className="mt-6 max-w-xl text-sm leading-7 text-gray-300 sm:mt-8 sm:text-base sm:leading-8 md:text-lg md:leading-9">

          Designing immersive digital worlds with
          interactive 3D experiences, cinematic
          interfaces and futuristic frontend
          engineering.

        </p>

        {/* BUTTON */}
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.96,
          }}
          onClick={onEnter}
          className="group relative mt-8 overflow-hidden rounded-full border border-purple-500/30 bg-black/40 px-6 py-4 text-white backdrop-blur-2xl transition duration-300 sm:mt-10 sm:px-8 sm:py-5"
        >

          {/* BUTTON GLOW */}
          <span className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/20 to-fuchsia-500/0 opacity-0 transition duration-500 group-hover:opacity-100" />

          {/* TEXT */}
          <span className="relative z-10 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] sm:gap-4 sm:text-sm">

            Enter The World

            <span className="transition-transform duration-300 group-hover:translate-x-1">

              →

            </span>

          </span>

        </motion.button>

      </motion.div>

    </section>
  );
};

export default IntroOverlay;