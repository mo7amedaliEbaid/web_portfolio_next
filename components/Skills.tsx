"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  SiFlutter, SiDart, SiSwift, SiKotlin, SiFirebase,
  SiGraphql, SiPostman, SiJira, SiFigma, SiGit,
  SiGithub, SiGitlab, SiBitbucket, SiAndroidstudio,
  SiXcode, SiHive, SiJetpackcompose,
} from "react-icons/si";
import { FaReact, FaJava, FaAndroid, FaApple } from "react-icons/fa";
import { TbApi, TbBrandSocketIo } from "react-icons/tb";
import { MdArchitecture } from "react-icons/md";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    color: "text-sky-400",
    skills: [
      { name: "Kotlin", icon: <SiKotlin className="text-purple-500" /> },
      { name: "Swift", icon: <SiSwift className="text-orange-500" /> },
      { name: "Flutter", icon: <SiFlutter className="text-sky-400" /> },
      { name: "Dart", icon: <SiDart className="text-blue-500" /> },
      { name: "SwiftUI", icon: <SiSwift className="text-blue-400" /> },
      { name: "Jetpack Compose", icon: <SiJetpackcompose className="text-green-400" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
    ],
  },
  {
    title: "Tools & Platforms",
    color: "text-orange-400",
    skills: [
      { name: "Firebase", icon: <SiFirebase className="text-amber-500" /> },
      { name: "Git", icon: <SiGit className="text-orange-600" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "GitLab", icon: <SiGitlab className="text-orange-400" /> },
      { name: "Bitbucket", icon: <SiBitbucket className="text-blue-500" /> },
      { name: "Jira", icon: <SiJira className="text-blue-600" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Android Studio", icon: <SiAndroidstudio className="text-green-500" /> },
      { name: "Xcode", icon: <SiXcode className="text-blue-500" /> },
      { name: "Figma", icon: <SiFigma className="text-purple-400" /> },
    ],
  },
  {
    title: "APIs & Libraries",
    color: "text-green-400",
    skills: [
      { name: "RESTful APIs", icon: <TbApi className="text-green-400" /> },
      { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
      { name: "Google Maps", icon: <TbApi className="text-blue-400" /> },
      { name: "WebSockets", icon: <TbBrandSocketIo className="text-yellow-400" /> },
      { name: "Stripe", icon: <TbApi className="text-purple-400" /> },
      { name: "Agora", icon: <TbApi className="text-blue-300" /> },
      { name: "SQflite", icon: <SiHive className="text-gray-400" /> },
      { name: "Hive", icon: <SiHive className="text-amber-400" /> },
    ],
  },
  {
    title: "Architecture & Patterns",
    color: "text-violet-400",
    skills: [
      { name: "Clean Architecture", icon: <MdArchitecture className="text-blue-400" /> },
      { name: "SOLID Principles", icon: <MdArchitecture className="text-green-400" /> },
      { name: "Design Patterns", icon: <MdArchitecture className="text-purple-400" /> },
      { name: "MVC / MVVM / MVP", icon: <MdArchitecture className="text-orange-400" /> },
      { name: "TDD / DDD", icon: <MdArchitecture className="text-cyan-400" /> },
      { name: "CI/CD", icon: <MdArchitecture className="text-yellow-400" /> },
    ],
  },
  {
    title: "State Management",
    color: "text-cyan-400",
    skills: [
      { name: "Bloc / Cubit", icon: <SiFlutter className="text-blue-400" /> },
      { name: "Provider", icon: <SiFlutter className="text-green-400" /> },
      { name: "Riverpod", icon: <SiFlutter className="text-purple-400" /> },
      { name: "ViewModel (Android)", icon: <FaAndroid className="text-green-500" /> },
      { name: "Combine (iOS)", icon: <FaApple className="text-gray-300" /> },
      { name: "Redux", icon: <FaReact className="text-purple-500" /> },
    ],
  },
];

const ALL_SKILLS = "All";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState(ALL_SKILLS);

  const filters = [ALL_SKILLS, ...skillCategories.map((c) => c.title)];

  const visibleCategories =
    activeFilter === ALL_SKILLS
      ? skillCategories
      : skillCategories.filter((c) => c.title === activeFilter);

  const totalSkills = skillCategories.reduce((acc, c) => acc + c.skills.length, 0);

  return (
    <section id="skills" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My"
          highlight="technical skills"
          subtitle="Proficient in a wide range of technologies for mobile development"
        />

        {/* Stats */}
        <p className="text-center text-gray-500 text-sm mt-2 mb-6">
          {totalSkills} skills across {skillCategories.length} categories
        </p>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {filters.map((filter) => {
            const cat = skillCategories.find((c) => c.title === filter);
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${activeFilter === filter
                    ? "bg-purple text-white border-purple shadow-[0_0_12px_rgba(120,87,255,0.4)]"
                    : "bg-white/[0.02] text-gray-400 border-white/[0.08] hover:border-purple/30 hover:text-white"
                  }`}
              >
                {filter}
                {filter !== ALL_SKILLS && cat && (
                  <span className="ml-1.5 opacity-50">{cat.skills.length}</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Skill category cards */}
        <motion.div
          key={activeFilter}
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="popLayout">
            {visibleCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                layout
                className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-xl p-5"
              >
                <h3 className={`text-sm font-semibold uppercase tracking-wider mb-3 text-center ${category.color}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple/30 transition-all duration-300"
                    >
                      <span className="text-base">{skill.icon}</span>
                      <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
