"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left bg-gray-200 px-4 md:px-6 py-12"
    >
      {/* Left - Text */}
      <motion.div
        className="flex flex-col justify-center items-center md:items-start mb-10 md:mb-0 md:mr-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl mb-4 text-gray-900 leading-snug"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {"Hi there and Welcome"} <br />
          <span className="text-indigo-600">{"I'm R Shashank Manognya"}</span>
        </motion.h2>

        <motion.p
          className="text-base md:text-lg lg:text-xl text-gray-700 max-w-md md:max-w-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          A passionate Web Developer building clean, professional, and responsive websites with modern tech stacks.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center md:justify-start mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded text-white font-medium transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-indigo-500 hover:bg-indigo-500 hover:text-white rounded text-indigo-500 font-medium transition-colors"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex gap-6 text-2xl md:text-3xl text-gray-600 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/manognya66"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/r-shashank-manognya-070874255"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-700 transition-colors"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </motion.div>

      {/* Right - SVG Illustration */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end w-full max-w-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        viewport={{ once: true }}
      >
        <Image
          src="/assets/undraw_programming_65t2.svg"
          alt="Programming Illustration"
          width={400}
          height={400}
          className="w-3/4 md:w-full h-auto object-contain"
        />
      </motion.div>
    </section>
  );
}