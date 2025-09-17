"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { useCallback } from "react";
import heroData from "../data/hero.json";

export const HeroSection = () => {
  // Smooth scroll function that doesn't change URL
  const scrollToSection = useCallback((targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  const handleScrollClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    scrollToSection(targetId);
  };

  const { hero } = heroData;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Animated background */}
      <div className="absolute inset-0 hero-bg"></div>
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>

      {/* Dynamic floating elements */}
      {hero.floatingElements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.position} ${element.size} bg-${element.color} rounded-full blur-3xl ${element.animation}`}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Main heading */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight"
            >
              {hero.headline.primary}
              <br />
              <span className="text-gradient bg-gradient-to-r from-kharon-purple via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                {hero.headline.secondary}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              {hero.subheadline}
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <motion.a
              href={hero.buttons.primary.url}
              target={hero.buttons.primary.external ? "_blank" : undefined}
              rel={
                hero.buttons.primary.external
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group relative px-8 py-4 bg-gradient-to-r from-kharon-purple to-kharon-purple-dark text-white rounded-full font-semibold text-lg overflow-hidden"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-kharon-purple-dark to-kharon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3">
                {hero.buttons.primary.text}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </div>
            </motion.a>

            <motion.a
              href={`#${hero.buttons.secondary.targetId}`}
              onClick={(e) =>
                handleScrollClick(e, hero.buttons.secondary.targetId)
              }
              className="group px-8 py-4 border-2 border-gray-300 dark:border-dark-border text-gray-700 dark:text-gray-300 rounded-full font-semibold text-lg hover:border-kharon-purple hover:text-kharon-purple transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {hero.buttons.secondary.text}
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="pt-12"
          >
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              {hero.trustIndicators.title}
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400 dark:text-gray-500">
              {hero.trustIndicators.items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 bg-${item.color}-500 rounded-full animate-pulse`}
                  ></div>
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero Illustration - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="pt-20"
          >
            <div className="relative mx-auto max-w-6xl">
              {/* Main illustration container with enhanced animations */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Animated background glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-kharon-purple/20 via-blue-500/20 to-purple-600/20 rounded-4xl blur-3xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Main container */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-white/10 to-white/5 dark:from-white/5 dark:to-white/2 rounded-4xl glass-effect overflow-hidden border border-white/20 dark:border-white/10">
                  {/* Animated border gradient */}
                  <motion.div
                    className="absolute inset-0 rounded-4xl"
                    style={{
                      background:
                        "linear-gradient(45deg, transparent 30%, rgba(181, 50, 190, 0.3) 50%, transparent 70%)",
                      backgroundSize: "200% 200%",
                    }}
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Image container */}
                  <motion.div
                    className="relative w-full h-full p-4 sm:p-8"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                  >
                    <motion.div
                      className="relative w-full h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                    >
                      <Image
                        src={hero.illustration.imagePath}
                        alt={hero.illustration.alt}
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Enhanced floating elements with more sophisticated animations */}
              <motion.div
                className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="w-8 h-8 bg-white rounded-lg flex items-center justify-center"
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center shadow-xl"
                animate={{
                  y: [0, 15, 0],
                  x: [0, 10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center"
                  animate={{ scale: [1, 0.8, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-6 h-6 bg-blue-500 rounded-xl"></div>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute top-1/4 -right-12 w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <motion.div
                  className="w-7 h-7 bg-white rounded-xl flex items-center justify-center"
                  animate={{ rotate: [0, -180, -360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-4 h-4 bg-purple-500 rounded-lg"></div>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute top-1/3 -left-10 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-md"
                animate={{
                  y: [0, -25, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="w-6 h-6 bg-white rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                </motion.div>
              </motion.div>

              {/* Particle effects */}
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-kharon-purple rounded-full"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${10 + i * 12}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* Subtle grid pattern overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                    linear-gradient(rgba(181, 50, 190, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(181, 50, 190, 0.1) 1px, transparent 1px)
                  `,
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};
