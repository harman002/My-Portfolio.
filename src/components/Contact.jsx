import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-950 px-6 py-20 text-gray-200"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-100">
          Let’s <span className="text-blue-400">Connect</span>
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Have a project idea or just want to say hello? Feel free to drop me a
          message, and I’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Info Section */}
        <motion.div
          className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-100 mb-6">Contact Information</h3>
          <ul className="space-y-5 text-gray-300">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>harmandeep7448@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>+91 78141 70416</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>Mohali,Punjab</span>
            </li>
          </ul>

          {/* Socials */}
          <div className="flex gap-6 mt-8">
            <a
              href="https://www.linkedin.com/in/harman-deep-79a9a42a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/harman002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Right Form Section */}
        <motion.div
          className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-100 mb-6">Send a Message</h3>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition-all">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
