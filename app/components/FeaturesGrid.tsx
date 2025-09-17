"use client";

import { motion } from "framer-motion";
import { Zap, Star, Shield, Smartphone } from "lucide-react";

export const FeaturesGrid = () => {
  const features = [
    {
      icon: <Zap size={24} className="text-kharon-purple" />,
      title: "Instant Transfers",
      description: "Direct bank integration for immediate settlements",
    },
    {
      icon: <Star size={24} className="text-kharon-purple" />,
      title: "Competitive Rates",
      description: "Live market rates with transparent pricing",
    },
    {
      icon: <Shield size={24} className="text-kharon-purple" />,
      title: "Maximum Security",
      description: "Built on StarkNet blockchain with bank-grade encryption",
    },
    {
      icon: <Smartphone size={24} className="text-kharon-purple" />,
      title: "Mobile Ready",
      description: "Full-featured mobile experience optimized for on-the-go",
    },
  ];

  return (
    <section
      id="features"
      className="py-32 bg-gray-50 dark:bg-dark-surface relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-kharon-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Why Choose <span className="gradient-text">Kharon Pay?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the future of crypto-to-fiat conversions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group text-center"
            >
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-kharon-purple/10 to-kharon-purple-dark/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                &lt;2min
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Average Settlement Time
              </div>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Customer Support
              </div>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                99.9%
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Uptime Guarantee
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
