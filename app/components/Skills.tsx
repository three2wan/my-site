import React from "react";
import { motion } from "framer-motion";

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "HTML5",
  "CSS3",
  "Git",
  "REST APIs",
];

const Skills: React.FC = () => (
  <motion.section
    className="max-w-xs sm:max-w-2xl text-center mt-8 sm:mt-12 px-2 sm:px-0"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, type: "spring" }}
  >
    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600">Skills</h2>
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4">
      {skills.map((skill, i) => (
        <motion.span
          key={skill}
          className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium shadow"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.section>
);

export default Skills; 