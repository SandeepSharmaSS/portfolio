"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";

const MainPortfolio = () => {
  return (
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
  );
};

export default MainPortfolio;