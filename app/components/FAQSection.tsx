"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import faqData from "../data/faq.json";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const {
    heading,
    subheading,
    faqs,
    contactCta,
    backgroundElements,
    animations,
  } = faqData;

  return (
    <section
      id="faq"
      className="py-32 bg-gray-50 dark:bg-dark-surface relative overflow-hidden"
    >
      {/* Background decoration */}
      {backgroundElements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.position} ${element.size} bg-${element.color} rounded-full blur-3xl`}
        />
      ))}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: animations.headerDelay }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            {heading.main}{" "}
            <span className="gradient-text relative">
              {heading.highlight}
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-kharon-purple to-kharon-purple-dark rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {subheading}
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq: FAQ, index: number) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * animations.itemDelay,
              }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full p-6 text-left bg-white dark:bg-dark-bg rounded-2xl border border-gray-100 dark:border-dark-border hover:border-kharon-purple/30 transition-all duration-300"
                whileHover={{ y: -2 }}
                transition={{ duration: animations.hoverTransition }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gray-100 dark:bg-dark-surface rounded-full flex items-center justify-center group-hover:bg-kharon-purple group-hover:text-white transition-colors duration-300">
                      {openFAQ === index ? (
                        <Minus size={16} />
                      ) : (
                        <Plus size={16} />
                      )}
                    </div>
                  </div>
                </div>
              </motion.button>

              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: animations.expandDuration }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 bg-white dark:bg-dark-bg rounded-b-2xl -mt-2 border-l border-r border-b border-gray-100 dark:border-dark-border">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: animations.ctaDelay }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white dark:bg-dark-bg rounded-full border border-gray-200 dark:border-dark-border">
            <span className="text-gray-600 dark:text-gray-400">
              {contactCta.text}
            </span>
            <a
              href={`mailto:${contactCta.email}`}
              className="text-kharon-purple font-semibold hover:underline"
            >
              {contactCta.linkText}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
