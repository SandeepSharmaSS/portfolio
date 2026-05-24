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
      {/* NAVBAR */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed left-1/2 top-3 z-40 w-[94%] max-w-[680px] -translate-x-1/2"
          >
            <div

  className={`overflow-hidden rounded-[36px] border transition-all duration-300 ${
    scrolled
      ? "border-purple-500/20 bg-[#060816]/85 shadow-[0_0_40px_rgba(139,92,246,0.15)]"
      : "border-white/10 bg-[#0B1220]/80"
  } backdrop-blur-2xl`}
>
              <div className="flex flex-col gap-3 px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-4 sm:py-2">

                {/* NAV LINKS */}
                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">

                  {navItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() =>
                        setOpen(false)
                      }
                      className="rounded-full px-3 py-2 text-center text-[13px] font-medium text-gray-300 transition-all duration-300 hover:bg-purple-500/10 hover:text-white"
                    >
                      {item}
                    </a>
                  ))}

                </div>

                {/* RESUME BUTTON */}
                <div className="flex justify-center sm:justify-end">

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-4 py-2 text-[12px] font-semibold text-white transition-all duration-300 hover:scale-105"
                  >
                    Resume

                    <Download
                      size={15}
                      className="transition duration-300 group-hover:translate-y-[1px]"
                    />

                  </a>

                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MENU BUTTON */}

      <div className="fixed right-3 top-3 z-50">

        <button
          aria-label={
            open
              ? "Close Navigation Menu"
              : "Open Navigation Menu"
          }
          onClick={() =>
            setOpen(!open)
          }
          className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#0B1220]/80 text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-105"
        >

          {/* GLOW */}
          <div className="absolute inset-0 rounded-full bg-purple-500/20 opacity-0 blur-xl transition duration-300 group-hover:opacity-100" />

          {/* ICON / PROFILE */}
          {open ? (
            <X
              size={22}
              className="relative z-18"
            />
          ) : (
            <div className="relative z-10 h-full w-full overflow-hidden rounded-full">

              <Image
                src="https://res.cloudinary.com/dpneh73ru/image/upload/lifedashboard/avatars/mrysub8y3lxskawpggbb.jpg"
                alt="Sandeep Sharma Profile"
                fill
                priority
                quality={80}
                sizes="40px"
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