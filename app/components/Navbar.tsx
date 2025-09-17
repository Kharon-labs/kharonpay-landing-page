"use client";

import { motion } from "framer-motion";
import { ExternalLink, Menu, X } from "lucide-react";
import { useState, useCallback } from "react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import navigationData from "../data/navigation.json";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll function that doesn't change URL
  const scrollToSection = useCallback((targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    scrollToSection(targetId);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo + Text */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image
                src={navigationData.brand.logoPath}
                alt={navigationData.brand.logoAlt}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-xl font-bold gradient-text">
              {navigationData.brand.brandText}
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationData.navigationLinks.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-gray-700 dark:text-gray-300 hover:text-kharon-purple dark:hover:text-kharon-purple transition-colors font-medium text-sm"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <ThemeToggle />

            <motion.a
              href={navigationData.cta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-kharon-purple to-kharon-purple-dark text-white px-5 py-2 rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {navigationData.cta.text}
              <ExternalLink size={14} />
            </motion.a>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-kharon-purple transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200 dark:border-dark-border"
          >
            <div className="flex flex-col space-y-4">
              {navigationData.navigationLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="text-gray-700 dark:text-gray-300 hover:text-kharon-purple font-medium py-2 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={navigationData.cta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-kharon-purple to-kharon-purple-dark text-white px-6 py-3 rounded-full font-semibold mt-4"
              >
                {navigationData.cta.text}
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
