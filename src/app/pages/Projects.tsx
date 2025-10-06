"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Image Gallery",
      description:
        "A visually appealing online application showcasing a collection of high-quality car images.",
      technologyUsed: "HTML, CSS",
      imageUrl: "/assets/ImageGallery.jpg",
      demo: "https://image-gallery-xeur.vercel.app/",
      github: "https://github.com/manognya66/ImageGallery",
    },
    {
      title: "Shopping Cart",
      description:
        "An online dessert shopping application that allows users to select various dessert items to the cart.",
      technologyUsed: "HTML, CSS, JavaScript",
      imageUrl: "/assets/ShoppingCart.jpg",
      demo: "https://yourdemo.com/cart",
      github: "https://github.com/yourusername/cart",
    },
    {
      title: "Online Community Bulletin Board",
      description:
        "A scalable web-application for posting events and registering for the events happening in a community.",
      technologyUsed:
        "React.js, CSS, Express.js, MongoDB, and AWS (Load Balancer, EC2).",
      imageUrl: "/assets/OnlineCommunityBulletinBoard.jpg",
      demo: "https://yourdemo.com/community-board",
      github: "https://github.com/yourusername/community-board",
    },
    {
      title: "Dietician Landing Page",
      description: "A sleek landing page for a dietician with modern UI libraries.",
      technologyUsed: "React.js, Next.js, Tailwind CSS",
      imageUrl: "/assets/DieticianLandingPage.jpg",
      demo: "https://dietician-landing-page.vercel.app",
      github: "https://github.com/manognya66/DieticianLandingPage",
    },
    {
      title: "Task Manager",
      description:
        "A task tracking platform with user authentication, task scheduling, deadline reminders, and progress visualization.",
      technologyUsed:
        "React.js, Next.js, Tailwind CSS, Express.js, Typescript, Clerk Authentication",
      imageUrl: "/assets/TaskFlow.jpg",
      demo: "https://task-manager-seven-gilt.vercel.app",
      github: "https://github.com/manognya66/TaskManager",
    },
    {
      title: "Protecting User Passwords at Rest (On Desk)",
      description:
        "An application that encrypts and decrypts files using a user-provided passphrase.",
      technologyUsed: "Python",
      github: "https://github.com/manognya66/ProtectingUserPasswordsAtRest-On-Disk",
      imageUrl: "/assets/ProtectingUserPasswordsAtRest.jpg",
    },
  ];

  return (
    <section id="projects" className="bg-gray-100 py-25 px-6 sm:py-25">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-4xl font-bold mb-8 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition overflow-hidden flex flex-col"
            >
              {/* Thumbnail */}
              {project.imageUrl && (
                <div className="relative w-full h-56 sm:h-64 md:h-60 p-5">
                  <div className="w-full h-full overflow-hidden rounded-lg">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="px-6 py-5 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-2 flex-1">{project.description}</p>
                {project.technologyUsed && (
                  <p className="text-sm text-gray-500 mb-4">
                    Tech: {project.technologyUsed}
                  </p>
                )}

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md text-sm font-medium transition"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-500 rounded-md text-sm font-medium transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}