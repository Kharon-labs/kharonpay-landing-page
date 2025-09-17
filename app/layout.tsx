import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kharon Pay - From Crypto to Cash in a Click",
  description:
    "The fastest and most secure way to convert cryptocurrency (USDC, USDT, MTK) directly to local currency (NGN). Link your bank, swap your crypto, spend freely—no delays, no complexity.",
  keywords: [
    "crypto to naira",
    "sell crypto Nigeria",
    "USDT to NGN",
    "cryptocurrency exchange",
    "StarkNet",
    "crypto offramp",
  ],
  openGraph: {
    title: "Kharon Pay - From Crypto to Cash in a Click",
    description:
      "Convert cryptocurrency to local currency instantly. Built on StarkNet for superior speed and security.",
    type: "website",
    url: "https://kharonpay.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kharon Pay - From Crypto to Cash in a Click",
    description:
      "Convert cryptocurrency to local currency instantly. Built on StarkNet for superior speed and security.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-dark-bg text-gray-900 dark:text-white`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
