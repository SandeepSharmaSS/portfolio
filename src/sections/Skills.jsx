"use client";

import { motion } from "framer-motion";

import {
  Atom,
  Database,
  Layers3,
  Globe,
  Boxes,
  Smartphone,
  Server,
  Sparkles,
} from "lucide-react";

import TechLinesBackground from "@/components/common/TechLinesBackground";

const Skills = () => {

  const skills = [
    {
      icon: <Atom size={22} />,
      title: "React.js",
      level: "Advanced",
      color: "from-cyan-400 to-blue-500",
    },

    {
      icon: <Smartphone size={22} />,
      title: "React Native",
      level: "Professional",
      color: "from-violet-400 to-fuchsia-500",
    },

    {
      icon: <Layers3 size={22} />,
      title: "Angular",
      level: "Enterprise",
      color: "from-red-400 to-orange-500",
    },

    {
      icon: <Globe size={22} />,
      title: "JavaScript",
      level: "Core Language",
      color: "from-yellow-400 to-amber-500",
    },

    {
      icon: <Database size={22} />,
      title: "MongoDB + MSSQL",
      level: "Database Systems",
      color: "from-emerald-400 to-green-500",
    },

    {
      icon: <Server size={22} />,
      title: "Node.js + Express",
      level: "Backend Development",
      color: "from-sky-400 to-indigo-500",
    },

    {
      icon: <Boxes size={22} />,
      title: "Three.js",
      level: "Creative Development",
      color: "from-violet-400 to-cyan-500",
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#01030A] py-24 sm:py-28"
    >

      {/* BACKGROUND */}
      <TechLinesBackground />

      {/* BG LIGHT */}
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >

          {/* TAG */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs text-blue-300 backdrop-blur-xl sm:text-sm">

            <Sparkles size={14} />

            Technical Skills

          </div>

          {/* TITLE */}
          <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">

            Tech

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Arsenal
            </span>

          </h2>

          {/* DESC */}
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8 lg:text-lg">

            Modern frontend engineering, scalable backend
            architecture and immersive digital experiences
            crafted with high-performance technologies.

          </p>

        </motion.div>

{/* SKILLS STACK */}
<div className="relative mt-20">

  {/* CENTER LINE */}
  <div className="absolute left-5 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-blue-500/30 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

  <div className="space-y-14 sm:space-y-16">

    {skills.map((skill, index) => (

      <motion.div
        key={index}
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: index * 0.05,
        }}
        viewport={{ once: true }}
        className={`relative flex ${
          index % 2 === 0
            ? "sm:justify-start"
            : "sm:justify-end"
        }`}
      >

        {/* DOT */}
        <div className="absolute left-[11px] top-5 z-20 flex h-5 w-5 items-center justify-center rounded-full border border-blue-500/20 bg-[#01030A] sm:left-1/2 sm:-translate-x-1/2">

          <div
            className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
          />

        </div>

        {/* CONTENT */}
        <motion.div
          whileHover={{
            x:
              index % 2 === 0
                ? 8
                : -8,
          }}
          className={`ml-12 w-full sm:ml-0 sm:w-[38%] ${
            index % 2 === 0
              ? "sm:mr-auto sm:pr-24"
              : "sm:ml-auto sm:pl-24"
          }`}
        >

          {/* CATEGORY */}
          <p
            className={`bg-gradient-to-r ${skill.color} bg-clip-text text-[11px] font-semibold uppercase tracking-[0.35em] text-transparent`}
          >

            {skill.level}

          </p>

          {/* MAIN */}
          <div className="mt-4 flex items-center gap-4">

            {/* ICON */}
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${skill.color} text-white shadow-[0_0_30px_rgba(59,130,246,0.25)]`}
            >

              {skill.icon}

            </div>

            {/* TITLE */}
            <div>

              <h3 className="text-2xl font-black text-white sm:text-3xl">

                {skill.title}

              </h3>

              <div className="mt-3 h-[1px] w-28 bg-gradient-to-r from-white/20 to-transparent" />

            </div>

          </div>

        </motion.div>

      </motion.div>
    ))}

  </div>

</div>

      </div>

    </section>
  );
};

export default Skills;