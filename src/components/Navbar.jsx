"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  return (
    <>
      {/* CENTER NAVBAR */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -40,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -40,
              scale: 0.8,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            className="fixed left-1/2 top-7 z-40 -translate-x-1/2"
          >
            <div className="flex items-center gap-4 rounded-full border border-purple-500/20 bg-[#0B1220]/80 px-8 py-5 shadow-[0_0_60px_rgba(168,85,247,0.18)] backdrop-blur-3xl">
              
              {/* NAV ITEMS */}
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="rounded-full px-6 py-3 text-[15px] font-medium text-gray-300 transition-all duration-300 hover:bg-purple-500/10 hover:text-white hover:scale-105"
                >
                  {item}
                </a>
              ))}

              {/* RESUME BUTTON */}
              <a
                href="/resume.pdf"
                className="ml-2 rounded-full bg-purple-600 px-7 py-3 text-[15px] font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-purple-500"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PROFILE BUTTON */}
      <div className="fixed right-8 top-8 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="group relative flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-[#0B1220]/80 text-xl font-semibold text-white shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:scale-110 hover:border-purple-500/40"
        >
          {/* GLOW EFFECT */}
          <div className="absolute inset-0 rounded-full bg-purple-500/20 opacity-0 blur-xl transition duration-300 group-hover:opacity-100" />

          {/* TEXT */}
          <span className="relative z-10">
            {open ? "✕" : "A"}
          </span>
        </button>
      </div>
    </>
  );
};

export default Navbar;