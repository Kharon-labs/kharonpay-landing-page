"use client";

import { motion } from "framer-motion";
import { Zap, Star, Shield, Smartphone } from "lucide-react";
import whyChooseUsData from "../data/whyChooseUs.json";

export const FeaturesGrid = () => {
  const { whyChooseUs } = whyChooseUsData;

  const getIcon = (iconName: string, size: number = 24) => {
    const iconProps = { size, className: "text-kharon-purple" };
    const icons = {
      zap: <Zap {...iconProps} />,
      star: <Star {...iconProps} />,
      shield: <Shield {...iconProps} />,
      smartphone: <Smartphone {...iconProps} />,
    };
    return icons[iconName as keyof typeof icons] || <Zap {...iconProps} />;
  };

  return (
    <section
      id="features"
      className="py-32 bg-gray-50 dark:bg-dark-surface relative overflow-hidden"
    >
      {/* Background decoration */}
      {whyChooseUs.backgroundElements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.position} ${element.size} bg-${element.color} rounded-full ${element.animation}`}
        />
      ))}

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
            {whyChooseUs.heading.main}{" "}
            <span className="gradient-text">
              {whyChooseUs.heading.highlight}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {whyChooseUs.heading.subheading}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group text-center"
            >
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-kharon-purple/10 to-kharon-purple-dark/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {getIcon(feature.icon)}
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

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
