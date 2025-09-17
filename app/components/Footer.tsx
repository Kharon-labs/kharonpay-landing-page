"use client";

import React from "react";
import { Twitter, Github, FileText, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import footerData from "../data/footer.json";

interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  id: string;
  links?: FooterLink[];
  socialLinks?: SocialLink[];
  supportInfo?: {
    availability: string;
    responseTime: string;
    statusIndicator: {
      color: string;
      animation: string;
    };
  };
}

const iconMap = {
  twitter: Twitter,
  github: Github,
  "file-text": FileText,
  mail: Mail,
  "map-pin": MapPin,
};

export const Footer = () => {
  const { brand, sections, footer, backgroundElements, animations } =
    footerData;

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      {backgroundElements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.position} ${element.size} bg-${element.color} rounded-full blur-3xl`}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: animations.duration,
              delay: animations.brandDelay,
            }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold mb-4 gradient-text">
              {brand.name}
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {brand.tagline}
            </p>
            <div className="flex items-center space-x-2 text-gray-400 mb-2">
              {React.createElement(
                iconMap[brand.location.icon as keyof typeof iconMap],
                { size: 16 }
              )}
              <span className="text-sm">{brand.location.text}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              {React.createElement(
                iconMap[brand.contact.icon as keyof typeof iconMap],
                { size: 16 }
              )}
              <a
                href={`mailto:${brand.contact.email}`}
                className="text-sm hover:text-white transition-colors"
              >
                {brand.contact.text}
              </a>
            </div>
          </motion.div>

          {/* Dynamic Sections */}
          {sections.map((section: FooterSection, sectionIndex: number) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: animations.duration,
                delay:
                  animations.brandDelay +
                  (sectionIndex + 1) * animations.sectionDelayIncrement,
              }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-6">{section.title}</h3>

              {/* Regular Links */}
              {section.links && (
                <ul className="space-y-3 text-gray-400">
                  {section.links.map((link: FooterLink) => (
                    <li key={link.label}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="hover:text-white transition-colors hover:translate-x-1 inline-block text-left"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {/* Social Links */}
              {section.socialLinks && (
                <>
                  <div className="flex space-x-4 mb-6">
                    {section.socialLinks.map((social: SocialLink) => {
                      const IconComponent =
                        iconMap[social.icon as keyof typeof iconMap];
                      return (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-kharon-purple transition-all duration-300"
                          whileHover={{
                            scale: animations.hoverScale,
                            y: animations.hoverY,
                          }}
                          whileTap={{ scale: animations.tapScale }}
                          title={social.label}
                        >
                          <IconComponent size={18} />
                        </motion.a>
                      );
                    })}
                  </div>

                  {/* Support Info */}
                  {section.supportInfo && (
                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 bg-${section.supportInfo.statusIndicator.color} rounded-full ${section.supportInfo.statusIndicator.animation}`}
                        ></div>
                        {section.supportInfo.availability}
                      </div>
                      <div>{section.supportInfo.responseTime}</div>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: animations.duration,
            delay: animations.footerDelay,
          }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {footer.copyright.year} {footer.copyright.company}.{" "}
              {footer.copyright.text}.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              {footer.badges.map((badge, index) => (
                <React.Fragment key={badge}>
                  {index > 0 && <span>•</span>}
                  <span>{badge}</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
