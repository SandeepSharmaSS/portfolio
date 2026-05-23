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

      {/* CINEMATIC OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#020617]/20 to-black/80" />

      {/* TOP LEFT TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute left-14 top-1/2 z-20 max-w-xl -translate-y-1/2"
      >
        <p className="mb-5 text-sm uppercase tracking-[0.5em] text-purple-300">
          Futuristic Creative Developer
        </p>

        <h1 className="text-6xl font-black leading-none text-white md:text-7xl">
          Beyond
          <span className="bg-gradient-to-r from-violet-300 via-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
            {" "}
            Reality
          </span>
        </h1>

        <p className="mt-8 max-w-lg text-lg leading-9 text-gray-300">
          Designing immersive digital worlds with interactive
          3D experiences, cinematic interfaces and futuristic
          frontend engineering.
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
          className="group relative mt-12 overflow-hidden rounded-full border border-purple-500/30 bg-black/40 px-9 py-5 text-white backdrop-blur-2xl"
        >
          {/* GLOW */}
          <span className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/20 to-fuchsia-500/0 opacity-0 transition duration-500 group-hover:opacity-100" />

          <span className="relative z-10 flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.25em]">
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