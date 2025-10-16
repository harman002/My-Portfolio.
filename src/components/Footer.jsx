export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-400 py-6 text-center">
      <p>
        © {new Date().getFullYear()} <span className="text-blue-400">Harman Deep</span>. 
        All rights reserved.
      </p>
      <p className="mt-2 text-sm">
        Built with ❤️ using React, TailwindCSS & Framer Motion
      </p>
    </footer>
  );
}
