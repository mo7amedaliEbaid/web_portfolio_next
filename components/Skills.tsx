import { motion } from "framer-motion";
import { FaReact, FaAndroid, FaApple } from "react-icons/fa";
import { SiDart, SiFirebase, SiKotlin, SiSwift, SiFlutter } from "react-icons/si";

const skills = [
  {
    name: "Flutter",
    icon: <SiFlutter className="w-8 h-8 text-blue-400" />,
    level: 95,
    description: "Cross-platform mobile development"
  },
  {
    name: "Dart",
    icon: <SiDart className="w-8 h-8 text-blue-500" />,
    level: 95,
    description: "Programming language"
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="w-8 h-8 text-orange-500" />,
    level: 95,
    description: "Backend & Authentication"
  },
  {
    name: "React Native",
    icon: <FaReact className="w-8 h-8 text-blue-500" />,
    level: 75,
    description: "Cross-platform development"
  },
  {
    name: "Android",
    icon: <FaAndroid className="w-8 h-8 text-green-500" />,
    level: 75,
    description: "Native development"
  },
  {
    name: "iOS",
    icon: <FaApple className="w-8 h-8 text-gray-800" />,
    level: 65,
    description: "Native development"
  },
  {
    name: "Kotlin",
    icon: <SiKotlin className="w-8 h-8 text-purple-500" />,
    level: 75,
    description: "Android development"
  },
  {
    name: "Swift",
    icon: <SiSwift className="w-8 h-8 text-orange-500" />,
    level: 70,
    description: "iOS development"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="heading">
            My <span className="text-purple">technical skills</span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Proficient in various technologies and frameworks for mobile development
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-2.5 rounded-full"
                />
              </div>
              <p className="text-right text-sm text-gray-400 mt-2">{skill.level}%</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 