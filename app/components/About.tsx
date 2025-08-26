"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Person } from "../lib/person";
import ThreeBackground from "./ThreeBackground";

export default function About({ person }: { person: Person }) {
  return (
    <div id="home" className="relative min-h-screen grid place-items-center">
      {/* Change the mode prop to 'snow' | 'rain' */}
      <ThreeBackground mode="snow" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-[220px,1fr] gap-8 md:gap-12 items-center py-28">
        <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-glow ring-1 ring-white/10">
          {/* Replace /me.jpg with your real photo */}
          <Image
            src="/me.png"
            alt="Abu Sayed portrait"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight"
          >
            Hi, I’m Abu Sayed 👋
          </motion.h1>
          <p className="mt-4 text-neutral-300 leading-relaxed max-w-2xl">
            Full‑stack developer specializing in{" "}
            <strong className="text-white">React/Next.js</strong>, building
            secure, scalable apps with{" "}
            <strong className="text-white">Node, MongoDB, Firebase</strong> and
            beautiful interfaces in{" "}
            <strong className="text-white">Tailwind</strong>. I love shipping
            products that are fast, accessible and delightful.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {person.social.map((s) => (
              <a
                key={s.name}
                href={s.link}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/15 text-sm"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
