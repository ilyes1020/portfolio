import { GraduationCap, Code, Lightbulb, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function About() {
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

  return (
    <div
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Image/Visual */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-linear-to-br from-cyan-500/20 to-blue-600/20 dark:from-cyan-500/10 dark:to-blue-600/10 p-4 sm:p-8 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-xl">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img
                    src="/about_photo.JPEG"
                    alt="Ilyes Rouibi"
                    className="w-full h-full rounded-xl object-cover object-[44%_center]"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-blue-600/20 dark:bg-blue-600/10 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>

          {/* Right side - Text */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Hello! Nice to meet you,
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a Computer Science student at EPFL and right now I'm on exchange at KTH. I like digging into
                how things work under the hood, especially systems and low-level
                stuff, but I also enjoy building useful projects end-to-end.
              </p>
              <p>
                I spend a lot of my time writing code and learning better ways
                to design software. I care about clean, readable code and
                getting things to actually work in the real world.
              </p>
              <p>
                Lately I’ve been experimenting with AI/ML tools and exploring
                web projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
