"use client";

import React from "react";
import { motion } from "framer-motion";
import { certifications } from "@/data";
import { FaCertificate } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const Certifications = () => {
  return (
    <section id="certifications">
      <div className="py-12 w-full">
        <SectionHeading title="Licenses &" highlight="certifications" />

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-3 mt-8">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-purple/20 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-purple flex-shrink-0">
                <FaCertificate className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-sm truncate">
                  {cert.title}
                </h3>
                <p className="text-gray-500 text-xs mt-0.5">
                  {cert.issuer} &middot; {cert.type}
                </p>
              </div>
              <FiExternalLink className="w-3.5 h-3.5 text-gray-600 group-hover:text-purple transition-colors flex-shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
