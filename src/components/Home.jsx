import { ArrowDown, Github, Linkedin, Mail, Code2 } from "lucide-react";
import { useEffect, useState } from "react";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-2">
              <p className="text-cyan-400 dark:text-cyan-400 text-lg font-medium">
                Hi, my name is
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
                Ilyes Rouibi
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-600 dark:text-gray-400">
                Software Engineer
              </h2>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
              I'm a Computer Science student at{" "}
              <span className="text-red-600 dark:text-red-400 font-semibold">
                EPFL
              </span>
              , currently on exchange at{" "}
              <span className="text-cyan-500 font-semibold">KTH</span>.
              Passionate about software engineering and building efficient
              solutions to complex problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection("#projects")}
                className="px-8 py-3 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="px-8 py-3 border-2 border-cyan-500 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-gray-900 transition-all duration-300"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/ilyes1020"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ilyes-rouibi-60a1a8303/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:irouibi@gmail.com"
                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Animated background circles */}
              <div className="absolute inset-0 bg-linear-to-br from-cyan-400/20 to-blue-600/20 dark:from-cyan-400/10 dark:to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>

              {/* Code icon with animation */}
              <div className="relative flex items-center justify-center h-full">
                <div className="p-12 bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-500">
                  <Code2
                    size={200}
                    className="text-cyan-500 dark:text-cyan-400 animate-float"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 dark:bg-cyan-400/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600/20 dark:bg-blue-500/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={() => scrollToSection("#about")}
          className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300 group"
          aria-label="Scroll to about section"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ArrowDown
            size={24}
            className="animate-bounce group-hover:text-cyan-500"
          />
        </button>
      </div>
    </div>
  );
}

export default Home;
