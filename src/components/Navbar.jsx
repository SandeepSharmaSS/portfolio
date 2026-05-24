"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  Menu,
  X,
  Download,
} from "lucide-react";

const Navbar = () => {

  const [open, setOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

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
         SEO / ACCESSIBILITY
      ========================================= */}

      <nav
        aria-label="Main Navigation"
        className="fixed inset-x-0 top-0 z-50"
      />

      {/* =========================================
         CENTER NAVBAR
      ========================================= */}

      <AnimatePresence>

        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -25,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -25,
              scale: 0.95,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="fixed left-1/2 top-4 z-40 w-[92%] max-w-[760px] -translate-x-1/2 sm:top-5"
          >

            <div
              className={`overflow-hidden rounded-[28px] border transition-all duration-300 ${
                scrolled
                  ? "border-purple-500/20 bg-[#060816]/85 shadow-[0_0_60px_rgba(139,92,246,0.18)]"
                  : "border-white/10 bg-[#0B1220]/75"
              } backdrop-blur-3xl`}
            >

              <div className="flex flex-col gap-3 p-3 sm:flex-row sm:items-center sm:justify-between sm:gap-2 sm:px-4 sm:py-3">

                {/* NAV LINKS */}
                <div className="flex flex-wrap items-center justify-center gap-2">

                  {navItems.map((item) => (

                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() =>
                        setOpen(false)
                      }
                      className="rounded-full px-4 py-2 text-[13px] font-medium text-gray-300 transition-all duration-300 hover:scale-105 hover:bg-purple-500/10 hover:text-white sm:px-5 sm:text-[14px]"
                    >

                      {item}

                    </a>
                  ))}

                </div>

                {/* RESUME */}
                <div className="flex justify-center sm:justify-end">

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-5 py-2.5 text-[13px] font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30 sm:px-6 sm:text-[14px]"
                  >

                    Resume

                    <Download
                      size={16}
                      className="transition duration-300 group-hover:translate-y-[1px]"
                    />

                  </a>

                </div>

              </div>

            </div>

          </motion.div>
        )}

      </AnimatePresence>

      {/* =========================================
         PROFILE BUTTON
      ========================================= */}

      <div className="fixed right-3 top-3 z-50 sm:right-5 sm:top-5">

        <button
          aria-label={
            open
              ? "Close Navigation Menu"
              : "Open Navigation Menu"
          }
          onClick={() =>
            setOpen(!open)
          }
          className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#0B1220]/80 text-white shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-300 hover:scale-105 hover:border-purple-500/40 sm:h-12 sm:w-12"
        >

          {/* GLOW */}
          <div className="absolute inset-0 rounded-full bg-purple-500/20 opacity-0 blur-xl transition duration-300 group-hover:opacity-100" />

          {/* ICON / IMAGE */}
          {open ? (

            <X
              size={20}
              className="relative z-10"
            />

          ) : (

            <div className="relative z-10 h-full w-full overflow-hidden rounded-full">

              <Image
                src="https://res.cloudinary.com/dpneh73ru/image/upload/lifedashboard/avatars/mrysub8y3lxskawpggbb.jpg"
                alt="Sandeep Sharma Profile"
                fill
                priority
                quality={80}
                sizes="48px"
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