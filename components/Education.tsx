import React from "react";
import { education } from "@/data";
import { Button } from "./ui/MovingBorders";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="relative">
      <div className="py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="heading">
            My <span className="text-purple">education</span>
          </h1>
        </motion.div>

        <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10 max-w-4xl mx-auto px-4">
          {education.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <Button
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                  background: "rgb(4,7,29)",
                  backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                  borderRadius: `calc(1.75rem * 0.96)`,
                }}
                className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl"></div>
                    <img
                      src={card.thumbnail}
                      alt={card.title}
                      className="lg:w-32 md:w-20 w-16 relative z-10 rounded-full p-2 bg-white/5 backdrop-blur-sm"
                    />
                  </div>
                  <div className="lg:ms-5 flex-1">
                    <h1 className="text-start text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                      {card.title}
                    </h1>
                    <p className="text-start text-white-100 mt-2 font-semibold text-lg">
                      {card.school}
                    </p>
                    <p className="text-start text-purple-400 mt-1 text-sm">
                      {card.startDate} - {card.endDate}
                    </p>
                    <p className="text-start text-gray-400 mt-3 font-medium leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 