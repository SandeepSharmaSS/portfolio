"use client";

import { motion } from "framer-motion";

import {
  Sparkles,
  BriefcaseBusiness,
  ArrowUpRight,
  Calendar,
  Building2,
  MonitorSmartphone,
  ServerCog,
} from "lucide-react";

const Experience = () => {

  const experiences = [
    {
      role: "Full Stack Software Developer",
      company: "Core-Via",
      duration: "2024 — Present",
      type: "Frontend + Backend Engineering",

      desc: `
        Building scalable full stack software solutions with modern
        frontend architectures, secure backend systems and enterprise-grade
        application development. Working across React ecosystems,
        backend APIs, authentication systems, databases and scalable
        software architecture using modern JavaScript technologies.
      `,

      frontend: [
        "React.js",
        "Next.js",
        "Angular",
        "Tailwind CSS",
        "JavaScript",
        "Responsive UI",
      ],

      backend: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Authentication",
        "MongoDB",
        "MSSQL",
        "CommonJS",
        "ES Modules",
      ],

      gradient:
        "from-violet-500/20 to-blue-500/10",
    },

    {
      role: "React Native Developer",
      company: "Core-Via Mobile Team",
      duration: "2024 — Present",
      type: "Cross Platform App Development",

      desc: `
        Developing scalable cross-platform mobile applications with
        optimized UI systems, API integrations and production-focused
        mobile architecture using React Native ecosystems.
      `,

      frontend: [
        "React Native",
        "Mobile UI",
        "JavaScript",
        "Responsive Design",
      ],

      backend: [
        "REST APIs",
        "Firebase",
        "Authentication",
        "Cloud Integration",
      ],

      gradient:
        "from-cyan-500/20 to-blue-500/10",
    },

    {
      role: "3D Frontend Developer",
      company: "Personal & Experimental Projects",
      duration: "2025 — Present",
      type: "Creative Frontend Engineering",

      desc: `
        Creating immersive web experiences, futuristic interfaces,
        cinematic motion systems and interactive 3D frontend
        environments with performance-optimized rendering pipelines.
      `,

      frontend: [
        "Three.js",
        "React",
        "Framer Motion",
        "GSAP",
        "WebGL",
      ],

      backend: [
        "Performance Optimization",
        "Dynamic Rendering",
        "Asset Pipelines",
      ],

      gradient:
        "from-fuchsia-500/20 to-violet-500/10",
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#01030A] py-24"
    >

      {/* TOP GLOW */}
      <div className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[160px]" />

      {/* SIDE GLOW */}
      <div className="absolute right-0 top-1/3 h-[260px] w-[260px] rounded-full bg-violet-500/10 blur-[130px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04]">

        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#01030A_75%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5">

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
          className="mx-auto max-w-3xl text-center"
        >

          {/* TAG */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs text-blue-300 backdrop-blur-xl">

            <Sparkles size={13} />

            Work Experience

          </div>

          {/* TITLE */}
          <h2 className="text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">

            Full Stack

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Experience
            </span>

          </h2>

          {/* DESC */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400">

            Building scalable frontend systems, secure backend
            architectures, enterprise dashboards, APIs,
            cross-platform mobile applications and immersive
            digital experiences with modern software engineering.

          </p>

        </motion.div>

        {/* EXPERIENCE LIST */}
        <div className="relative mt-20">

          {/* CENTER LINE */}
          <div className="absolute left-[20px] top-0 z-0 h-full w-[2px] bg-gradient-to-b from-transparent via-cyan-400/70 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.6)] md:left-1/2" />

          <div className="space-y-10">

            {experiences.map((item, index) => (

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
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                className={`relative flex flex-col gap-6 md:flex-row ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >

                {/* TIMELINE DOT */}
                <div className="absolute left-[12px] top-7 z-30 flex h-4 w-4 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/20 backdrop-blur-xl md:left-1/2 md:-translate-x-1/2">

                  <div className="h-2 w-2 rounded-full bg-blue-400" />

                </div>

                {/* CARD */}
                <div className="w-full md:w-1/2">

                  <motion.div
                    whileHover={{
                      y: -4,
                    }}
                    className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl"
                  >

                    {/* GLOW */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition duration-500 group-hover:opacity-100`}
                    />

                    {/* BLUE LIGHT */}
                    <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-blue-500/20 blur-[80px]" />

                    {/* GRID */}
                    <div className="absolute inset-0 opacity-[0.05]">

                      <div
                        className="h-full w-full"
                        style={{
                          backgroundImage: `
                            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
                          `,
                          backgroundSize: "30px 30px",
                        }}
                      />

                    </div>

                    {/* TOP LIGHT */}
                    <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

                    <div className="relative z-10">

                      {/* TOP */}
                      <div className="flex items-start justify-between">

                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-300">

                          <BriefcaseBusiness size={20} />

                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">

                          <ArrowUpRight size={14} />

                        </div>

                      </div>

                      {/* ROLE */}
                      <h3 className="mt-5 text-2xl font-black leading-tight text-white">

                        {item.role}

                      </h3>

                      {/* COMPANY */}
                      <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-gray-400">

                        <div className="flex items-center gap-2">

                          <Building2 size={14} />

                          {item.company}

                        </div>

                        <div className="flex items-center gap-2">

                          <Calendar size={14} />

                          {item.duration}

                        </div>

                      </div>

                      {/* TYPE */}
                      <div className="mt-4 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-2 text-[10px] uppercase tracking-[0.25em] text-blue-300">

                        {item.type}

                      </div>

                      {/* DESC */}
                      <p className="mt-5 text-sm leading-7 text-gray-400">

                        {item.desc}

                      </p>

                      {/* FRONTEND */}
                      <div className="mt-7">

                        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">

                          <MonitorSmartphone size={14} />

                          Frontend

                        </div>

                        <div className="flex flex-wrap gap-2">

                          {item.frontend.map((tech, i) => (
                            <div
                              key={i}
                              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-[11px] text-cyan-300"
                            >

                              {tech}

                            </div>
                          ))}

                        </div>

                      </div>

                      {/* BACKEND */}
                      <div className="mt-6">

                        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">

                          <ServerCog size={14} />

                          Backend

                        </div>

                        <div className="flex flex-wrap gap-2">

                          {item.backend.map((tech, i) => (
                            <div
                              key={i}
                              className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-2 text-[11px] text-violet-300"
                            >

                              {tech}

                            </div>
                          ))}

                        </div>

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