"use client";

import { motion } from "framer-motion";
import {
  UserCheck,
  Coins,
  Calculator,
  Building2,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Play,
} from "lucide-react";
import Image from "next/image";
import howItWorksData from "../data/howItWorks.json";

export const HowItWorksSection = () => {
  const { howItWorks } = howItWorksData;

  const getIcon = (iconName: string, size: number = 32) => {
    const iconProps = { size, className: "text-white" };
    const icons = {
      "user-check": <UserCheck {...iconProps} />,
      coins: <Coins {...iconProps} />,
      calculator: <Calculator {...iconProps} />,
      bank: <Building2 {...iconProps} />,
    };
    return icons[iconName as keyof typeof icons] || <Sparkles {...iconProps} />;
  };

  return (
    <section
      id="how-it-works"
      className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg relative overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-kharon-purple/10 via-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-purple-500/10 via-kharon-purple/5 to-transparent rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-r from-green-500/5 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              How It{" "}
              <span className="gradient-text relative">
                {howItWorks.heading.highlight}
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-kharon-purple to-kharon-purple-dark rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            {howItWorks.heading.subheading}
          </motion.p>
        </motion.div>

        {/* Enhanced Steps Flow with Stacked Design */}
        <div className="relative mb-24">
          {/* Flowing connection line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-transparent via-kharon-purple/30 to-transparent"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
          </div>

          <div className="space-y-24 lg:space-y-32">
            {howItWorks.steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Step Content */}
                <div
                  className={`flex-1 text-center ${
                    index % 2 === 0
                      ? "lg:text-left lg:pr-8"
                      : "lg:text-right lg:pl-8"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Step number and title */}
                    <div
                      className={`flex items-center gap-4 mb-6 ${
                        index % 2 === 0
                          ? "justify-center lg:justify-start"
                          : "justify-center lg:justify-end"
                      }`}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-kharon-purple to-kharon-purple-dark rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {step.id}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>

                    <p
                      className={`text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-lg ${
                        index % 2 === 0
                          ? "mx-auto lg:mx-0"
                          : "mx-auto lg:ml-auto lg:mr-0"
                      }`}
                    >
                      {step.description}
                    </p>

                    {/* Enhanced Details */}
                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? -30 : 30,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.5 + index * 0.1 + detailIndex * 0.1,
                            duration: 0.5,
                          }}
                          viewport={{ once: true }}
                          className={`flex items-center gap-3 ${
                            index % 2 === 0
                              ? "justify-center lg:justify-start"
                              : "justify-center lg:justify-end"
                          }`}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="flex-shrink-0"
                          >
                            <CheckCircle size={18} className="text-green-500" />
                          </motion.div>
                          <span className="text-gray-600 dark:text-gray-300 font-medium">
                            {detail}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced Icon Container */}
                <div className="flex-shrink-0">
                  <motion.div
                    className="relative"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4 + index * 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: true }}
                  >
                    {/* Animated background glow */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl blur-xl opacity-30`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                    />

                    {/* Main icon container */}
                    <motion.div
                      className={`relative w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center shadow-2xl`}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      {getIcon(step.icon, 48)}

                      {/* Floating particles */}
                      {Array.from({ length: 3 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-white rounded-full opacity-60"
                          style={{
                            top: `${20 + i * 20}%`,
                            right: `${10 + i * 15}%`,
                          }}
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0.6, 1, 0.6],
                            scale: [1, 1.5, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3 + index * 0.1,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Step connector dot */}
                    <motion.div
                      className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white dark:bg-dark-bg rounded-full border-4 border-kharon-purple shadow-lg"
                      style={{
                        left: index % 2 === 0 ? "100%" : "-12px",
                        marginLeft: index % 2 === 0 ? "2rem" : "0",
                      }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.2, type: "spring" }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Illustration with enhanced design */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Enhanced container with animated border */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-kharon-purple/20 via-blue-500/20 to-kharon-purple/20 rounded-4xl blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative aspect-[16/8] bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-dark-surface/80 dark:to-dark-card/80 rounded-4xl glass-effect overflow-hidden border border-white/30 dark:border-white/10">
                <div className="relative w-full h-full p-8 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <motion.div
                      className="w-24 h-24 mx-auto bg-gradient-to-br from-kharon-purple to-kharon-purple-dark rounded-3xl flex items-center justify-center shadow-xl"
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Play size={40} className="text-white ml-1" />
                    </motion.div>
                    <div className="text-gray-600 dark:text-gray-300">
                      <div className="text-xl font-bold mb-3">
                        {howItWorks.illustration.placeholder.title}
                      </div>
                      <div className="text-base max-w-md mx-auto leading-relaxed">
                        {howItWorks.illustration.placeholder.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced floating elements */}
            <motion.div
              className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-xl"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <CheckCircle size={24} className="text-white" />
            </motion.div>

            <motion.div
              className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl"
              animate={{
                y: [0, 8, 0],
                x: [0, 4, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight size={24} className="text-white" />
            </motion.div>

            <motion.div
              className="absolute top-1/4 -right-8 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Sparkles size={20} className="text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative bg-gradient-to-br from-kharon-purple/5 via-blue-500/5 to-purple-600/5 rounded-4xl p-8 lg:p-16 border border-kharon-purple/10 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                  radial-gradient(circle at 25% 25%, rgba(181, 50, 190, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)
                `,
                }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                {howItWorks.cta.title}
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                {howItWorks.cta.description}
              </p>

              <motion.a
                href={howItWorks.cta.button.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-gradient-to-r from-kharon-purple to-kharon-purple-dark text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {howItWorks.cta.button.text}
                <ArrowRight size={24} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
