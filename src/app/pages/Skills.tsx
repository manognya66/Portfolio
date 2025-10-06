"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaBootstrap, FaHtml5, FaCss3Alt, FaPython, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiDjango, SiTailwindcss, SiTypescript, SiJavascript, SiMysql, SiGit, SiPostman, SiExpress, SiVercel } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-5xl" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-5xl" /> },
        { name: "Python", icon: <FaPython className="text-yellow-500 text-5xl" /> },
      ],
    },
    {
      title: "Frontend & Frameworks",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
        { name: "React.js", icon: <FaReact className="text-sky-500 text-5xl" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 text-5xl" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-5xl" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-violet-700 text-5xl" /> },
      ],
    },
    {
      title: "Backend & Frameworks",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-5xl" /> },
        { name: "Express.js", icon: <SiExpress className="text-black text-5xl" /> },
        { name: "Django", icon: <SiDjango className="text-green-600 text-5xl" /> },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-5xl" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600 text-5xl" /> },
      ],
    },
    {
      title: "Cloud & Hosting",
      skills: [
        { name: "AWS", icon: <FaAws className="text-orange-400 text-5xl" /> },
        { name: "Vercel", icon: <SiVercel className="text-gray-900 text-5xl" /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <SiGit className="text-red-500 text-5xl" /> },
        { name: "VS Code", icon: <VscVscode className="text-blue-500 text-5xl" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500 text-5xl" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-gray-50 py-25 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
              <div className="grid grid-cols-3 gap-6 justify-items-center">
                {category.skills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2">
                    {skill.icon}
                    <p className="text-gray-700 font-medium text-center">{skill.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
