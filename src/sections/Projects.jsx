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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  useRef,
  useEffect,
  useState,
} from "react";

const Projects = () => {

  const sliderRef = useRef(null);

  const [isPaused, setIsPaused] =
    useState(false);

  /* =========================================
     PROJECTS
  ========================================= */

  const projects = [
    {
      icon: <Globe size={22} />,
      category: "React.js Dashboard",
      title: "Life Dashboard",
      desc: "Advanced React.js dashboard with analytics, reusable UI systems, dynamic components and performance-focused architecture.",
      stack: ["React", "Dashboard", "Analytics"],
      gradient:
        "from-violet-500/20 to-blue-500/10",
    },

    {
      icon: <Database size={22} />,
      category: "Angular HRMS Platform",
      title: "Core-Via HRMS",
      desc: "Enterprise HRMS system developed with Angular, MSSQL and scalable frontend architecture for employee management workflows.",
      stack: ["Angular", "MSSQL", "HRMS"],
      gradient:
        "from-cyan-500/20 to-blue-500/10",
    },

    {
      icon: <Smartphone size={22} />,
      category: "React Native App",
      title: "Core-Via Mobile Application",
      desc: "Cross-platform mobile application with React Native, optimized UI systems and modern API-driven architecture.",
      stack: ["React Native", "Mobile", "APIs"],
      gradient:
        "from-fuchsia-500/20 to-violet-500/10",
    },

    {
      icon: <Boxes size={22} />,
      category: "Three.js Experience",
      title: "3D Interactive Portfolio",
      desc: "Immersive Three.js portfolio experience with cinematic animations, futuristic visuals and premium frontend motion systems.",
      stack: ["Three.js", "Framer Motion", "React"],
      gradient:
        "from-blue-500/20 to-indigo-500/10",
    },

    {
      icon: <Rocket size={22} />,
      category: "Cloudinary Platform",
      title: "Media Upload System",
      desc: "Cloudinary-powered media management system with optimized image delivery and scalable backend integrations.",
      stack: ["Cloudinary", "MongoDB", "Node.js"],
      gradient:
        "from-emerald-500/20 to-cyan-500/10",
    },
  ];

  /* =========================================
     SMOOTH AUTO SCROLL
  ========================================= */

  useEffect(() => {

    const slider = sliderRef.current;

    if (!slider) return;

    let animationFrame;

    const speed = 0.7;

    const autoScroll = () => {

      if (!isPaused) {

        slider.scrollLeft += speed;

        /* INFINITE LOOP */
        if (
          slider.scrollLeft >=
          slider.scrollWidth -
            slider.clientWidth -
            5
        ) {

          slider.scrollLeft = 0;
        }
      }

      animationFrame =
        requestAnimationFrame(
          autoScroll
        );
    };

    autoScroll();

    return () =>
      cancelAnimationFrame(
        animationFrame
      );

  }, [isPaused]);

  /* =========================================
     MANUAL SCROLL
  ========================================= */

  const scroll = (direction) => {

    if (!sliderRef.current) return;

    const amount = 420;

    sliderRef.current.scrollBy({
      left:
        direction === "left"
          ? -amount
          : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#01030A] py-32"
    >

      {/* TOP BLUE GLOW */}
      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />

      {/* LEFT GLOW */}
      <div className="absolute left-0 top-1/3 h-[320px] w-[320px] rounded-full bg-violet-500/10 blur-[140px]" />

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
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
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
          <h2 className="text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl">

            Real World

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Projects
            </span>

            <br />

            & Modern Systems

          </h2>

          {/* SEO DESC */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">

            React.js dashboard applications, Angular HRMS
            platforms, React Native mobile apps, Three.js
            experiences and cloud-based systems focused on
            performance, scalable frontend engineering and
            immersive digital experiences.

          </p>

        </motion.div>

        {/* TOP CONTROLS */}
        <div className="mt-20 flex items-center justify-between">

          <div>

            <p className="text-sm uppercase tracking-[0.4em] text-blue-300">
              Selected Work
            </p>

            <h3 className="mt-3 text-3xl font-black text-white">
              Interactive Project Carousel
            </h3>

          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-4">

            <button
              onClick={() => scroll("left")}
              className="group relative overflow-hidden rounded-full border border-blue-500/20 bg-blue-500/10 p-3 text-white backdrop-blur-xl transition duration-300 hover:scale-105"
            >

              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-violet-500/0 opacity-0 transition duration-500 group-hover:opacity-100" />

              <span className="relative z-10">
                <ChevronLeft size={20} />
              </span>

            </button>

            <button
              onClick={() => scroll("right")}
              className="group relative overflow-hidden rounded-full border border-blue-500/20 bg-blue-500/10 p-3 text-white backdrop-blur-xl transition duration-300 hover:scale-105"
            >

              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-violet-500/0 opacity-0 transition duration-500 group-hover:opacity-100" />

              <span className="relative z-10">
                <ChevronRight size={20} />
              </span>

            </button>

          </div>

        </div>

        {/* CAROUSEL */}
        <div className="relative mt-10">

          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-[#01030A] via-[#01030A]/90 to-transparent" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-[#01030A] via-[#01030A]/90 to-transparent" />

          <div
            ref={sliderRef}
            onMouseEnter={() =>
              setIsPaused(true)
            }
            onMouseLeave={() =>
              setIsPaused(false)
            }
            className="flex gap-5 overflow-x-auto pb-5 scrollbar-none scroll-smooth"
          >

            {projects.map(
              (project, index) => (
                <motion.article
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
                    duration: 0.7,
                    delay:
                      index * 0.06,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="group relative min-w-[300px] max-w-[300px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-2xl transition-all duration-500"
                >

                  {/* BLUE LIGHT */}
                  <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-blue-500/20 blur-[80px]" />

                  {/* PURPLE LIGHT */}
                  <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-violet-500/10 blur-[70px]" />

                  {/* CARD GLOW */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition duration-500 group-hover:opacity-100`}
                  />

                  {/* GRID */}
                  <div className="absolute inset-0 opacity-[0.05]">

                    <div
                      className="h-full w-full"
                      style={{
                        backgroundImage: `
                          linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
                        `,
                        backgroundSize:
                          "34px 34px",
                      }}
                    />

                  </div>

                  {/* TOP LIGHT LINE */}
                  <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

                  {/* CONTENT */}
                  <div className="relative z-10">

                    {/* TOP */}
                    <div className="flex items-start justify-between">

                      {/* ICON */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-300">

                        {project.icon}

                      </div>

                      {/* ARROW */}
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">

                        <ArrowUpRight size={15} />

                      </div>

                    </div>

                    {/* CATEGORY */}
                    <p className="mt-5 text-[10px] uppercase tracking-[0.35em] text-blue-300">

                      {project.category}

                    </p>

                    {/* TITLE */}
                    <h3 className="mt-3 text-2xl font-black leading-tight text-white">

                      {project.title}

                    </h3>

                    {/* DESC */}
                    <p className="mt-4 text-sm leading-7 text-gray-400">

                      {project.desc}

                    </p>

                    {/* STACK */}
                    <div className="mt-5 flex flex-wrap gap-2">

                      {project.stack.map(
                        (item, i) => (
                          <div
                            key={i}
                            className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-[11px] text-blue-300"
                          >

                            {item}

                          </div>
                        )
                      )}

                    </div>

                  </div>

                </motion.article>
              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Projects;