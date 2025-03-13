import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NavigationHeader = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Discover" },
    { path: "/events", label: "Gatherings" },
    { path: "/about", label: "Our Story" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/80 backdrop-blur-md shadow-soft z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-3 group transition-all duration-300"
          >
            <Sparkles className="h-8 w-8 text-primary-600 group-hover:text-accent-500 transition-colors" />
            <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              CommunionHub
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium transition-all duration-300 hover:text-primary-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                  location.pathname === link.path
                    ? "text-primary-600 after:bg-primary-600 after:w-full"
                    : "text-gray-600 after:bg-primary-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default NavigationHeader;
