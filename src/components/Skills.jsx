import { Code2, Wrench, BookOpen } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  SiPython,
  SiC,
  SiCplusplus,
  SiScala,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiLinux,
  SiJetbrains,
  SiDocker,
  SiApachemaven,
  SiFigma,
  SiRiscv,
  SiFirebase,
  SiJupyter,
  SiMysql,
} from "react-icons/si";
import { TbBinaryTree, TbLock, TbNetwork, TbCpu2 } from "react-icons/tb";
import { AiOutlineSync } from "react-icons/ai";
import { BiCodeBlock } from "react-icons/bi";
import { FaJava, FaDatabase } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      skills: [
        // JVM / backend
        { name: "Java", icon: FaJava },
        { name: "Scala", icon: SiScala },

        // Systems / low-level
        { name: "C", icon: SiC },
        { name: "C++", icon: SiCplusplus },
        { name: "RISC-V", icon: SiRiscv },

        // Scripting / data
        { name: "Python", icon: SiPython },

        // Web / frontend
        { name: "JavaScript", icon: SiJavascript },
        { name: "React", icon: SiReact },
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 },
        { name: "Tailwind", icon: SiTailwindcss },

        // Databases
        { name: "MySQL", icon: SiMysql },
      ],
    },
    {
      title: "Tools & Development",
      icon: Wrench,
      skills: [
        // Version control
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },

        // Container & cloud
        { name: "Docker", icon: SiDocker },
        { name: "Firebase", icon: SiFirebase },

        // Build & OS
        { name: "Maven", icon: SiApachemaven },
        { name: "Linux", icon: SiLinux },

        // Editors & Data
        { name: "VS Code", icon: VscVscode },
        { name: "JetBrains Tools", icon: SiJetbrains },

        // Data & Design
        { name: "Jupyter", icon: SiJupyter },
        { name: "Figma", icon: SiFigma },
      ],
    },
    {
      title: "Core Concepts",
      icon: BookOpen,
      skills: [
        {
          name: "Algorithms & Data Structures",
          shortName: "Algorithms",
          icon: TbBinaryTree,
        },
        {
          name: "Database Design",
          shortName: "DB Design",
          icon: FaDatabase,
          nameFull: "Database Design",
        },
        {
          name: "Object-Oriented Programming",
          shortName: "OOP",
          icon: BiCodeBlock,
        },
        { name: "Functional Programming", shortName: "Functional Prog.", icon: BiCodeBlock },
        {
          name: "Concurrency & Parallelism",
          shortName: "Concurrency",
          icon: AiOutlineSync,
        },
        { name: "Networking", icon: TbNetwork },
        { name: "Architecture", icon: TbCpu2 },
        { name: "Security", icon: TbLock },
      ],
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and knowledge areas
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={categoryIndex}
                className={`transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${categoryIndex * 100}ms` }}
              >
                <div className="h-full p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List with Icons */}
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={skillIndex}
                          className="flex items-center gap-3 px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-linear-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all duration-300 cursor-default group"
                          title={skill.name}
                        >
                          <SkillIcon className="text-lg shrink-0 group-hover:scale-110 transition-transform" />
                          <div
                            className="flex items-center"
                            aria-label={skill.name}
                          >
                            <span className="text-sm font-semibold">
                              {skill.shortName ? skill.shortName : skill.name}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-gray-600 dark:text-gray-400 italic">
            And much more! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
