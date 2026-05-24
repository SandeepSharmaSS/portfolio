"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const HeroScene = dynamic(
  () => import("@/canvas/HeroScene"),
  {
    ssr: false,
    loading: () => null,
  }
);

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#01030A]">

      {/* 3D TECH BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-80">
        <HeroScene />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#01030A_75%)]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center">

        {/* TAG */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm text-blue-300 backdrop-blur-xl"
        >
          Software Developer • Full Stack Engineer • Problem Solver
        </motion.div>

        {/* NAME */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[95px]"
        >
          Sandeep{" "}

          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
            Sharma
          </span>

        </motion.h1>

        {/* TITLE */}
<motion.h2
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.1,
  }}
  className="mt-8 max-w-6xl text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
>

  Building{" "}

  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
    Scalable Software
  </span>

  {" "} & Modern Digital Experiences

</motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg md:text-xl"
        >
          I develop scalable applications, enterprise systems and
          immersive digital experiences with a strong focus on
          clean architecture, performance and modern software engineering.
        </motion.p>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="mt-12"
        >
          <a
            href="#about"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-blue-500/20 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white backdrop-blur-2xl transition-all duration-300 hover:scale-105 hover:border-blue-400/40"
          >

            {/* BUTTON GLOW */}
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-violet-500/0 opacity-0 transition duration-500 group-hover:opacity-100" />

            <span className="relative z-10">
              Explore More
            </span>

            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;