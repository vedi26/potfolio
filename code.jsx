import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const AnimatedBackground = () => (
  <div className="fixed top-0 left-0 w-full h-full bg-gray-900 overflow-hidden">
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-50"
        initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, opacity: 0 }}
        animate={{ y: [Math.random() * window.innerHeight, window.innerHeight], opacity: [0.3, 0] }}
        transition={{ duration: Math.random() * 5 + 3, repeat: Infinity }}
      />
    ))}
  </div>
);

const Home = () => (
  <motion.div
    className="min-h-screen text-white flex flex-col items-center justify-center p-6 relative"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-6xl font-extrabold mb-4 transition-transform transform hover:scale-105">Welcome to My Portfolio</h1>
    <p className="text-xl text-center max-w-2xl mb-6 transition-opacity duration-500 hover:opacity-80">
      Explore my journey, skills, and projects.
    </p>
    <Link to="/about" className="text-blue-400 hover:underline text-lg transition-transform transform hover:scale-110">
      Learn More About Me
    </Link>
  </motion.div>
);

const About = () => (
  <motion.div
    className="min-h-screen text-white flex flex-col items-center justify-center p-6 relative"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-6xl font-extrabold mb-4 transition-transform transform hover:scale-105">About Me</h1>
    <p className="text-xl text-center max-w-2xl mb-6 transition-opacity duration-500 hover:opacity-80">
      Hi, I'm Vediyappan V, a Computer Science student with a passion for ethical hacking. Currently in my 3rd year at SSM College.
    </p>
    <p className="text-lg text-center max-w-xl mb-6 transition-opacity duration-500 hover:opacity-80">
      I secured a central government job in the post office but took leave to complete my graduation. I’ve participated in many symposiums and workshops to develop my abilities. I enjoy watching movies, web series, and playing video games.
    </p>
    <Link to="/contact" className="text-blue-400 hover:underline text-lg transition-transform transform hover:scale-110">
      Contact Me
    </Link>
  </motion.div>
);

const Projects = () => (
  <motion.div
    className="min-h-screen text-white flex flex-col items-center justify-center p-6 relative"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-6xl font-extrabold mb-4 transition-transform transform hover:scale-105">My Projects</h1>
    <ul className="text-xl text-center max-w-2xl mb-6 space-y-4">
      <li className="transition-opacity duration-500 hover:opacity-80">🚀 SafeguardAI - A CCTV harassment detection system for workplace safety.</li>
      <li className="transition-opacity duration-500 hover:opacity-80">🎤 AI Sign Language - Converts speech into automatic sign language.</li>
      <li className="transition-opacity duration-500 hover:opacity-80">📏 LiDAR Room Mapping - Calculates room dimensions using 2D LiDAR data.</li>
      <li className="transition-opacity duration-500 hover:opacity-80">🧠 Phonics Kit - A dyslexia-focused pronunciation evaluation assistant.</li>
    </ul>
    <Link to="/" className="text-blue-400 hover:underline text-lg transition-transform transform hover:scale-110">
      Back to Home
    </Link>
  </motion.div>
);

const Contact = () => (
  <motion.div
    className="min-h-screen text-white flex flex-col items-center justify-center p-6 relative"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-6xl font-extrabold mb-4 transition-transform transform hover:scale-105">Contact Me</h1>
    <div className="flex space-x-6 text-4xl">
      <a href="https://x.com/Vediyappan39324?s=09" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="hover:text-blue-400 transition-transform transform hover:scale-110" />
      </a>
      <a href="https://www.instagram.com/vediyappan__v?igsh=MW52MG4xeWN1dTkxag==" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="hover:text-pink-400 transition-transform transform hover:scale-110" />
      </a>
      <a href="mailto:vediv4619@gmail.com">
        <FaEnvelope className="hover:text-red-400 transition-transform transform hover:scale-110" />
      </a>
    </div>
    <Link to="/" className="text-blue-400 hover:underline mt-6 text-lg transition-transform transform hover:scale-110">
      Back to Home
    </Link>
  </motion.div>
);

const Portfolio = () => {
  return (
    <Router>
      <AnimatedBackground />
      <nav className="bg-gray-800 p-4 fixed w-full top-0 flex justify-center space-x-6">
        <Link to="/" className="text-white hover:text-blue-400 text-lg transition-transform transform hover:scale-110">Home</Link>
        <Link to="/about" className="text-white hover:text-blue-400 text-lg transition-transform transform hover:scale-110">About</Link>
        <Link to="/projects" className="text-white hover:text-blue-400 text-lg transition-transform transform hover:scale-110">Projects</Link>
        <Link to="/contact" className="text-white hover:text-blue-400 text-lg transition-transform transform hover:scale-110">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Portfolio;
