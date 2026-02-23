"use client";

import React from "react";
import { education } from "@/data";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const Education = () => {
  return (
    <section id="education" className="relative">
      <div className="py-12 w-full">
        <SectionHeading title="My" highlight="education" />

        <div className="max-w-4xl mx-auto px-4 mt-8">
          {education.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, rgba(28,15,60,0.9) 0%, rgba(14,18,46,0.95) 100%)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-5 p-5">
                <div className="w-12 h-12 rounded-lg bg-purple/10 border border-purple/20 flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="w-6 h-6 text-purple" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-base font-bold text-white">
                    {card.title}
                  </h2>
                  <p className="text-purple font-semibold text-sm mt-0.5">
                    {card.school}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mt-1">
                    <span className="text-purple/70 text-xs font-medium">
                      {card.startDate} - {card.endDate}
                    </span>
                    <span className="text-gray-400 text-xs">
                      {card.desc}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
