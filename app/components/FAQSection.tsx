"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "How long does it take to receive my money?",
      answer: "Transactions are processed instantly and you'll receive your fiat currency in your bank account within minutes, not hours or days like traditional exchanges."
    },
    {
      question: "What are the fees?",
      answer: "We offer competitive and transparent pricing with no hidden fees. Fees are clearly displayed before you complete any transaction."
    },
    {
      question: "Is Kharon Pay safe to use?",
      answer: "Yes! We're built on StarkNet blockchain for maximum security, use bank-grade encryption, and are fully compliant with local financial regulations."
    },
    {
      question: "Which banks are supported?",
      answer: "We support all major Nigerian banks including GTBank, Access Bank, First Bank, UBA, Zenith Bank, and many more through direct integration."
    },
    {
      question: "How do I get started?",
      answer: "Simply click 'Launch App', create your account, link your bank account, and you're ready to start converting crypto to cash instantly."
    },
    {
      question: "What cryptocurrencies do you support?",
      answer: "Currently we support USDC, USDT, and MTK tokens, with plans to add more popular cryptocurrencies based on user demand."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-gray-50 dark:bg-dark-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-kharon-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Got questions? We've got answers.
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full p-6 text-left bg-white dark:bg-dark-bg rounded-2xl border border-gray-100 dark:border-dark-border hover:border-kharon-purple/30 transition-all duration-300"
                whileHover={{ y: -2 }}
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
                    transition={{ duration: 0.3 }}
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
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white dark:bg-dark-bg rounded-full border border-gray-200 dark:border-dark-border">
            <span className="text-gray-600 dark:text-gray-400">Still have questions?</span>
            <a
              href="mailto:support@kharonpay.com"
              className="text-kharon-purple font-semibold hover:underline"
            >
              Contact Support
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};