"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#hero");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["#hero", "#about", "#skills", "#projects", "#contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = sections[0];
      for (const sec of sections) {
        const el = document.querySelector(sec);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 100) current = sec;
        }
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        current = sections[sections.length - 1];
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-transparent text-gray-800 shadow-md backdrop-blur-md"
          : "bg-transparent text-black"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-3 md:py-4">
        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <a href="#hero" onClick={(e) => handleClick(e, "#hero")}>
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="cursor-pointer"
              priority
            />
          </a>
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 font-medium items-center">
          {links.map((link, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
            >
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative transition-colors duration-300 hover:text-indigo-600 ${
                  active === link.href ? "font-semibold text-indigo-600" : ""
                }`}
              >
                {link.name}
                {active === link.href && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-600 rounded"
                  />
                )}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            className="focus:outline-none"
          >
            {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center bg-white/95 backdrop-blur-md w-full shadow-lg py-4 space-y-4 text-gray-800"
          >
            {links.map((link) => (
              <motion.li key={link.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`text-lg hover:text-indigo-600 ${
                    active === link.href ? "font-semibold text-indigo-600" : ""
                  }`}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}