import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Portfolio Website",
    desc: "A personal portfolio built with React, TypeScript, and Tailwind CSS.",
    link: "#",
  },
  {
    name: "Task Manager App",
    desc: "A productivity app to manage daily tasks and goals.",
    link: "#",
  },
  {
    name: "E-commerce Store",
    desc: "A modern e-commerce platform with shopping cart and payment integration.",
    link: "#",
  },
  {
    name: "Blog Platform",
    desc: "A full-featured blog platform with markdown support.",
    link: "#",
  },
];

const Projects: React.FC = () => (
  <motion.section
    className="max-w-xs sm:max-w-3xl text-center mt-8 sm:mt-12 px-2 sm:px-0"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, type: "spring" }}
  >
    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
      {projects.map((project, i) => (
        <motion.div
          key={project.name}
          className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 sm:p-6 flex flex-col items-start border border-gray-100 dark:border-gray-700 w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.1, duration: 0.5, type: "spring" }}
        >
          <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.name}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{project.desc}</p>
          <a
            href={project.link}
            className="text-blue-500 hover:underline text-sm"
          >
            View Project
          </a>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Projects; 