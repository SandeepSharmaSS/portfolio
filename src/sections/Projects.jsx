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

  const projects = [
    {
      icon: <Globe size={22} />,
      category: "React.js Dashboard",
      title: "Life Dashboard",
      desc:
        "Advanced React.js dashboard with analytics and reusable UI systems.",
      stack: ["React", "Tailwind", "Dashboard"],
      link: "#",
    },

    {
      icon: <Database size={22} />,
      category: "Angular HRMS Platform",
      title: "Core-Via HRMS",
      desc:
        "Enterprise HRMS platform with scalable frontend architecture.",
      stack: ["Angular", "MSSQL", "HRMS"],
      link: "#",
    },

    {
      icon: <Smartphone size={22} />,
      category: "React Native App",
      title: "Core-Via Mobile",
      desc:
        "Cross-platform mobile application with optimized UI systems.",
      stack: ["React Native", "Mobile", "APIs"],
      link: "#",
    },

    {
      icon: <Boxes size={22} />,
      category: "Three.js Experience",
      title: "3D Portfolio",
      desc:
        "Interactive Three.js portfolio with immersive animations.",
      stack: ["Three.js", "Framer Motion", "React"],
      link: "#",
    },

    {
      icon: <Rocket size={22} />,
      category: "Cloudinary Platform",
      title: "Media Upload System",
      desc:
        "Cloudinary-powered media management platform with scalable backend.",
      stack: ["Cloudinary", "MongoDB", "Node.js"],
      link: "#",
    },

    {
      icon: <FileText size={22} />,
      category: "React Report System",
      title: "UNIOS Report",
      desc:
        "Modern reporting platform built with React.js and Tailwind CSS.",
      stack: ["React", "Tailwind", "Reports"],
      link: "https://unios-report.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#01030A] py-20 sm:py-28"
    >

      {/* BG LIGHT */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03]">

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

      {/* ONLY RESPONSIVE FIXES */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">

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
          className="text-center"
        >

          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-[10px] text-blue-300 backdrop-blur-xl sm:text-sm">

            <Sparkles size={14} className="shrink-0" />

            <span className="truncate">
              Featured Projects
            </span>

          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">

            Selected

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Work
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl px-1 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8 lg:text-lg">

            Frontend systems, mobile applications,
            dashboards and immersive digital experiences
            built with scalable technologies and modern UI engineering.

          </p>

        </motion.div>

        {/* TIMELINE */}
        <div className="relative mt-16 sm:mt-20">

          {/* VERTICAL LINE */}
          <div className="absolute left-[18px] top-0 h-full w-[1px] bg-gradient-to-b from-blue-500/40 via-violet-500/30 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="flex flex-col gap-14 sm:gap-20">

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
                  duration: 0.6,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                className={`relative flex w-full flex-col gap-6 sm:gap-0 ${
                  index % 2 === 0
                    ? "sm:flex-row"
                    : "sm:flex-row-reverse"
                } items-start sm:items-center`}
              >

                {/* DOT */}
                <div className="absolute left-[6px] top-1 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-blue-500/30 bg-[#01030A] sm:left-1/2 sm:-translate-x-1/2">

                  <div className="h-2.5 w-2.5 rounded-full bg-blue-400" />

                </div>

                {/* CONTENT */}
                <div className="ml-12 w-[calc(100%-3rem)] sm:ml-0 sm:w-[45%]">

                  <motion.div
                    whileHover={{
                      x:
                        index % 2 === 0
                          ? 8
                          : -8,
                    }}
                    className="group w-full"
                  >

                    {/* CATEGORY */}
                    <p className="break-words text-[10px] uppercase tracking-[0.28em] text-blue-300 sm:text-[11px] sm:tracking-[0.35em]">

                      {project.category}

                    </p>

                    {/* TITLE */}
                    <div className="mt-3 flex w-full items-center gap-3">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-300 sm:h-12 sm:w-12">

                        {project.icon}

                      </div>

                      <h3 className="break-words text-xl font-black leading-tight text-white sm:text-3xl">

                        {project.title}

                      </h3>

                    </div>

                    {/* DESC */}
                    <p className="mt-5 break-words text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">

                      {project.desc}

                    </p>

                    {/* STACK */}
                    <div className="mt-6 flex flex-wrap gap-2 overflow-hidden">

                      {project.stack.map((item, i) => (
                        <span
                          key={i}
                          className="break-all text-xs text-gray-500"
                        >

                          #{item}

                        </span>
                      ))}

                    </div>

                    {/* LINK */}
                    <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-white">

                      View Project

                      <ArrowUpRight
                        size={16}
                        className="shrink-0 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />

                    </div>

                  </motion.div>

                </div>

              </motion.a>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Projects;