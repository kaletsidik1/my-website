// @ts-nocheck
//@ts-ignore
import { motion, AnimatePresence } from "framer-motion"; //@ts-ignore
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { Project } from "../data/types"; //@ts-ignore
import { useEffect } from "react"; 

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            style={{ backdropFilter: 'blur(5px)' }}
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-800 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto relative focus:outline-none"
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
              >
                <FaTimes size={24} />
              </button>

              {/* Project image */}
              <div className="relative h-64 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 z-[1]" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-[2]">
                  <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700 bg-opacity-80 text-gray-100 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-8">
                {/* Overview */}
                <section>
                  <h3 className="text-xl font-semibold text-white mb-3">Overview</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  {project.detailedDescription && (
                    <p className="text-gray-300 leading-relaxed mt-3">
                      {project.detailedDescription}
                    </p>
                  )}
                </section>

                {/* Tech Stack */}
                <section>
                  <h3 className="text-xl font-semibold text-white mb-3">Tech Stack</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.techStack?.map((tech, index) => (
                      <div key={index} className="bg-gray-700 bg-opacity-50 p-4 rounded-lg">
                        <h4 className="font-medium text-white mb-1">{tech.name}</h4>
                        <p className="text-gray-300 text-sm">{tech.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Key Features */}
                <section>
                  <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {project.keyFeatures?.map((feature, index) => (
                      <li key={index} className="text-gray-300">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Technical Challenges */}
                <section>
                  <h3 className="text-xl font-semibold text-white mb-3">Technical Challenges</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {project.technicalChallenges?.map((challenge, index) => (
                      <li key={index} className="text-gray-300">
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Links */}
                <section className="flex space-x-6 pt-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <FaExternalLinkAlt size={18} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <FaGithub size={20} />
                    <span>View Code</span>
                  </a>
                </section>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
