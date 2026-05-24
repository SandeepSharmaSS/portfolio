"use client";

import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

/* LOADER */
import Loader from "@/components/common/Loader";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";

const MainPortfolio = () => {

  const [loading, setLoading] =
    useState(true);

  /* AUTO REMOVE LOADER */
  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 4500);

    return () =>
      clearTimeout(timer);

  }, []);

  return (
    <>
      {/* LOADER */}
      {loading && (
        <Loader
          onEnter={() =>
            setLoading(false)
          }
        />
      )}

      {/* MAIN WEBSITE */}
      <main className="relative overflow-x-hidden bg-[#050816] text-white">

        <Navbar />

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Contact />

        <Footer />

      </main>
    </>
  );
};

export default MainPortfolio;