"use client";

import { useState } from "react";

import IntroOverlay from "@/components/IntroOverlay";
import MainPortfolio from "@/components/MainPortfolio";

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered && (
        <IntroOverlay onEnter={() => setEntered(true)} />
      )}

      <div
        className={`transition-all duration-1000 ${
          entered
            ? "opacity-100 visible"
            : "opacity-0 invisible h-screen overflow-hidden"
        }`}
      >
        <MainPortfolio />
      </div>
    </>
  );
}