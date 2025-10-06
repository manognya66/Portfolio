"use client";
import { motion } from "framer-motion";
import InterestsScroller from "../components/InterestsScroller";
import Image from "next/image";

export default function About() {
  const badges = [
    {
      title: "AWS Cloud Quest: Cloud Practitioner",
      issuer: "Amazon Web Services Training and Certification",
      imageUrl: "/assets/aws-cloud-quest-cloud-practitioner-training-badge.png",
      link: "https://www.credly.com/earner/earned/badge/d0ca6b79-8a7d-47ab-b35a-75a82739f411",
    },
    {
      title: "Networking Basics",
      issuer: "Cisco",
      imageUrl: "/assets/networking-basics.png",
      link: "https://www.credly.com/earner/earned/badge/9fd39675-a83f-4c59-a3b8-66ef11201ccd",
    },
  ];

  return (
    <section id="about" className="relative bg-gray-100 py-12 md:py-25 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-full max-w-[400px] md:max-w-[500px] aspect-square relative">
            <Image
              src="/assets/undraw_in-the-zone_07y7.svg"
              alt="In the zone illustration"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 80vw, 500px"
            />
          </div>
        </motion.div>

        {/* Right - Content */}
        <div className="flex flex-col">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base lg:text-lg"
          >
            {"I'm a passionate web developer creating modern, efficient, and user-friendly web applications."}
            {"I focus on delivering seamless digital experiences that combine performance, design, and usability."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <InterestsScroller />
          </motion.div>

          {/* Badges Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 md:mt-8"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
              Certifications & Badges
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8">
              {badges.map((badge, index) => (
                <a
                  key={index}
                  href={badge.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center bg-gray-50 p-4 rounded-xl shadow hover:shadow-md transition w-44 md:w-60 h-60 md:h-64"
                >
                  <motion.div
                    className="w-28 h-28 md:w-40 md:h-40 mb-3 md:mb-4 relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src={badge.imageUrl}
                      alt={badge.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 70vw, 160px"
                      priority={index === 0}
                    />
                  </motion.div>

                  <div className="flex flex-col items-center justify-center text-center">
                    <p className="text-sm md:text-base font-medium">{badge.title}</p>
                    <p className="text-xs md:text-sm text-gray-500">{badge.issuer}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Resume button */}
          <motion.a
            href="/assets/FullStackDeveloper_Resume-1.pdf"
            download
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="self-center md:self-start mt-6 px-6 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition"
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
}