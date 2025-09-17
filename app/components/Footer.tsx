"use client";

import { Twitter, Github, FileText, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-kharon-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold mb-4 gradient-text">Kharon Pay</div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              From Crypto to Cash in a Click. The fastest and most secure way to convert cryptocurrency to local currency.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 mb-2">
              <MapPin size={16} />
              <span className="text-sm">Lagos, Nigeria</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail size={16} />
              <a href="mailto:support@kharonpay.com" className="text-sm hover:text-white transition-colors">
                support@kharonpay.com
              </a>
            </div>
          </motion.div>
          
          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-6">Product</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                { label: "How It Works", href: "#how-it-works" },
                { label: "Features", href: "#features" },
                { label: "Supported Assets", href: "#supported-assets" },
                { label: "FAQ", href: "#faq" }
              ].map((link, index) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Compliance", href: "#" },
                { label: "Security", href: "#" }
              ].map((link, index) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-6">Connect</h3>
            <div className="flex space-x-4 mb-6">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Github, href: "#", label: "GitHub" },
                { icon: FileText, href: "#", label: "Blog" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-kharon-purple transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
            
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                24/7 Support Available
              </div>
              <div>Response time: &lt; 2 hours</div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Kharon Pay by Kharon Labs. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Built on StarkNet</span>
              <span>•</span>
              <span>Secured by Design</span>
              <span>•</span>
              <span>Made in Africa</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};