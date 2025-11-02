// @ts-nocheck
'use client'
import { motion } from 'framer-motion';
import {
  SiNextdotjs,
  SiVite,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiTensorflow,
  SiPytorch,
  SiDocker,
} from "react-icons/si";

export default function About() {
  const skills = [
    { Icon: SiNextdotjs, name: "Next.js", color: "text-gray-100", borderColor: "hover:border-gray-300" },
    { Icon: SiVite, name: "Vite", color: "text-blue-400", borderColor: "hover:border-blue-400" },
    { Icon: SiReact, name: "React", color: "text-cyan-400", borderColor: "hover:border-cyan-400" },
    { Icon: SiJavascript, name: "JavaScript", color: "text-yellow-500", borderColor: "hover:border-yellow-500" },
    { Icon: SiMongodb, name: "MongoDB", color: "text-green-500", borderColor: "hover:border-green-500" },
    { Icon: SiTailwindcss, name: "Tailwind", color: "text-teal-400", borderColor: "hover:border-teal-400" },
    { Icon: SiTypescript, name: "TypeScript", color: "text-blue-600", borderColor: "hover:border-blue-600" },
    { Icon: SiTensorflow, name: "TensorFlow", color: "text-yellow-400", borderColor: "hover:border-yellow-400" },
    { Icon: SiPytorch, name: "PyTorch", color: "text-orange-400", borderColor: "hover:border-orange-400" },
    { Icon: SiDocker, name: "Docker", color: "text-blue-400", borderColor: "hover:border-blue-400" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Elements */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        </motion.div>

        {/* Content */}
        <div className="relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text">
              About Me
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Transforming ideas into digital reality through code, creativity and collaboration.
            </p>
          </motion.div>


          <div className="grid md:grid-cols-2 gap-12">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700/50 shadow-xl">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Hey, I&apos;m Kaletsidik Ayalew, a software engineer, AI researcher, and leadership enthusiast who believes technology is most powerful when it serves people. I love transforming ideas into intelligent, meaningful systems - from ML-driven apps and smart automation tools to blockchain and community-centered platforms. My journey has been shaped by curiosity and a commitment to excellence. Whether it’s training models, building full-stack apps, or optimizing workflows, I see each project as an opportunity to create something that genuinely impacts lives.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Beyond coding, I&apos;m a leader at heart - a believer in teamwork, empathy, and purpose-driven innovation. I&apos;ve led clubs, built learning communities, and mentored peers, always striving to create spaces where others can grow and dream bigger. My love for coffee keeps me fueled through long brainstorming nights, while my passion for leadership and learning drives me to take on new challenges fearlessly. For me, success isn’t just about writing clean code - it’s about inspiring others, solving real problems, and leaving every space a little better than I found it.
                </p>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50">
                  <h4 className="text-blue-400 text-lg font-semibold mb-2">Experience</h4>
                  <p className="text-gray-300">3+ Years</p>
                </div>
                <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50">
                  <h4 className="text-blue-400 text-lg font-semibold mb-2">Projects</h4>
                  <p className="text-gray-300">20+ Completed</p>
                </div>
              </div>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700/50 shadow-xl">
                <h3 className="text-2xl font-semibold mb-8 text-center bg-gradient-to-r from-blue-400 to-pink-300 text-transparent bg-clip-text">
                  Technologies I Work With
                </h3>
                <motion.div 
                  className="grid grid-cols-3 sm:grid-cols-4 gap-6"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: { y: 0, opacity: 1 }
                      }}
                      whileHover={{ scale: 1.1 }}
                      className="group flex flex-col items-center gap-2"
                    >
                      <div className={`
                        w-16 h-16 rounded-xl border-2 border-gray-700 
                        flex items-center justify-center transition-all duration-300
                        hover:border-4 ${skill.borderColor}
                        group-hover:shadow-lg group-hover:shadow-blue-500/10
                        bg-gray-800/50 backdrop-blur-sm
                      `}>
                        <skill.Icon
                          className={`
                            ${skill.color} transition-transform duration-300 
                            group-hover:scale-125
                          `}
                          size={28}
                        />
                      </div>
                      <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}