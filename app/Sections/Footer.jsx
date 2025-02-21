import { Facebook, Github, Linkedin, Twitter, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:max-w-5xl">
        {/* Logo / Name */}
        <div className="text-sm font-semibold font-decaydence"> Onaneye Joseph</div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 mt-4 md:mt-0">
          <a href="#about" className="hover:text-white transition font-montserrat text-md">About</a>
          <a href="#projects" className="hover:text-white transition font-montserrat text-md">Projects</a>
          <a href="#contact" className="hover:text-white transition font-montserrat text-md">Contact</a>
        </nav>

        {/* Social Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/onaneye" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <Facebook size={24} />
          </a>
          <a href="https://twitter.com/onaneye2" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <X size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-4 font-montserrat">
        © {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </div>
    </footer>
  );
}
