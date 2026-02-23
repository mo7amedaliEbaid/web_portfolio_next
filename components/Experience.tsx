import React from "react";
import { workExperience } from "@/data";
import { FiExternalLink } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  return (
    <section id="experience">
      <div className="py-12 w-full">
        <SectionHeading title="My" highlight="work experience" />

        <div className="w-full mt-8 grid lg:grid-cols-2 grid-cols-1 gap-4 max-w-5xl mx-auto">
          {workExperience.map((card, index) => (
            <a
              key={card.id}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-xl overflow-hidden group cursor-pointer block"
              style={{
                background: `linear-gradient(135deg, rgba(${20 + index * 8},${10 + index * 5},${50 + index * 10},0.9) 0%, rgba(${10 + index * 4},${15 + index * 3},${40 + index * 6},0.95) 100%)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-start gap-4 p-5">
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="w-12 h-12 flex-shrink-0 mt-0.5"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                      <h2 className="text-base font-bold text-white">
                        {card.title}
                      </h2>
                      <span className="text-purple font-semibold text-sm">
                        @ {card.company}
                      </span>
                    </div>
                    <FiExternalLink className="w-3.5 h-3.5 text-gray-600 group-hover:text-purple transition-colors flex-shrink-0 mt-1" />
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mt-1">
                    <span className="text-gray-500 text-xs">{card.location}</span>
                    <span className="text-purple/70 text-xs font-medium">
                      {card.startDate} - {card.endDate}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
