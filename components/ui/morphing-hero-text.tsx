"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function MorphingHeroText() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative py-8 md:py-12">
      {/* Animated gradient blob background */}
      <motion.div
        className="absolute inset-0 blur-3xl opacity-40 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #6E00FF 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, #00D8FF 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, #FF36B9 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, #6E00FF 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative text-center">
        {/* AI-Powered */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-2"
          style={{
            x: mousePos.x,
            y: mousePos.y,
          }}
        >
          {["A", "I", "-", "P", "o", "w", "e", "r", "e", "d"].map((letter, i) => (
            <motion.span
              key={i}
              className="inline-block bg-gradient-to-br from-purple-500 via-cyan-500 to-pink-500 bg-clip-text text-transparent"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.08,
              }}
              whileHover={{
                scale: 1.3,
                rotate: 10,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Health Revolution */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black"
          style={{
            x: mousePos.x * -0.5,
            y: mousePos.y * -0.5,
          }}
        >
          {["H", "e", "a", "l", "t", "h"].map((letter, i) => (
            <motion.span
              key={i}
              className="inline-block bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent"
              animate={{
                y: [0, -12, 0],
                rotate: [0, -3, 3, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.12,
              }}
              whileHover={{
                scale: 1.3,
                rotate: -10,
              }}
            >
              {letter}
            </motion.span>
          ))}{" "}
          {["R", "e", "v", "o", "l", "u", "t", "i", "o", "n"].map((letter, i) => (
            <motion.span
              key={i}
              className="inline-block bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.08,
              }}
              whileHover={{
                scale: 1.3,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h2>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full pointer-events-none"
            style={{
              background: `linear-gradient(135deg, ${
                i % 3 === 0 ? "#6E00FF" : i % 3 === 1 ? "#00D8FF" : "#FF36B9"
              }, transparent)`,
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-3xl"
          animate={{
            boxShadow: [
              "0 0 0 0px rgba(110, 0, 255, 0.4)",
              "0 0 0 15px rgba(110, 0, 255, 0)",
              "0 0 0 0px rgba(110, 0, 255, 0)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </div>
  );
}
