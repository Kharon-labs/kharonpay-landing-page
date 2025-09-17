"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import supportedAssetsData from "../data/supportedAssets.json";

export const SupportedAssetsSection = () => {
  const { supportedAssets } = supportedAssetsData;

  const getStatusStyles = (statusType: string) => {
    const baseClasses = "px-4 py-2 rounded-full text-sm font-medium";

    if (statusType === "live") {
      return `${baseClasses} bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400`;
    } else if (statusType === "coming-soon") {
      return `${baseClasses} bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400`;
    }

    return baseClasses;
  };

  return (
    <section
      id="supported-assets"
      className="py-32 bg-white dark:bg-dark-bg relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            {supportedAssets.heading.main}{" "}
            <span className="gradient-text relative">
              {supportedAssets.heading.highlight}
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-kharon-purple to-kharon-purple-dark rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {supportedAssets.heading.subheading}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Cryptocurrencies */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">
              {supportedAssets.cryptocurrencies.title}
            </h3>
            <div className="space-y-6">
              {supportedAssets.cryptocurrencies.items.map((crypto, index) => (
                <motion.div
                  key={crypto.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    x: 8,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  className="group flex items-center justify-between p-6 rounded-2xl bg-gray-50 dark:bg-dark-surface border border-gray-100 dark:border-dark-border hover:border-kharon-purple/30 transition-all duration-200"
                >
                  <div className="flex items-center space-x-4">
                    {/* Crypto Logo */}
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center bg-white dark:bg-dark-bg shadow-sm"
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2, ease: "easeOut" },
                      }}
                    >
                      <div className="relative w-8 h-8">
                        <Image
                          src={crypto.logo}
                          alt={`${crypto.name} logo`}
                          fill
                          className="object-contain"
                          sizes="32px"
                        />
                      </div>
                    </motion.div>

                    <div>
                      <div className="font-bold text-lg text-gray-900 dark:text-white">
                        {crypto.name}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {crypto.description}
                      </div>
                    </div>
                  </div>

                  <motion.span
                    className={getStatusStyles(crypto.statusType)}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2, ease: "easeOut" },
                    }}
                  >
                    {crypto.status}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fiat Currencies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">
              {supportedAssets.fiatCurrencies.title}
            </h3>
            <div className="space-y-6">
              {supportedAssets.fiatCurrencies.items.map((fiat, index) => (
                <motion.div
                  key={fiat.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    x: -8,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  className="group flex items-center justify-between p-6 rounded-2xl bg-gray-50 dark:bg-dark-surface border border-gray-100 dark:border-dark-border hover:border-kharon-purple/30 transition-all duration-200"
                >
                  <div className="flex items-center space-x-4">
                    {/* Flag Container */}
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-card dark:to-dark-border rounded-xl flex items-center justify-center text-2xl"
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2, ease: "easeOut" },
                      }}
                    >
                      {fiat.flag}
                    </motion.div>

                    <div>
                      <div className="font-bold text-lg text-gray-900 dark:text-white">
                        {fiat.name}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {fiat.description}
                      </div>
                    </div>
                  </div>

                  <motion.span
                    className={getStatusStyles(fiat.statusType)}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2, ease: "easeOut" },
                    }}
                  >
                    {fiat.status}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gray-100 dark:bg-dark-surface rounded-full">
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {supportedAssets.roadmap.text}
            </div>
            <div className="flex space-x-1">
              {Array.from({
                length: supportedAssets.roadmap.animationDots,
              }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-kharon-purple rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
