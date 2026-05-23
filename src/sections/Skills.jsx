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
      icon: <Atom size={24} />,
      title: "React.js",
      level: "Advanced",
      color: "from-cyan-400 to-blue-500",
    },

    {
      icon: <Smartphone size={24} />,
      title: "React Native",
      level: "Professional",
      color: "from-violet-400 to-fuchsia-500",
    },

    {
      icon: <Layers3 size={24} />,
      title: "Angular",
      level: "Enterprise",
      color: "from-red-400 to-orange-500",
    },

    {
      icon: <Globe size={24} />,
      title: "JavaScript",
      level: "Core Language",
      color: "from-yellow-400 to-amber-500",
    },

    {
      icon: <Database size={24} />,
      title: "MongoDB + MSSQL",
      level: "Database Systems",
      color: "from-emerald-400 to-green-500",
    },

    {
      icon: <Server size={24} />,
      title: "Node.js + Express.js",
      level: "Backend Development",
      color: "from-sky-400 to-indigo-500",
    },

    {
      icon: <Boxes size={24} />,
      title: "Three.js",
      level: "Creative Development",
      color: "from-violet-400 to-cyan-500",
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#01030A] py-32"
    >

      {/* BACKGROUND */}
      <TechLinesBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

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
          viewport={{
            once: true,
          }}
          className="mx-auto max-w-4xl text-center"
        >

          {/* TAG */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm text-blue-300 backdrop-blur-xl">

            <Sparkles size={14} />

            Technical Skills

          </div>

          {/* TITLE */}
          <h2 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">

            Technologies

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              {" "}
              I Work With
            </span>

          </h2>

          {/* DESC */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">

            Full stack software development skills focused on scalable frontend systems,
            backend architecture, APIs, databases, mobile applications and immersive
            digital experiences using modern technologies.

          </p>

        </motion.div>

        {/* SKILLS */}
        <div className="relative mt-24">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent lg:block" />

          <div className="space-y-6">

            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                viewport={{
                  once: true,
                }}
                className={`flex ${
                  index % 2 === 0
                    ? "justify-start"
                    : "justify-end"
                }`}
              >

                <div className="group relative w-full overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl lg:w-[48%]">

                  {/* LIGHT */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 blur-3xl transition duration-500 group-hover:opacity-10`}
                  />

                  {/* GRID */}
                  <div className="absolute inset-0 opacity-[0.03]">

                    <div
                      className="h-full w-full"
                      style={{
                        backgroundImage: `
                          linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
                        `,
                        backgroundSize: "32px 32px",
                      }}
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 flex items-center justify-between gap-5">

                    {/* LEFT */}
                    <div className="flex items-center gap-5">

                      {/* ICON */}
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${skill.color} text-white`}
                      >

                        {skill.icon}

                      </div>

                      {/* TEXT */}
                      <div>

                        <h3 className="text-2xl font-black text-white">

                          {skill.title}

                        </h3>

                        <p className="mt-2 text-sm uppercase tracking-[0.22em] text-gray-400">

                          {skill.level}

                        </p>

                      </div>

                    </div>

                    {/* RIGHT LINE */}
                    <div className="hidden h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent md:block" />

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;