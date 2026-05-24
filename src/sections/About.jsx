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
  Layers3,
  ShieldCheck,
  MonitorSmartphone,
  Database,
} from "lucide-react";

const About = () => {

  /* =========================================
     FEATURES
  ========================================= */

  const features = [
    {
      icon: <Code2 size={20} />,
      title: "Frontend Engineering",

      desc:
        "Building scalable React.js, Next.js and Angular applications with responsive UI systems and modern frontend architecture.",
    },

    {
      icon: <Database size={20} />,
      title: "Backend Development",

      desc:
        "Developing secure APIs, scalable backend systems and enterprise-grade architectures using Node.js and databases.",
    },

    {
      icon: <Orbit size={20} />,
      title: "3D & Interactive UI",

      desc:
        "Creating immersive Three.js experiences with cinematic animations and futuristic digital interactions.",
    },

    {
      icon: <Rocket size={20} />,
      title: "Performance Focused",

      desc:
        "Optimized applications with clean architecture, smooth UX and scalable production-ready workflows.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#01030A] py-32"
    >

      {/* =========================================
         BACKGROUND LIGHTS
      ========================================= */}

      {/* TOP LIGHT */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[200px]" />

      {/* LEFT LIGHT */}
      <div className="absolute left-0 top-1/3 h-[340px] w-[340px] rounded-full bg-violet-500/10 blur-[150px]" />

      {/* RIGHT LIGHT */}
      <div className="absolute right-0 bottom-0 h-[280px] w-[280px] rounded-full bg-cyan-500/10 blur-[130px]" />

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

            About Me

          </div>

          {/* TITLE */}
          <h2 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">

            Full Stack

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Software
            </span>

            <br />

            Developer & UI Engineer

          </h2>

          {/* SEO DESCRIPTION */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">

            I&apos;m Sandeep Sharma, a full stack software developer
            focused on building scalable web applications,
            enterprise dashboards, backend systems, immersive
            frontend interfaces and modern digital experiences
            using React.js, Next.js, Angular and Node.js ecosystems.

          </p>

        </motion.div>

        {/* =========================================
           MAIN LAYOUT
        ========================================= */}

        <div className="mt-24 grid gap-7 lg:grid-cols-[1.1fr_0.9fr]">

          {/* =========================================
             LEFT SIDE
          ========================================= */}

          <motion.div
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
            }}
            viewport={{
              once: true,
            }}
            className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
          >

            {/* GLOW */}
            <div className="absolute -left-10 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[140px]" />

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

            {/* TOP LIGHT */}
            <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

            <div className="relative z-10">

              {/* PROFILE */}
              <div className="flex items-start justify-between gap-6">

                {/* LEFT */}
                <div>

                  {/* ICON */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-[24px] border border-blue-500/20 bg-blue-500/10 text-blue-300">

                    <User2 size={28} />

                  </div>

                  {/* NAME */}
                  <h3 className="mt-7 text-4xl font-black leading-tight text-white">

                    Sandeep Sharma

                  </h3>

                  {/* ROLE */}
                  <p className="mt-3 text-sm uppercase tracking-[0.35em] text-blue-300">

                    Full Stack Developer

                  </p>

                </div>

                {/* ARROW */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">

                  <ArrowUpRight size={18} />

                </div>

              </div>

              {/* DESCRIPTION */}
              <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400">

                Passionate about building scalable software systems,
                enterprise dashboards, mobile applications and
                futuristic UI experiences with modern frontend
                engineering and scalable backend architectures.

              </p>

              {/* SKILL GRID */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                {[
                  {
                    icon: (
                      <MonitorSmartphone size={18} />
                    ),
                    title: "Frontend Systems",
                    value:
                      "React.js • Next.js • Angular",
                  },

                  {
                    icon: (
                      <Database size={18} />
                    ),
                    title: "Backend Systems",
                    value:
                      "Node.js • APIs • MongoDB",
                  },

                  {
                    icon: (
                      <Layers3 size={18} />
                    ),
                    title: "UI Engineering",
                    value:
                      "Tailwind • Framer Motion",
                  },

                  {
                    icon: (
                      <ShieldCheck size={18} />
                    ),
                    title: "Architecture",
                    value:
                      "Scalable • Clean • Modern",
                  },
                ].map((item, i) => (

                  <motion.div
                    key={i}
                    whileHover={{
                      y: -4,
                    }}
                    className="rounded-[24px] border border-white/10 bg-black/20 p-5"
                  >

                    {/* ICON */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-300">

                      {item.icon}

                    </div>

                    {/* TITLE */}
                    <h4 className="mt-5 text-lg font-black text-white">

                      {item.title}

                    </h4>

                    {/* VALUE */}
                    <p className="mt-2 text-sm leading-7 text-gray-400">

                      {item.value}

                    </p>

                  </motion.div>
                ))}

              </div>

            </div>

          </motion.div>

          {/* =========================================
             RIGHT FEATURES
          ========================================= */}

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
                  delay:
                    index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -4,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl"
              >

                {/* GLOW */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* LIGHT */}
                <div className="absolute -right-10 top-0 h-36 w-36 rounded-full bg-blue-500/10 blur-[90px]" />

                {/* TOP LIGHT */}
                <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

                <div className="relative z-10 flex items-start justify-between gap-5">

                  {/* LEFT */}
                  <div className="flex gap-5">

                    {/* ICON */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] border border-blue-500/20 bg-blue-500/10 text-blue-300">

                      {item.icon}

                    </div>

                    {/* CONTENT */}
                    <div>

                      <h3 className="text-2xl font-black text-white">

                        {item.title}

                      </h3>

                      <p className="mt-3 max-w-md text-sm leading-7 text-gray-400">

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