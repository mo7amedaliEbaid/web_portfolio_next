"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "@/data";
import { FaCertificate, FaMedal } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

type Cert = (typeof certifications)[number] & { category?: string };

const CATEGORY_COLORS: Record<string, string> = {
  Android: "text-green-400 bg-green-400/10 border-green-400/20",
  iOS: "text-sky-400 bg-sky-400/10 border-sky-400/20",
  Flutter: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  "Cross-Platform": "text-teal-400 bg-teal-400/10 border-teal-400/20",
  DevOps: "text-orange-400 bg-orange-400/10 border-orange-400/20",
  Agile: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  AI: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  Design: "text-pink-400 bg-pink-400/10 border-pink-400/20",
  General: "text-gray-400 bg-gray-400/10 border-gray-400/20",
};

// Derive unique categories from data, preserving order of first appearance
const uniqueCategories = Array.from(
  new Set((certifications as Cert[]).map((c) => c.category).filter(Boolean))
) as string[];
const ALL_FILTERS = ["All", ...uniqueCategories];

// Container: no per-item whileInView — animate the whole grid once
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? (certifications as Cert[])
      : (certifications as Cert[]).filter((c) => c.category === activeFilter);

  return (
    <section id="certifications">
      <div className="py-12 w-full">
        <SectionHeading title="Licenses &" highlight="certifications" />

        {/* Stats row */}
        <p className="text-center text-gray-500 text-sm mt-2 mb-6">
          {certifications.length} credentials &middot;{" "}
          {certifications.filter((c) => c.type === "Professional Certificate").length} Professional Certificates
        </p>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {ALL_FILTERS.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${activeFilter === cat
                  ? "bg-purple text-white border-purple shadow-[0_0_12px_rgba(120,87,255,0.4)]"
                  : "bg-white/[0.02] text-gray-400 border-white/[0.08] hover:border-purple/30 hover:text-white"
                }`}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-1.5 opacity-50">
                  {(certifications as Cert[]).filter((c) => c.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Grid — animated at container level, no per-card whileInView */}
        <motion.div
          key={activeFilter}
          className="max-w-4xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((cert) => {
              const isPro = cert.type === "Professional Certificate";
              const cat = cert.category;
              const catColor = cat
                ? CATEGORY_COLORS[cat] ?? CATEGORY_COLORS.General
                : CATEGORY_COLORS.General;

              return (
                <motion.a
                  key={cert.id}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={cardVariants}
                  layout
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-purple/25 transition-all duration-300 group cursor-pointer"
                >
                  {/* Icon */}
                  <div className={`flex-shrink-0 mt-0.5 ${isPro ? "text-yellow-400" : "text-purple"}`}>
                    {isPro ? (
                      <FaMedal className="w-4 h-4" />
                    ) : (
                      <FaCertificate className="w-4 h-4" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-purple transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                      <span className="text-gray-500 text-xs">{cert.issuer}</span>
                      {isPro && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 font-medium leading-none">
                          Pro
                        </span>
                      )}
                      {cat && (
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded border font-medium leading-none ${catColor}`}
                        >
                          {cat}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Arrow */}
                  <FiExternalLink className="w-3.5 h-3.5 text-gray-600 group-hover:text-purple transition-colors flex-shrink-0 mt-1" />
                </motion.a>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
