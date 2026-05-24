"use client";

import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#020617]">

      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 opacity-[0.05]">

        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

      </div>

      {/* BLUE GLOW */}
      <div className="absolute h-[220px] w-[220px] rounded-full bg-blue-500/20 blur-[120px]" />

      {/* PURPLE GLOW */}
      <div className="absolute h-[180px] w-[180px] rounded-full bg-violet-500/20 blur-[100px]" />

      {/* CENTER */}
      <div className="relative z-10 flex flex-col items-center">

        {/* LOGO TEXT */}
        <motion.h1
          initial={{
            opacity: 0,
            letterSpacing: "0.5em",
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            letterSpacing: "0.15em",
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="relative text-3xl font-black uppercase tracking-[0.15em] text-white md:text-4xl"
        >

          {/* GLOW */}
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent blur-xl">

            AKHIL

          </span>

          {/* MAIN TEXT */}
          <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">

            AKHIL

          </span>

        </motion.h1>

        {/* TECH LINE */}
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: "120px",
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.1,
          }}
          className="mt-3 h-[2px] rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        />

        {/* SUBTEXT */}
        <motion.p
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-3 text-[10px] uppercase tracking-[0.4em] text-blue-300"
        >

          Initializing Experience

        </motion.p>

      </div>

    </div>
  );
};

export default Loader;