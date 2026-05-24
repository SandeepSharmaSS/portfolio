"use client";

import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#020617]">

      {/* =========================================
         BACKGROUND
      ========================================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#081327_0%,#020617_70%)]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04]">

        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

      </div>

      {/* GLOW */}
      <div className="absolute h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute h-[240px] w-[240px] rounded-full bg-violet-500/10 blur-[120px]" />

      {/* =========================================
         MAIN SYMBOL
      ========================================= */}

      <div className="relative z-10 flex items-center justify-center px-6">

        <div className="relative flex items-center justify-center">

          {/* OUTER RING */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[220px] w-[220px] rounded-full border border-cyan-400/10 sm:h-[280px] sm:w-[280px]"
          >

            <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)]" />

            <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-violet-400 shadow-[0_0_15px_rgba(167,139,250,0.9)]" />

            <div className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.9)]" />

            <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.9)]" />

          </motion.div>

          {/* SECOND RING */}
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute flex h-[170px] w-[170px] items-center justify-center rounded-full border border-blue-400/15 sm:h-[220px] sm:w-[220px]"
          >

            <div className="h-[90px] w-[90px] rotate-45 border border-cyan-400/20 sm:h-[110px] sm:w-[110px]" />

          </motion.div>

          {/* CENTER CORE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="relative flex h-[120px] w-[120px] items-center justify-center rounded-full border border-cyan-400/20 bg-[#07101E]/90 shadow-[0_0_60px_rgba(34,211,238,0.15)] backdrop-blur-2xl sm:h-[150px] sm:w-[150px]"
          >

            {/* INNER GLOW */}
            <div className="absolute h-[70px] w-[70px] rounded-full bg-cyan-400/10 blur-[35px]" />

            {/* SYMBOL */}
            <div className="absolute flex items-center justify-center">

              <div className="absolute h-[46px] w-[46px] rotate-45 border border-cyan-300/60 sm:h-[58px] sm:w-[58px]" />

              <div className="absolute h-[22px] w-[22px] rounded-full border border-violet-400/70 sm:h-[28px] sm:w-[28px]" />

              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,1)]"
              />

            </div>

            {/* CENTER TEXT */}
{/* CENTER TEXT */}
<motion.p
  initial={{
    opacity: 0,
  }}
  animate={{
    opacity: 1,
  }}
  transition={{
    duration: 1,
    delay: 0.3,
  }}
  className="absolute whitespace-nowrap text-center text-[5px] font-medium uppercase tracking-[0.18em] text-cyan-100 sm:text-[7px] md:text-[8px]"
>

  Initializing Neural Interface

</motion.p>

          </motion.div>

        </div>

      </div>

    </div>
  );
};

export default Loader;