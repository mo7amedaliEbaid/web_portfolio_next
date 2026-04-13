"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { SiFlutter, SiKotlin, SiSwift } from "react-icons/si";
import { MdArchitecture } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const expertiseAreas = [
  {
    icon: <SiFlutter className="w-7 h-7 text-sky-400" />,
    title: "Cross-Platform",
    subtitle: "Flutter & Dart",
    description:
      "Production-scale apps with shared codebases, delivering consistent experiences across Android and iOS.",
  },
  {
    icon: <SiKotlin className="w-7 h-7 text-purple-500" />,
    title: "Android Native",
    subtitle: "Kotlin & Java",
    description:
      "Deep Android integrations with Jetpack Compose, native APIs, and the full Android ecosystem.",
  },
  {
    icon: <SiSwift className="w-7 h-7 text-orange-500" />,
    title: "iOS Native",
    subtitle: "Swift & SwiftUI",
    description:
      "Native iOS development with modern Swift patterns, UIKit, and SwiftUI for Apple-first experiences.",
  },
  {
    icon: <MdArchitecture className="w-7 h-7 text-blue-400" />,
    title: "Architecture",
    subtitle: "Scalable Systems",
    description:
      "Clean Architecture, SOLID principles, and performant mobile systems designed for long-term growth.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About" highlight="me" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6"
        >
          <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base max-w-3xl mx-auto">
            I&apos;m a Senior Mobile Engineer with 6+ years of hands-on experience
            shipping high-performance applications across Android, iOS, and
            cross-platform (Flutter). With 25+ production apps on Google Play and
            the App Store — spanning fintech wallets, e-commerce platforms, and
            enterprise solutions — I focus on clean architecture, scalability, and
            exceptional user experiences.
          </p>
          <p className="text-gray-400 text-center text-sm md:text-base max-w-3xl mx-auto mt-4 leading-relaxed">
            I pick the right tool for the job: native Kotlin for Android-deep
            integrations, Swift for Apple-first experiences, or Flutter for rapid
            cross-platform delivery. Whatever the stack, the code is built to scale.
          </p>
        </motion.div>

        {/* Open source callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-6"
        >
          <a
            href="https://github.com/mo7amedaliEbaid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800 bg-black-200/50 hover:bg-white/5 hover:border-purple/30 transition-all duration-300 text-xs md:text-sm text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple/50"
          >
            <FaGithub className="w-4 h-4" />
            <span>Active open source contributor with <strong>90+ repositories</strong></span>
          </a>
        </motion.div>

        {/* Expertise cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
              className="group relative rounded-xl overflow-hidden p-5 text-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(20,12,50,0.9) 0%, rgba(10,14,40,0.95) 100%)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 border border-white/[0.05] rounded-xl group-hover:border-purple/20 transition-colors duration-300" />
              <div className="relative z-10">
                <div className="flex justify-center mb-3">{area.icon}</div>
                <h3 className="text-white font-semibold text-sm">
                  {area.title}
                </h3>
                <p className="text-purple text-xs font-medium mt-0.5">
                  {area.subtitle}
                </p>
                <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
