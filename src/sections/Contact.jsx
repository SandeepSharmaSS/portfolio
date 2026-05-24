"use client";

import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const Contact = () => {

  const socials = [
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      username: "sandeep-sharma",
      link: "http://www.linkedin.com/in/sandeep-sharma-6a4435349",
      gradient: "from-blue-500/20 to-cyan-500/10",
    },

    {
      icon: <FaGithub />,
      title: "GitHub",
      username: "SandeepSharmaSS",
      link: "https://github.com/SandeepSharmaSS",
      gradient: "from-violet-500/20 to-indigo-500/10",
    },

    {
      icon: <FaInstagram />,
      title: "Instagram",
      username: "@trekwith_akhil",
      link: "https://www.instagram.com/trekwith_akhil",
      gradient: "from-pink-500/20 to-fuchsia-500/10",
    },

    {
      icon: <FaFacebookF />,
      title: "Facebook",
      username: "Social Profile",
      link: "https://www.facebook.com/share/1B4ttF6ga9",
      gradient: "from-sky-500/20 to-blue-500/10",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#01030A] py-20 sm:py-24 lg:py-32"
    >

      {/* BG LIGHT */}
      <div className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px] sm:h-[450px] sm:w-[450px] sm:blur-[180px]" />

      <div className="absolute right-0 top-1/3 h-[220px] w-[220px] rounded-full bg-violet-500/10 blur-[120px] sm:h-[300px] sm:w-[300px] sm:blur-[150px]" />

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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">

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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs text-blue-300 backdrop-blur-xl sm:mb-8 sm:px-5 sm:text-sm">

            <Sparkles size={14} />

            Let&apos;s Connect

          </div>

          {/* TITLE */}
          <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">

            Let&apos;s Build

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Something
            </span>

            <br />

            Amazing Together

          </h2>

          {/* DESC */}
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-gray-400 sm:mt-8 sm:text-base sm:leading-8 lg:text-lg lg:leading-9">

            Open for frontend engineering, React.js,
            React Native, Three.js projects and modern
            digital collaborations.

          </p>

        </motion.div>

        {/* MAIN CARD */}
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
          className="relative mt-14 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl sm:mt-20 sm:rounded-[40px]"
        >

          {/* LIGHT */}
          <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-blue-500/10 blur-[100px] sm:h-72 sm:w-72 sm:blur-[120px]" />

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

          <div className="relative z-10 grid lg:grid-cols-[0.9fr_1.1fr]">

            {/* LEFT */}
            <div className="border-b border-white/10 p-5 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">

              <p className="text-xs uppercase tracking-[0.3em] text-blue-300 sm:text-sm sm:tracking-[0.4em]">
                Contact Information
              </p>

              <h3 className="mt-5 text-2xl font-black leading-tight text-white sm:mt-6 sm:text-3xl lg:text-4xl">

                Let&apos;s create immersive digital experiences.

              </h3>

              {/* EMAIL + PHONE */}
              <div className="mt-8 space-y-4 sm:mt-12 sm:space-y-5">

                {/* EMAIL */}
                <motion.a
                  whileHover={{
                    x: 4,
                  }}
                  href="mailto:sandeep20ryan@gmail.com"
                  className="group flex items-center justify-between gap-4 rounded-[22px] border border-white/10 bg-black/20 p-4 transition duration-300 hover:border-blue-500/20 hover:bg-blue-500/5 sm:p-5"
                >

                  <div className="flex min-w-0 items-center gap-4 sm:gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-300 sm:h-14 sm:w-14">

                      <Mail size={20} />

                    </div>

                    <div className="min-w-0">

                      <p className="text-xs text-gray-500 sm:text-sm">
                        Email
                      </p>

                      <h4 className="truncate text-sm font-semibold text-white sm:text-base lg:text-lg">
                        sandeep20ryan@gmail.com
                      </h4>

                    </div>

                  </div>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-white transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                </motion.a>

                {/* PHONE */}
                <motion.a
                  whileHover={{
                    x: 4,
                  }}
                  href="tel:+917562870848"
                  className="group flex items-center justify-between gap-4 rounded-[22px] border border-white/10 bg-black/20 p-4 transition duration-300 hover:border-blue-500/20 hover:bg-blue-500/5 sm:p-5"
                >

                  <div className="flex min-w-0 items-center gap-4 sm:gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-300 sm:h-14 sm:w-14">

                      <Phone size={20} />

                    </div>

                    <div className="min-w-0">

                      <p className="text-xs text-gray-500 sm:text-sm">
                        Phone
                      </p>

                      <h4 className="truncate text-sm font-semibold text-white sm:text-base lg:text-lg">
                        +91 7562870848
                      </h4>

                    </div>

                  </div>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-white transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                </motion.a>

              </div>

            </div>

            {/* RIGHT */}
            <div className="p-5 sm:p-8 lg:p-10">

              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">

                {socials.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
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
                      delay: index * 0.08,
                    }}
                    viewport={{
                      once: true,
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="group relative flex min-h-[220px] flex-col overflow-hidden rounded-[24px] border border-white/10 bg-black/20 p-5 sm:p-6"
                  >

                    {/* HOVER GLOW */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition duration-500 group-hover:opacity-100`}
                    />

                    {/* LIGHT */}
                    <div className="absolute -right-8 top-0 h-28 w-28 rounded-full bg-blue-500/10 blur-[80px]" />

                    {/* TOP */}
                    <div className="relative z-10 flex items-start justify-between">

                      {/* ICON */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-lg text-blue-300 sm:h-14 sm:w-14 sm:text-xl">

                        {item.icon}

                      </div>

                      <ArrowUpRight
                        size={17}
                        className="text-white transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />

                    </div>

                    {/* CONTENT */}
                    <div className="relative z-10 mt-auto pt-10">

                      <h3 className="text-xl font-black text-white sm:text-2xl">

                        {item.title}

                      </h3>

                      <p className="mt-2 break-words text-sm text-gray-400 sm:mt-3 sm:text-base">

                        {item.username}

                      </p>

                    </div>

                  </motion.a>
                ))}

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Contact;