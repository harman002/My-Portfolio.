import { motion } from "framer-motion";
import { Code2, Database, Layout } from "lucide-react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gray-950"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-100 text-center">
        My <span className="text-blue-400">Skills</span>
      </h2>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
        {/* Skill Card */}
        <motion.div
          className="bg-gray-900 border border-gray-700 p-8 rounded-2xl shadow-lg text-center"
          whileHover={{ scale: 1.05 }}
        >
          <Layout className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white">Frontend</h3>
          <p className="text-gray-400 mt-3">
            React, Tailwind CSS, JavaScript, HTML5, CSS3
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-900 border border-gray-700 p-8 rounded-2xl shadow-lg text-center"
          whileHover={{ scale: 1.05 }}
        >
          <Database className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white">Backend</h3>
          <p className="text-gray-400 mt-3">
            Node.js, Express.js, MongoDB, REST APIs
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-900 border border-gray-700 p-8 rounded-2xl shadow-lg text-center"
          whileHover={{ scale: 1.05 }}
        >
          <Code2 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white">Programming</h3>
          <p className="text-gray-400 mt-3">
            C++, Java, Data Structures & Algorithms
          </p>
        </motion.div>
      </div>
    </section>
  );
}
