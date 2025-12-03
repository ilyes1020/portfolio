import { ExternalLink, Github } from "lucide-react";

function ProjectCard({ project, index, isVisible }) {
  return (
    <div
      className={`group transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="h-full rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col">
        {/* Project Image */}
        <div className="relative h-56 bg-linear-to-br from-cyan-500/20 to-blue-600/20 dark:from-cyan-500/10 dark:to-blue-600/10 overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-6xl font-bold text-gray-300 dark:text-gray-600">
                {project.title.charAt(0)}
              </div>
            </div>
          )}
          {/* Overlay - visible on mobile/tablet, hover effect on desktop */}
          <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-800 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors"
                aria-label="View on GitHub"
              >
                <Github size={20} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-800 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors"
                aria-label="View live demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 flex flex-col grow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 text-xs font-medium bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 rounded-full border border-cyan-500/20 dark:border-cyan-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
