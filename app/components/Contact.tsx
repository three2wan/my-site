import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <motion.section
      className="max-w-xs sm:max-w-xl text-center mt-8 sm:mt-12 px-2 sm:px-0"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600">Contact</h2>
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-green-600 dark:text-green-400 text-lg font-semibold mt-8"
        >
          Thank you for reaching out!
        </motion.div>
      ) : (
        <motion.form
          className="flex flex-col gap-4 items-center"
          onSubmit={e => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <motion.input
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          />
          <motion.textarea
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={4}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          />
          <motion.button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      )}
    </motion.section>
  );
};

export default Contact; 