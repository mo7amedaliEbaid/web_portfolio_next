"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { projects } from "@/data";
import SectionHeading from "./SectionHeading";

const RecentProjects = () => {
  return (
    <section id="projects">
      <div className="py-12">
        <SectionHeading title="Featured" highlight="projects" />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
          {projects.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative rounded-xl overflow-hidden"
              style={{
                background: `linear-gradient(135deg, rgba(${18 + index * 4},${12 + index * 3},${45 + index * 5},0.9) 0%, rgba(${10 + index * 3},${14 + index * 2},${38 + index * 4},0.95) 100%)`,
              }}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-[#13162D]">
                  <Image 
                    src="/bg.png" 
                    alt="background pattern" 
                    fill 
                    className="object-cover opacity-30" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="relative z-10 w-full h-full p-5 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative p-4 z-10">
                <h3 className="font-bold text-white text-base line-clamp-1">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm mt-1.5 line-clamp-2 leading-relaxed">
                  {item.des}
                </p>

                {/* Tech Stack & Store Links */}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1">
                    {item.iconLists.map((icon, iconIndex) => (
                      <div
                        key={iconIndex}
                        className="w-7 h-7 rounded-full bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden"
                      >
                        {typeof icon === "string" ? (
                          <div className="relative w-3.5 h-3.5">
                            <Image src={icon} alt="tech stack icon" fill className="object-contain" />
                          </div>
                        ) : (
                          <div className="flex items-center justify-center w-full h-full scale-[0.8]">
                            {icon}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {item.playStoreLink && (
                      <a
                        href={item.playStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.title} on Google Play`}
                        className="flex items-center gap-1 text-xs text-gray-500 hover:text-green-400 transition-colors"
                      >
                        <FaGooglePlay className="w-3.5 h-3.5" />
                        <span>Play Store</span>
                      </a>
                    )}
                    {item.appStoreLink && (
                      <a
                        href={item.appStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.title} on App Store`}
                        className="flex items-center gap-1 text-xs text-gray-500 hover:text-white transition-colors"
                      >
                        <FaApple className="w-4 h-4" />
                        <span>App Store</span>
                      </a>
                    )}
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

export default RecentProjects;
