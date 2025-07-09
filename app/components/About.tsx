import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => (
  <motion.section
    className="max-w-xs sm:max-w-2xl text-center mt-8 sm:mt-12 px-2 sm:px-0"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, type: "spring" }}
  >
    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600">About Me</h2>
    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
      Hi! I'm Syazwan, a passionate software developer with a love for building beautiful and functional web applications. With experience in React, TypeScript, and Tailwind CSS, I enjoy turning ideas into reality and learning new technologies along the way.
    </p>
  </motion.section>
);

export default About; 