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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
              <div className="w-full h-2.5 rounded-full bg-white/10 shadow-inner progress-track">
                <div
                  className="relative h-2.5 rounded-full bg-gradient-to-r from-purple-300 to-blue-300 opacity-90 progress-fill"
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="progress-stripes rounded-full"></div>
                </div>
              </div>
              <p className="text-right text-sm text-gray-400 mt-2">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 