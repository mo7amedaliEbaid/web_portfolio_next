"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "@/data";
import SectionHeading from "./SectionHeading";

const RecentProjects = () => {
  return (
    <section id="projects">
      <div className="py-12">
        <SectionHeading title="Featured" highlight="projects" />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
          {projects.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
              style={{
                background: `linear-gradient(135deg, rgba(${18 + index * 4},${12 + index * 3},${45 + index * 5},0.9) 0%, rgba(${10 + index * 3},${14 + index * 2},${38 + index * 4},0.95) 100%)`,
              }}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-[#13162D]">
                  <img src="/bg.png" alt="" className="w-full h-full object-cover opacity-30" />
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="relative z-10 w-full h-full object-contain p-5 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="relative p-4 z-10">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-white text-base line-clamp-1">
                    {item.title}
                  </h3>
                  <FiExternalLink className="w-4 h-4 text-gray-500 group-hover:text-purple transition-colors flex-shrink-0 mt-0.5" />
                </div>

                <p className="text-gray-400 text-sm mt-1.5 line-clamp-2 leading-relaxed">
                  {item.des}
                </p>

                {/* Tech Stack */}
                <div className="flex items-center gap-1 mt-3">
                  {item.iconLists.map((icon, iconIndex) => (
                    <div
                      key={iconIndex}
                      className="w-7 h-7 rounded-full bg-black/40 border border-white/10 flex items-center justify-center"
                    >
                      <img src={icon} alt="" className="w-3.5 h-3.5" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
