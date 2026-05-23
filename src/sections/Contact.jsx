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
      className="relative overflow-hidden bg-[#01030A] py-32"
    >

      {/* BG LIGHT */}
      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="absolute right-0 top-1/3 h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-[150px]" />

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

            Let&apos;s Connect

          </div>

          {/* TITLE */}
          <h2 className="text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl">

            Let&apos;s Build

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Something
            </span>

            <br />

            Amazing Together

          </h2>

          {/* DESC */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">

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
          className="relative mt-24 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
        >

          {/* LIGHT */}
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

          <div className="relative z-10 grid lg:grid-cols-[0.9fr_1.1fr]">

            {/* LEFT */}
            <div className="border-b border-white/10 p-10 lg:border-b-0 lg:border-r">

              <p className="text-sm uppercase tracking-[0.4em] text-blue-300">
                Contact Information
              </p>

              <h3 className="mt-6 text-4xl font-black leading-tight text-white">

                Let&apos;s create immersive digital experiences.

              </h3>

              {/* EMAIL */}
              <div className="mt-12 space-y-5">

                <motion.a
                  whileHover={{
                    x: 6,
                  }}
                  href="mailto:sandeep20ryan@gmail.com"
                  className="group flex items-center justify-between rounded-[24px] border border-white/10 bg-black/20 p-5 transition duration-300 hover:border-blue-500/20 hover:bg-blue-500/5"
                >

                  <div className="flex items-center gap-5">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-300">

                      <Mail size={22} />

                    </div>

                    <div>

                      <p className="text-sm text-gray-500">
                        Email
                      </p>

                      <h4 className="mt-1 text-lg font-semibold text-white">
                        sandeep20ryan@gmail.com
                      </h4>

                    </div>

                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-white transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                </motion.a>

                {/* PHONE */}
                <motion.a
                  whileHover={{
                    x: 6,
                  }}
                  href="tel:+917562870848"
                  className="group flex items-center justify-between rounded-[24px] border border-white/10 bg-black/20 p-5 transition duration-300 hover:border-blue-500/20 hover:bg-blue-500/5"
                >

                  <div className="flex items-center gap-5">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-300">

                      <Phone size={22} />

                    </div>

                    <div>

                      <p className="text-sm text-gray-500">
                        Phone
                      </p>

                      <h4 className="mt-1 text-lg font-semibold text-white">
                        +91 7562870848
                      </h4>

                    </div>

                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-white transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                </motion.a>

              </div>

            </div>

            {/* RIGHT */}
            <div className="p-10">

              <div className="grid gap-5 sm:grid-cols-2">

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
                      y: -8,
                    }}
                    className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-black/20 p-6"
                  >

                    {/* HOVER GLOW */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition duration-500 group-hover:opacity-100`}
                    />

                    {/* LIGHT */}
                    <div className="absolute -right-8 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-[90px]" />

                    {/* TOP */}
                    <div className="relative z-10 flex items-start justify-between">

                      {/* ICON */}
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-xl text-blue-300">

                        {item.icon}

                      </div>

                      <ArrowUpRight
                        size={17}
                        className="text-white transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />

                    </div>

                    {/* CONTENT */}
                    <div className="relative z-10 mt-10">

                      <h3 className="text-2xl font-black text-white">

                        {item.title}

                      </h3>

                      <p className="mt-3 text-gray-400">

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