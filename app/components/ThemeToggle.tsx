"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-dark-surface animate-pulse" />
    );
  }

  const themes = [
    { name: "light", icon: Sun, label: "Light" },
    { name: "dark", icon: Moon, label: "Dark" },
    { name: "system", icon: Monitor, label: "System" },
  ];

  return (
    <div className="relative">
      <div className="flex items-center bg-gray-100 dark:bg-dark-surface rounded-full p-1">
        {themes.map(({ name, icon: Icon, label }) => (
          <motion.button
            key={name}
            onClick={() => setTheme(name)}
            className={`relative p-2 rounded-full transition-colors ${
              theme === name
                ? "text-white"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={label}
          >
            <AnimatePresence>
              {theme === name && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-kharon-purple to-kharon-purple-dark rounded-full"
                  layoutId="activeTheme"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </AnimatePresence>
            <Icon size={16} className="relative z-10" />
          </motion.button>
        ))}
      </div>
    </div>
  );
};
