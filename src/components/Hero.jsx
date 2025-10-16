import { motion } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      
      {/* Left Content */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-100 leading-tight">
          Hi, I’m <span className="text-blue-400">Harman Deep</span> 👋
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
          A passionate <span className="text-blue-300">Frontend Developer </span> 
          and aspiring <span className="text-blue-300">Software Engineer</span>.  
          I specialize in building <span className="text-blue-400">modern, responsive
          and user-friendly web applications</span>.  
          <br /><br />
          Currently pursuing my <span className="text-blue-400">B.Tech in Computer Science</span>,  
          I am constantly exploring new technologies to enhance my skills.  
          My journey involves crafting beautiful UI, working on backend with 
          <span className="text-blue-400"> Node.js & MongoDB</span>, and solving 
          <span className="text-blue-300"> DSA problems</span> to strengthen my logic. 🚀
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl shadow-lg transition"
          >
            <Download size={20} /> Download Resume
          </a>
          <a
            href="https://github.com/harman002"
            target="_blank"
            className="flex items-center gap-2 border border-gray-600 hover:border-gray-400 px-5 py-3 rounded-xl text-gray-300 hover:text-white transition"
          >
            <Github size={20} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/harman-deep-79a9a42a0/"
            target="_blank"
            className="flex items-center gap-2 border border-gray-600 hover:border-gray-400 px-5 py-3 rounded-xl text-gray-300 hover:text-white transition"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/harman.png" 
          alt="Harman Deep"
          className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-gray-700 shadow-xl object-cover"
        />
      </motion.div>
    </section>
  );
}
