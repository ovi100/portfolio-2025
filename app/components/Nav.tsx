"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useScrollSpy } from "../hooks";
import { FaBars, FaTimes } from "react-icons/fa";
import { LuCode } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  "home",
  "skills",
  "experience",
  "education",
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
      className={`fixed top-0 left-0 right-0 z-50 transition backdrop-blur ${scrolled ? "bg-black/40 border-b border-white/10" : "bg-transparent"
        }`}
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        <div className="flex items-center gap-3">
          <span className="text-white text-xl font-bold">
            <LuCode />
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
                className={`px-3 py-1.5 rounded-full transition-colors ${active === id
                  ? "bg-brand-500/20 text-brand-200 ring-1 ring-brand-500/50"
                  : "hover:text-brand-200 text-neutral-300"
                  }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            </li>
          ))}
          <li>
            <a
              className="bg-white/10 text-green-300 rounded-3xl px-4 py-2 hover:text-green-200 transition-colors"
              href="https://shorturl.at/oAYli"
              target="_blank"
            >
              Hire me
            </a>
          </li>
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
                    className={`block py-2 px-4 rounded hover:bg-purple-500 hover:text-white transition ${active === id ? "bg-purple-500/20 text-purple-200" : ""
                      }`}
                    onClick={() => setOpen(false)}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  className="bg-white/10 text-green-300 rounded-3xl px-4 py-2 hover:text-green-200 transition-colors"
                  href="https://shorturl.at/oAYli"
                  target="_blank"
                >
                  Hire me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
