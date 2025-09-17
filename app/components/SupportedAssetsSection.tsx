"use client";

import { motion } from "framer-motion";

export const SupportedAssetsSection = () => {
  const cryptos = [
    {
      name: "USDC",
      description: "USD Coin",
      status: "Live",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "USDT",
      description: "Tether USD",
      status: "Live",
      color: "from-green-500 to-green-600",
    },
    {
      name: "MTK",
      description: "Platform Token",
      status: "Live",
      color: "from-kharon-purple to-kharon-purple-dark",
    },
  ];

  const fiats = [
    { name: "NGN", description: "Nigerian Naira", status: "Live", flag: "🇳🇬" },
    {
      name: "GHS",
      description: "Ghanaian Cedi",
      status: "Coming Soon",
      flag: "🇬🇭",
    },
    {
      name: "KES",
      description: "Kenyan Shilling",
      status: "Coming Soon",
      flag: "🇰🇪",
    },
  ];

  return (
    <section
      id="supported-assets"
      className="py-32 bg-white dark:bg-dark-bg relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Supported <span className="gradient-text">Assets</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Convert popular cryptocurrencies to local currencies across Africa
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
              Cryptocurrencies
            </h3>
            <div className="space-y-6">
              {cryptos.map((crypto, index) => (
                <motion.div
                  key={crypto.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                  className="group flex items-center justify-between p-6 rounded-2xl bg-gray-50 dark:bg-dark-surface border border-gray-100 dark:border-dark-border hover:border-kharon-purple/30 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${crypto.color} rounded-xl flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300`}
                    >
                      {crypto.name}
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-900 dark:text-white">
                        {crypto.name}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {crypto.description}
                      </div>
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full text-sm font-medium">
                    {crypto.status}
                  </span>
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
              Fiat Currencies
            </h3>
            <div className="space-y-6">
              {fiats.map((fiat, index) => (
                <motion.div
                  key={fiat.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: -8 }}
                  className="group flex items-center justify-between p-6 rounded-2xl bg-gray-50 dark:bg-dark-surface border border-gray-100 dark:border-dark-border hover:border-kharon-purple/30 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-card dark:to-dark-border rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                      {fiat.flag}
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-900 dark:text-white">
                        {fiat.name}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {fiat.description}
                      </div>
                    </div>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      fiat.status === "Live"
                        ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400"
                        : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400"
                    }`}
                  >
                    {fiat.status}
                  </span>
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
              Expanding to more African markets in 2024
            </div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-kharon-purple rounded-full animate-bounce"></div>
              <div
                className="w-2 h-2 bg-kharon-purple rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-2 h-2 bg-kharon-purple rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
