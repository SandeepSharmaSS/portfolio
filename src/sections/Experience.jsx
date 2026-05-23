"use client";

import { motion } from "framer-motion";

import {
  Sparkles,
  BriefcaseBusiness,
  ArrowUpRight,
  Calendar,
  Building2,
} from "lucide-react";

const Experience = () => {

  const experiences = [
    {
      role: "Frontend & Backend Developer",
      company: "Core-Via",
      duration: "2024 — Present",
      type: "Full Stack Development",

      desc: `
        Developing scalable frontend systems, enterprise dashboards,
        HRMS platforms and backend architectures using React,
        Node.js, Express.js and modern JavaScript ecosystems.
        Working with CommonJS and ES Modules based application
        structures while building secure APIs, scalable systems
        and performance-focused software solutions.
      `,

      tech: [
        "React.js",
        "Angular",
        "JavaScript",
        "Node.js",
        "Express.js",
        "REST APIs",
        "CommonJS",
        "ES Modules",
        "MSSQL",
        "MongoDB",
      ],

      gradient:
        "from-violet-500/20 to-blue-500/10",
    },

    {
      role: "React Native Developer",
      company: "Core-Via Mobile Team",
      duration: "2024 — Present",
      type: "Mobile Development",

      desc: `
        Building cross-platform React Native applications with
        optimized mobile UI systems, API integrations and
        scalable application architecture.
      `,

      tech: [
        "React Native",
        "APIs",
        "Mobile UI",
        "JavaScript",
      ],

      gradient:
        "from-cyan-500/20 to-blue-500/10",
    },

    {
      role: "3D Frontend Developer",
      company: "Personal & Experimental Projects",
      duration: "2025 — Present",
      type: "Creative Development",

      desc: `
        Exploring immersive Three.js experiences, futuristic motion
        systems, cinematic interfaces and interactive 3D web
        environments with performance-focused rendering.
      `,

      tech: [
        "Three.js",
        "Framer Motion",
        "React",
        "GSAP",
      ],

      gradient:
        "from-fuchsia-500/20 to-violet-500/10",
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#01030A] py-32"
    >

      {/* TOP GLOW */}
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />

      {/* SIDE GLOW */}
      <div className="absolute right-0 top-1/3 h-[320px] w-[320px] rounded-full bg-violet-500/10 blur-[150px]" />

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

      {/* DARK OVERLAY */}
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
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm text-blue-300 backdrop-blur-xl">

            <Sparkles size={14} />

            Work Experience

          </div>

          {/* TITLE */}
          <h2 className="text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl">

            Professional

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Experience
            </span>

          </h2>

          {/* DESC */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">

            Full stack software development experience building
            scalable frontend systems, backend architectures,
            enterprise dashboards, APIs, mobile applications
            and immersive 3D interfaces using modern web
            technologies and performance-driven architecture.

          </p>

        </motion.div>

        {/* EXPERIENCE LIST */}
        <div className="relative mt-24">

          {/* CENTER LINE */}
          <div className="absolute left-[24px] top-0 h-full w-[1px] bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-transparent md:left-1/2" />

          <div className="space-y-12">

            {experiences.map((item, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                className={`relative flex flex-col gap-8 md:flex-row ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >

                {/* TIMELINE DOT */}
                <div className="absolute left-[15px] top-8 z-20 flex h-5 w-5 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/20 backdrop-blur-xl md:left-1/2 md:-translate-x-1/2">

                  <div className="h-2 w-2 rounded-full bg-blue-400" />

                </div>

                {/* CARD */}
                <div className="w-full md:w-1/2">

                  <motion.div
                    whileHover={{
                      y: -6,
                    }}
                    className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-2xl"
                  >

                    {/* GLOW */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition duration-500 group-hover:opacity-100`}
                    />

                    {/* BLUE LIGHT */}
                    <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-blue-500/20 blur-[90px]" />

                    {/* GRID */}
                    <div className="absolute inset-0 opacity-[0.05]">

                      <div
                        className="h-full w-full"
                        style={{
                          backgroundImage: `
                            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
                          `,
                          backgroundSize: "34px 34px",
                        }}
                      />

                    </div>

                    {/* TOP LIGHT LINE */}
                    <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

                    <div className="relative z-10">

                      {/* TOP */}
                      <div className="flex items-start justify-between">

                        {/* ICON */}
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-300">

                          <BriefcaseBusiness size={24} />

                        </div>

                        {/* ARROW */}
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">

                          <ArrowUpRight size={16} />

                        </div>

                      </div>

                      {/* ROLE */}
                      <h3 className="mt-6 text-3xl font-black leading-tight text-white">

                        {item.role}

                      </h3>

                      {/* COMPANY */}
                      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-400">

                        <div className="flex items-center gap-2">

                          <Building2 size={15} />

                          {item.company}

                        </div>

                        <div className="flex items-center gap-2">

                          <Calendar size={15} />

                          {item.duration}

                        </div>

                      </div>

                      {/* TYPE */}
                      <div className="mt-5 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-blue-300">

                        {item.type}

                      </div>

                      {/* DESC */}
                      <p className="mt-6 leading-8 text-gray-400">

                        {item.desc}

                      </p>

                      {/* STACK */}
                      <div className="mt-7 flex flex-wrap gap-3">

                        {item.tech.map((tech, i) => (
                          <div
                            key={i}
                            className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs text-blue-300"
                          >

                            {tech}

                          </div>
                        ))}

                      </div>

                    </div>

                  </motion.div>

                </div>

                {/* EMPTY SPACE */}
                <div className="hidden md:block md:w-1/2" />

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Experience;