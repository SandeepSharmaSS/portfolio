"use client";

import { motion } from "framer-motion";

import {
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#01030A] py-24 sm:py-28"
    >

      {/* BG LIGHT */}
      <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="absolute right-0 top-1/3 h-[260px] w-[260px] rounded-full bg-violet-500/10 blur-[120px]" />

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

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6">

        {/* TOP CONTENT */}
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

          {/* TAG */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs text-blue-300 backdrop-blur-xl sm:text-sm">

            <Sparkles size={14} />

            Let&apos;s Connect

          </div>

          {/* TITLE */}
          <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">

            Have An Idea?

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Let&apos;s Build It.
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8 lg:text-lg">

            I love building modern, scalable and immersive
            web experiences with React.js, Next.js and
            beautiful UI systems. Always open for exciting
            collaborations and creative frontend projects.

          </p>

        </motion.div>

        {/* MAIN CONTAINER */}
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
            duration: 0.9,
          }}
          viewport={{
            once: true,
          }}
          className="relative mt-14 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
        >

          {/* INNER LIGHT */}
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

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

          <div className="relative z-10 flex flex-col items-center justify-between gap-10 px-6 py-10 sm:px-10 sm:py-14 lg:flex-row lg:px-14">

            {/* LEFT */}
            <div className="max-w-2xl">

              <h3 className="text-3xl font-black leading-tight text-white sm:text-4xl">

                Let&apos;s create something
                meaningful together.

              </h3>

              <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">

                Whether you need a modern frontend,
                interactive UI, responsive website or
                full React.js experience — I&apos;m always
                interested in working on impactful
                products and innovative ideas.

              </p>

              {/* EMAIL */}
              <a
                href="mailto:sandeep20ryan@gmail.com"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-3 text-sm font-medium text-blue-300 transition duration-300 hover:scale-105 hover:bg-blue-500/20"
              >

                sandeep20ryan@gmail.com

                <ArrowUpRight size={18} />

              </a>

            </div>

            {/* RIGHT SOCIALS */}
            <div className="flex w-full max-w-md flex-col gap-4">

              {/* LINKEDIN */}
              <motion.a
                whileHover={{
                  x: 6,
                }}
                href="https://www.linkedin.com/in/sandeep-sharma-6a4435349"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-[26px] border border-white/10 bg-black/20 p-5 transition duration-300 hover:border-blue-500/20 hover:bg-blue-500/5"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-2xl text-blue-300">

                    <FaLinkedin />

                  </div>

                  <div>

                    <h4 className="text-lg font-bold text-white">
                      LinkedIn
                    </h4>

                    <p className="text-sm text-gray-400">
                      Connect professionally
                    </p>

                  </div>

                </div>

                <ArrowUpRight
                  size={20}
                  className="text-white transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />

              </motion.a>

              {/* GITHUB */}
              <motion.a
                whileHover={{
                  x: 6,
                }}
                href="https://github.com/SandeepSharmaSS"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-[26px] border border-white/10 bg-black/20 p-5 transition duration-300 hover:border-violet-500/20 hover:bg-violet-500/5"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-2xl text-violet-300">

                    <FaGithub />

                  </div>

                  <div>

                    <h4 className="text-lg font-bold text-white">
                      GitHub
                    </h4>

                    <p className="text-sm text-gray-400">
                      Explore my projects
                    </p>

                  </div>

                </div>

                <ArrowUpRight
                  size={20}
                  className="text-white transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />

              </motion.a>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Contact;