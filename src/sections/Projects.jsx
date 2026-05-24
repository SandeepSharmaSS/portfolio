"use client";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Sparkles,
  Smartphone,
  Boxes,
  Database,
  Globe,
  Rocket,
  FileText,
} from "lucide-react";

const Projects = () => {

  /* =========================================
     PROJECTS
  ========================================= */

  const projects = [
    {
      icon: <Globe size={24} />,
      category: "React.js Dashboard",
      title: "Life Dashboard",

      desc:
        "Advanced React.js dashboard with analytics, reusable UI systems, dynamic components and performance-focused architecture.",

      stack: [
        "React",
        "Tailwind",
        "Dashboard",
      ],

      link: "#",

      gradient:
        "from-violet-500/20 to-blue-500/10",
    },

    {
      icon: <Database size={24} />,
      category: "Angular HRMS Platform",
      title: "Core-Via HRMS",

      desc:
        "Enterprise HRMS system developed with Angular, MSSQL and scalable frontend architecture for employee management workflows.",

      stack: [
        "Angular",
        "MSSQL",
        "HRMS",
      ],

      link: "#",

      gradient:
        "from-cyan-500/20 to-blue-500/10",
    },

    {
      icon: <Smartphone size={24} />,
      category: "React Native App",
      title:
        "Core-Via Mobile Application",

      desc:
        "Cross-platform mobile application with React Native, optimized UI systems and modern API-driven architecture.",

      stack: [
        "React Native",
        "Mobile",
        "APIs",
      ],

      link: "#",

      gradient:
        "from-fuchsia-500/20 to-violet-500/10",
    },

    {
      icon: <Boxes size={24} />,
      category: "Three.js Experience",
      title:
        "3D Interactive Portfolio",

      desc:
        "Immersive Three.js portfolio experience with cinematic animations, futuristic visuals and premium frontend motion systems.",

      stack: [
        "Three.js",
        "Framer Motion",
        "React",
      ],

      link: "#",

      gradient:
        "from-blue-500/20 to-indigo-500/10",
    },

    {
      icon: <Rocket size={24} />,
      category: "Cloudinary Platform",
      title:
        "Media Upload System",

      desc:
        "Cloudinary-powered media management system with optimized image delivery and scalable backend integrations.",

      stack: [
        "Cloudinary",
        "MongoDB",
        "Node.js",
      ],

      link: "#",

      gradient:
        "from-emerald-500/20 to-cyan-500/10",
    },

    /* =========================================
       NEW PROJECT
    ========================================= */

    {
      icon: <FileText size={24} />,
      category: "React Report System",
      title: "UNIOS Report",

      desc:
        "Modern UNIOS reporting platform built with React.js and Tailwind CSS featuring responsive layouts, dynamic report systems and optimized frontend architecture.",

      stack: [
        "React",
        "Tailwind CSS",
        "Reports",
      ],

      link: "https://unios-report.vercel.app",

      gradient:
        "from-sky-500/20 to-blue-500/10",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#01030A] py-32"
    >

      {/* =========================================
         BACKGROUND LIGHTS
      ========================================= */}

      {/* TOP BLUE LIGHT */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[200px]" />

      {/* LEFT LIGHT */}
      <div className="absolute left-0 top-1/3 h-[320px] w-[320px] rounded-full bg-violet-500/10 blur-[140px]" />

      {/* RIGHT LIGHT */}
      <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[140px]" />

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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#01030A_80%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* =========================================
           HEADER
        ========================================= */}

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
          className="mx-auto max-w-4xl text-center"
        >

          {/* TAG */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm text-blue-300 backdrop-blur-xl">

            <Sparkles size={14} />

            Featured Projects

          </div>

          {/* TITLE */}
          <h2 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">

            Premium

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Software
            </span>

            <br />

            Development Systems

          </h2>

          {/* SEO DESC */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">

            Full stack software projects including React.js dashboards,
            Angular HRMS systems, React Native applications,
            Three.js experiences and scalable frontend systems
            focused on modern UI engineering and high-performance architecture.

          </p>

        </motion.div>

        {/* =========================================
           BENTO STYLE GRID
        ========================================= */}

        <div className="mt-24 grid gap-6 lg:grid-cols-2">

          {projects.map((project, index) => (

            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay:
                  index * 0.08,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500"
            >

              {/* CARD GLOW */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition duration-700 group-hover:opacity-100`}
              />

              {/* TOP LIGHT */}
              <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

              {/* BLUE GLOW */}
              <div className="absolute -left-10 top-0 h-44 w-44 rounded-full bg-blue-500/10 blur-[90px]" />

              {/* PURPLE GLOW */}
              <div className="absolute bottom-0 right-0 h-36 w-36 rounded-full bg-violet-500/10 blur-[90px]" />

              {/* GRID */}
              <div className="absolute inset-0 opacity-[0.04]">

                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
                    `,
                    backgroundSize:
                      "36px 36px",
                  }}
                />

              </div>

              {/* CONTENT */}
              <div className="relative z-10">

                {/* TOP */}
                <div className="flex items-start justify-between">

                  {/* ICON */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-[24px] border border-blue-500/20 bg-blue-500/10 text-blue-300 backdrop-blur-xl">

                    {project.icon}

                  </div>

                  {/* ARROW */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">

                    <ArrowUpRight size={18} />

                  </div>

                </div>

                {/* CATEGORY */}
                <p className="mt-8 text-[11px] uppercase tracking-[0.35em] text-blue-300">

                  {project.category}

                </p>

                {/* TITLE */}
                <h3 className="mt-4 text-3xl font-black leading-tight text-white">

                  {project.title}

                </h3>

                {/* DESC */}
                <p className="mt-5 text-base leading-8 text-gray-400">

                  {project.desc}

                </p>

                {/* TECH STACK */}
                <div className="mt-8 flex flex-wrap gap-3">

                  {project.stack.map(
                    (item, i) => (
                      <div
                        key={i}
                        className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs text-blue-300 backdrop-blur-xl"
                      >

                        {item}

                      </div>
                    )
                  )}

                </div>

              </div>

            </motion.a>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;