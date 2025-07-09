import React from "react";
import { motion } from "framer-motion";
import type { Section } from "../page";

type HeroProps = {
  setActiveSection: (section: Section) => void;
};

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  return (
    <motion.section
      className="flex flex-col items-center gap-4 text-center mt-8 sm:mt-12 px-2 sm:px-0"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <motion.img
        src="/globe.svg"
        alt="Profile"
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-blue-500 shadow-lg mb-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
      />
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-blue-600"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Syazwan
      </motion.h1>
      <motion.h2
        className="text-lg sm:text-xl md:text-2xl font-medium mb-2 text-gray-500 dark:text-gray-300"
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Software Developer & React Enthusiast
      </motion.h2>
      <motion.p
        className="max-w-xs sm:max-w-xl text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        I build interactive, modern web applications with React, TypeScript, and
        Tailwind CSS.
      </motion.p>
      <motion.button
        className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setActiveSection("Contact")}
      >
        Contact Me
      </motion.button>
    </motion.section>
  );
};

export default Hero;
