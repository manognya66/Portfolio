"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-white py-6 sm:py-8 mt-12 text-center text-gray-600 text-sm sm:text-base">
      {/* Social Icons */}
      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 space-y-4 sm:space-y-0 mb-4">
        <a
          href="https://github.com/manognya66"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
        >
          <FaGithub className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
        <a
          href="https://www.linkedin.com/in/r-shashank-manognya-070874255"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
        <a
          href="mailto:shashankmanognya717@gmail.com"
          className="hover:text-red-500 transition"
        >
          <MdEmail className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-gray-500 text-sm sm:text-base">
        © {new Date().getFullYear()} R Shashank Manognya. All rights reserved.
      </p>
    </footer>
  );
}