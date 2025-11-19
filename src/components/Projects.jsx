import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { ExternalLink } from "lucide-react";

function Projects() {
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

  const projects = [
    // Systems / Backend
    {
      title: "Document Management System (DMS)",
      description:
        "A Docker-based database system Engineered in Java for critical hospital records, implementing SQLite and custom TSV backends with performance benchmarking. TSV achieved 12x faster serialization and 38% better space efficiency than CBOR. ",
      technologies: ["Java", "Docker", "SQLite"],
      github: "https://github.com/WWeber005/DataBase_Docker",
      demo: "/videos/dms.webm",
      image: "/images/dms.png",
    },
    {
      title: "Distributed Key-Value Store",
      description:
        "A distributed key-value store built in C with consistent hashing (SHA-1), inspired by Amazon Dynamo. Features configurable quorum-based replication (N, W, R) and peer-to-peer architecture with virtual nodes for fault tolerance.",
      technologies: ["C", "Concurrency", "Network"],
      github: "https://github.com/ilyes1020/distributed-key-value-store",
      demo: null,
      image: "/images/dkvs.png",
    },

    // Web / Applications
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing projects, skills, and experience. Built with React and Tailwind CSS, featuring dark mode, smooth animations, and an elegant UI/UX design.",
      technologies: ["React", "Tailwind CSS", "Web Development"],
      github: "https://github.com/ilyes1020/portfolio",
      demo: "https://ilyes1020.github.io",
      image: "/images/portfolio.png",
    },
    {
      title: "Functional Connect 4",
      description:
        "A real-time multiplayer Connect 4 web application in Scala implemented using functional programming principles. Features turn timers, win detection, persistent score tracking, and complete full-stack integration.",
      technologies: ["Scala", "Functional Programming", "Web Development"],
      github: "https://github.com/ilyes1020/functional-connect-4",
      demo: "https://cs214-apps.epfl.ch/app/app14",
      image: "/images/connect4.png",
    },

    // Games
    {
      title: "ChaCuN",
      description:
        "A complete multiplayer tile-based game built from scratch in Java using JavaFX, inspired by Carcassonne. Designed core gameplay systems including tile placement, player turns, and scoring logic using advanced Object-Oriented Programming patterns.",
      technologies: ["Java", "JavaFX", "OOP"],
      github: "https://github.com/ilyes1020/chacun",
      demo: null,
      image: "/images/chacun.png",
    },
    {
      title: "ICMon",
      description:
        "A tile-based RPG developed in Java inspired by Pokémon. Implemented core mechanics including movement, battles and NPC interactions using Object-Oriented Programming principles.",
      technologies: ["Java", "OOP"],
      github: "https://github.com/ilyes1020/icmon",
      demo: "/videos/icmon.mp4",
      image: "/images/icmon.png",
    }
  ];

  return (
    <div
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my projects that showcase my skills and passion for
            development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want to see more of my work?
          </p> */}
          <a
            href="https://github.com/ilyes1020"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
          >
            <span>View More on GitHub</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
