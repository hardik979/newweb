import { motion } from "framer-motion";
import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-30 backdrop-blur-lg text-white font-montserrat py-4 px-6 flex items-center justify-between z-50 shadow-md">
      <h1 className="text-2xl font-bold">Hardik Web Works</h1>
      <div className="hidden md:flex space-x-6">
        <a href="#home" className="hover:text-blue-400 transition">
          Home
        </a>
        <a href="#services" className="hover:text-blue-400 transition">
          Services
        </a>
        <a href="#about" className="hover:text-blue-400 transition">
          About
        </a>
        <a href="#contact" className="hover:text-blue-400 transition">
          Contact
        </a>
      </div>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Menu size={28} />
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white bg-opacity-30 backdrop-blur-lg flex flex-col items-center py-4 md:hidden">
          <a href="#home" className="py-2 hover:text-blue-400 transition">
            Home
          </a>
          <a href="#services" className="py-2 hover:text-blue-400 transition">
            Services
          </a>
          <a href="#about" className="py-2 hover:text-blue-400 transition">
            About
          </a>
          <a href="#contact" className="py-2 hover:text-blue-400 transition">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  return (
    <div
      id="home"
      className="relative h-screen w-full bg-custom-gradient flex items-center justify-center overflow-hidden px-6 md:px-16"
    >
      <Navbar />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30" />
      {/* Hero Content */}
      <div className="relative flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto text-white">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center md:text-left max-w-lg"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Elevate Your Digital Presence
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-80">
            Hardik Web Works – We craft seamless, modern, and high-performance
            digital solutions for web and mobile.
          </p>

          {/* Get Started Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:opacity-80 transition"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white"
        >
          <img
            src="/w.png"
            alt="Agency Showcase"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
