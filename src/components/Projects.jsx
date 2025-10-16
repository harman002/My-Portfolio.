import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Job Portal",
      description:
        "A full-stack MERN job portal with role-based authentication, job posting, and real-time filtering.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/",
      live: "https://example.com",
    },
    {
      title: "Chat Application",
      description:
        "A real-time chat app with Supabase, Next.js, and Tailwind. Includes filters, search, and labels.",
      tech: ["Next.js", "Supabase", "TailwindCSS"],
      github: "https://github.com/",
      live: "https://example.com",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern and responsive portfolio built with React, Tailwind, and Framer Motion animations.",
      tech: ["React", "TailwindCSS", "Framer Motion"],
      github: "https://github.com/",
      live: "https://example.com",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-950 px-6 py-20 text-gray-200"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-100">
          My <span className="text-blue-400">Projects</span>
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          Here are some of the projects I have worked on, showcasing my skills in
          web development and problem-solving.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300 flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-full text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            
          </motion.div>
        ))}
      </div>
    </section>
  );
}
