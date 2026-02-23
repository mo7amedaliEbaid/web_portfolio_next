"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  SiFlutter, SiDart, SiSwift, SiKotlin, SiFirebase,
  SiGraphql, SiPostman, SiJira, SiFigma, SiGit,
  SiGithub, SiGitlab, SiBitbucket, SiAndroidstudio,
  SiXcode, SiHive,
} from "react-icons/si";
import { FaReact, FaJava } from "react-icons/fa";
import { TbApi, TbBrandSocketIo } from "react-icons/tb";
import { MdArchitecture } from "react-icons/md";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "Flutter", icon: <SiFlutter className="text-sky-400" /> },
      { name: "Dart", icon: <SiDart className="text-blue-500" /> },
      { name: "Swift", icon: <SiSwift className="text-orange-500" /> },
      { name: "SwiftUI", icon: <SiSwift className="text-blue-400" /> },
      { name: "Kotlin", icon: <SiKotlin className="text-purple-500" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
    ],
  },
  {
    title: "Tools & Platforms",
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
    skills: [
      { name: "Bloc", icon: <SiFlutter className="text-blue-400" /> },
      { name: "Cubit", icon: <SiFlutter className="text-blue-300" /> },
      { name: "Provider", icon: <SiFlutter className="text-green-400" /> },
      { name: "Riverpod", icon: <SiFlutter className="text-purple-400" /> },
      { name: "GetX", icon: <SiFlutter className="text-orange-400" /> },
      { name: "Redux", icon: <FaReact className="text-purple-500" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My"
          highlight="technical skills"
          subtitle="Proficient in a wide range of technologies for mobile development"
        />

        <div className="space-y-5">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.08 }}
              className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-xl p-5"
            >
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 text-center">
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
