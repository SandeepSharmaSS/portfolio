"use client";

import { motion } from "framer-motion";

import {
  Sparkles,
  Code2,
  Rocket,
  ArrowUpRight,
  Cpu,
  Orbit,
  User2,
} from "lucide-react";

const About = () => {

  const features = [
    {
      icon: <Code2 size={20} />,
      title: "Software Development",
      desc: "Building scalable web applications, enterprise systems and modern digital products.",
    },

    {
      icon: <Orbit size={20} />,
      title: "3D & Interactive UI",
      desc: "Creating immersive Three.js experiences with cinematic frontend interactions.",
    },

    {
      icon: <Rocket size={20} />,
      title: "Performance Focused",
      desc: "Optimized applications with smooth UX, clean architecture and scalable workflows.",
    },

    {
      icon: <Cpu size={20} />,
      title: "Modern Tech Stack",
      desc: "Working across React.js, Angular, React Native, MongoDB and MSSQL ecosystems.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#01030A] py-32"
    >

      {/* TOP GLOW */}
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />

      {/* SIDE GLOW */}
      <div className="absolute left-0 top-1/3 h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-[140px]" />

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

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto max-w-4xl text-center"
        >

          {/* TAG */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm text-blue-300 backdrop-blur-xl">

            <Sparkles size={14} />

            About Me

          </div>

          {/* TITLE */}
          <h2 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">

            Software

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Developer
            </span>

            <br />

            & Creative Problem Solver

          </h2>

          {/* DESC */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">

            I&apos;m Sandeep Sharma, a software developer
            passionate about building scalable applications,
            modern frontend systems and immersive digital
            experiences using cutting-edge technologies.

          </p>

        </motion.div>

        {/* MAIN */}
        <div className="mt-20 grid gap-7 lg:grid-cols-[1fr_1fr]">

          {/* LEFT ABOUT CARD */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
          >

            {/* LIGHT */}
            <div className="absolute -left-10 top-0 h-60 w-60 rounded-full bg-blue-500/10 blur-[120px]" />

            {/* GRID */}
            <div className="absolute inset-0 opacity-[0.05]">

              <div
                className="h-full w-full"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
                  `,
                  backgroundSize: "38px 38px",
                }}
              />

            </div>

            {/* TOP LINE */}
            <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

            <div className="relative z-10">

              {/* ICON */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-300">

                <User2 size={24} />

              </div>

              {/* TITLE */}
              <h3 className="mt-7 text-3xl font-black leading-tight text-white">

                Passionate About Building Modern Software & Digital Experiences.

              </h3>

              {/* DESC */}
              <p className="mt-6 text-base leading-8 text-gray-400">

                Experienced in developing enterprise dashboards,
                HRMS platforms, mobile applications and futuristic
                UI systems with a strong focus on scalability,
                clean architecture and modern software engineering.

              </p>

              {/* STATS */}
              <div className="mt-10 grid grid-cols-3 gap-4">

                {[
                  {
                    number: "25+",
                    label: "Projects",
                  },

                  {
                    number: "Full Stack",
                    label: "Learning",
                  },

                  {
                    number: "3D UI",
                    label: "Exploring",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      y: -4,
                    }}
                    className="rounded-[22px] border border-white/10 bg-black/20 p-4 text-center"
                  >

                    <h4 className="text-xl font-black text-white">

                      {item.number}

                    </h4>

                    <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-gray-400">

                      {item.label}

                    </p>

                  </motion.div>
                ))}

              </div>

            </div>

          </motion.div>

          {/* RIGHT FEATURES */}
          <div className="grid gap-5">

            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -4,
                }}
                className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-2xl"
              >

                {/* GLOW */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* LIGHT */}
                <div className="absolute -right-10 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-[80px]" />

                <div className="relative z-10 flex items-start justify-between gap-5">

                  {/* LEFT */}
                  <div className="flex gap-4">

                    {/* ICON */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-300">

                      {item.icon}

                    </div>

                    {/* CONTENT */}
                    <div>

                      <h3 className="text-xl font-black text-white">

                        {item.title}

                      </h3>

                      <p className="mt-2 max-w-md text-sm leading-7 text-gray-400">

                        {item.desc}

                      </p>

                    </div>

                  </div>

                  {/* ARROW */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">

                    <ArrowUpRight size={16} />

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

export default About;