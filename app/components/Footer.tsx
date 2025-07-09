import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="flex flex-col items-center justify-center py-4 sm:py-6 border-t border-gray-200 dark:border-gray-800 mt-8 sm:mt-12 text-sm sm:text-base text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <div className="mb-2">&copy; {new Date().getFullYear()} Syazwan. All rights reserved.</div>
      <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
        <a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-blue-500 transition-colors">GitHub</a>
        <a href="#" className="hover:text-blue-500 transition-colors">Twitter</a>
      </div>
    </motion.footer>
  );
};

export default Footer; 