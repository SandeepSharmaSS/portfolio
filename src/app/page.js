"use client";

import {
  useEffect,
  useState,
  Suspense,
} from "react";

import dynamic from "next/dynamic";

import Loader from "@/components/common/Loader";

import IntroOverlay from "@/components/IntroOverlay";

/* =========================================
   LAZY LOAD MAIN UI
========================================= */

const MainPortfolio = dynamic(
  () => import("@/components/MainPortfolio"),
  {
    ssr: false,
  }
);

export default function Home() {

  const [loading, setLoading] =
    useState(true);

  const [entered, setEntered] =
    useState(false);

  /* =========================================
     PRELOAD EVERYTHING
  ========================================= */

  useEffect(() => {

    const preload = async () => {

      await Promise.all([
        import("@/components/MainPortfolio"),
        import("@/canvas/HeroScene"),
        import("@/canvas/IntroScene"),
      ]);

      setTimeout(() => {
        setLoading(false);
      }, 1200);
    };

    preload();

  }, []);

  /* =========================================
     GLOBAL LOADER
  ========================================= */

  if (loading) {
    return (
      <div className="animate-fadeOut">
        <Loader />
      </div>
    );
  }

  /* =========================================
     MAIN APP
  ========================================= */

  return (
    <>
      {!entered && (
        <IntroOverlay
          onEnter={() =>
            setEntered(true)
          }
        />
      )}

      <Suspense fallback={<Loader />}>

        <div
          className={`transition-all duration-1000 ${
            entered
              ? "visible opacity-100"
              : "invisible h-screen overflow-hidden opacity-0"
          }`}
        >

          <MainPortfolio />

        </div>

      </Suspense>
    </>
  );
}