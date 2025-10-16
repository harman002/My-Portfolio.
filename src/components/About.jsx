import { motion } from "framer-motion";
import { GraduationCap, Code, Trophy } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-20 bg-gray-950"
    >
      {/* Left Image */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/harman1.png" 
          alt="Harman Deep"
          className="w-72 h-72 md:w-96 md:h-96 rounded-2xl border-4 border-gray-700 shadow-xl object-cover"
        />
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-100">
          About <span className="text-blue-400">Me</span>
        </h2>

        <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-xl">
          I’m <span className="text-blue-400">Harman Deep</span>, a 
          <span className="text-blue-400"> Computer Science student </span> and an 
          aspiring <span className="text-blue-400">Software Engineer</span>.  
          <br /><br />
          My journey started with curiosity for technology, and now I focus on 
          creating <span className="text-blue-400">modern web applications</span>, 
          solving <span className="text-blue-400">DSA problems</span>, and 
          learning <span className="text-blue-400">backend development </span> 
          using Node.js and MongoDB.  
          <br /><br />
          Beyond coding, I’m passionate about 
          <span className="text-blue-400"> problem-solving, design, and continuous growth </span>.  
          I believe in building solutions that not only look great but also 
          <span className="text-blue-400"> perform efficiently at scale</span>.
        </p>

        {/* Quick Highlights */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <motion.div
            className="bg-gray-900 border border-gray-700 p-6 rounded-2xl shadow-lg flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <GraduationCap className="text-blue-400 w-10 h-10 mb-3" />
            <h3 className="text-xl font-semibold text-white">B.Tech CSE</h3>
            <p className="text-gray-400 text-sm mt-2">
              Pursuing Computer Science with focus on Web & DSA
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-900 border border-gray-700 p-6 rounded-2xl shadow-lg flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Code className="text-blue-400 w-10 h-10 mb-3" />
            <h3 className="text-xl font-semibold text-white">Frontend + Backend</h3>
            <p className="text-gray-400 text-sm mt-2">
              React, Tailwind, Node.js, Express, MongoDB
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-900 border border-gray-700 p-6 rounded-2xl shadow-lg flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Trophy className="text-blue-400 w-10 h-10 mb-3" />
            <h3 className="text-xl font-semibold text-white">DSA Enthusiast</h3>
            <p className="text-gray-400 text-sm mt-2">
              Practicing on LeetCode & GFG to strengthen problem solving
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
