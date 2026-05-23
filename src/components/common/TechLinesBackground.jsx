"use client";

import { motion } from "framer-motion";

const TechLinesBackground = () => {

  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.05]">

        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59,130,246,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59,130,246,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

      </div>

      {/* TOP LIGHT */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-[-180px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]"
      />

      {/* SIDE LIGHT */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute left-[-100px] top-1/3 h-[260px] w-[260px] rounded-full bg-cyan-400/10 blur-[120px]"
      />

      {/* HORIZONTAL LINES */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: "-100%",
          }}
          animate={{
            x: "120%",
          }}
          transition={{
            duration: 12 + i,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.8,
          }}
          className="absolute h-[1px]"
          style={{
            top: `${12 + i * 12}%`,
            width: "320px",
            background:
              "linear-gradient(90deg, transparent, rgba(59,130,246,0.7), transparent)",
          }}
        />
      ))}

      {/* GLOW DOTS */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          animate={{
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
          }}
          className="absolute h-[2px] w-[2px] rounded-full bg-blue-400"
          style={{
            left: `${(i * 9) % 100}%`,
            top: `${(i * 13) % 100}%`,
            boxShadow:
              "0 0 10px rgba(59,130,246,0.8)",
          }}
        />
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#01030A_82%)]" />

    </div>
  );
};

export default TechLinesBackground;