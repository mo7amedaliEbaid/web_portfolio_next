"use client";

import { motion } from "framer-motion";

const SectionHeading = ({
  title,
  highlight,
  subtitle,
}: {
  title: string;
  highlight: string;
  subtitle?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-2"
    >
      <h2 className="font-bold text-3xl md:text-4xl">
        {title} <span className="text-purple">{highlight}</span>
      </h2>
      <div className="mt-3 flex justify-center">
        <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-purple to-transparent rounded-full" />
      </div>
      {subtitle && (
        <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-sm">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
