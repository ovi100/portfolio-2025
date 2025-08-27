"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useScrollSpy } from "../hooks";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  "home",
  "experience",
  "education",
  "skills",
  "certifications",
  "projects",
  "contact",
];

const Nav = () => {
  const active = useScrollSpy(sections);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: "0%",
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 300, damping: 30 },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 30 },
    },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition backdrop-blur ${
        scrolled ? "bg-black/40 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        <div className="flex items-center gap-3">
          <span className="w-12 h-12 rounded-full border-2 border-white/20 text-white text-xl font-bold flex items-center justify-center">
            AS
          </span>
          <a
            href="#home"
            className="font-semibold tracking-tight text-white text-lg"
          >
            Abu <span className="text-brand-400">Sayed</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-2 text-sm">
          {sections.map((id) => (
            <li key={id}>
              <Link
                href={`#${id}`}
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  active === id
                    ? "bg-brand-500/20 text-brand-200 ring-1 ring-brand-500/50"
                    : "hover:text-brand-200 text-neutral-300"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white text-2xl focus:outline-none"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed top-0 right-0 w-3/4 h-screen bg-neutral-800 backdrop-blur-md shadow-lg z-50 flex flex-col mt-14 p-6"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="bg-neutral-800 w-full flex flex-col space-y-4 text-white mt-5">
              {sections.map((id) => (
                <li key={id}>
                  <Link
                    href={`#${id}`}
                    className={`block py-2 px-4 rounded hover:bg-purple-500 hover:text-white transition ${
                      active === id ? "bg-purple-500/20 text-purple-200" : ""
                    }`}
                    onClick={() => setOpen(false)} // Close menu on link click
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
