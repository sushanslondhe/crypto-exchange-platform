import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CryptoIcon from "../public/crypto-icon.png";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crypto Exchange",
  description: "Crypto Trading platform",
  icons: {
    icon: "/crypto.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
