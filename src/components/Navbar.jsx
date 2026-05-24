"use client";

import Image from "next/image";

import { useState } from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

const Navbar = () => {

  const [open, setOpen] =
    useState(false);

  const navItems = [
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  return (
    <>
      {/* =========================================
         CENTER NAVBAR
      ========================================= */}

      <AnimatePresence>

        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -30,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -30,
              scale: 0.9,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="fixed left-1/2 top-5 z-40 -translate-x-1/2"
          >

            <div className="flex items-center gap-3 rounded-full border border-purple-500/20 bg-[#0B1220]/80 px-5 py-1 shadow-[0_0_60px_rgba(168,85,247,0.18)] backdrop-blur-3xl">

              {/* NAV ITEMS */}
              {navItems.map((item) => (

                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() =>
                    setOpen(false)
                  }
                  className="rounded-full px-5 py-2 text-[14px] font-medium text-gray-300 transition-all duration-300 hover:scale-105 hover:bg-purple-500/10 hover:text-white"
                >

                  {item}

                </a>
              ))}

              {/* RESUME BUTTON */}
              <a
                href="/resume.pdf"
                className="ml-1 rounded-full bg-purple-600 px-6 py-2 text-[14px] font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-purple-500"
              >

                Resume

              </a>

            </div>

          </motion.div>
        )}

      </AnimatePresence>

      {/* =========================================
         PROFILE BUTTON
      ========================================= */}

      <div className="fixed right-6 top-5 z-50">

        <button
          onClick={() =>
            setOpen(!open)
          }
          className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#0B1220]/80 text-white shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:scale-105 hover:border-purple-500/40"
        >

          {/* GLOW */}
          <div className="absolute inset-0 rounded-full bg-purple-500/20 opacity-0 blur-xl transition duration-300 group-hover:opacity-100" />

          {/* CLOSE ICON */}
          {open ? (

            <span className="relative z-10 text-lg font-semibold">

              ✕

            </span>

          ) : (

            /* PROFILE IMAGE */
            <div className="relative z-10 h-full w-full">

<Image
  src="https://res.cloudinary.com/dpneh73ru/image/upload/lifedashboard/avatars/mrysub8y3lxskawpggbb.jpg"
  alt="Profile"
  fill
  className="object-cover"
/>

            </div>
          )}

        </button>

      </div>
    </>
  );
};

export default Navbar;