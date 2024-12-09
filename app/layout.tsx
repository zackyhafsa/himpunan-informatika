import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Bubble from "./components/Bubble";

export const metadata: Metadata = {
  title: "HMIF | Home",
  description: "Himpunan Mahasiswa Informatika",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Bubble />
      </body>
    </html>
  );
}
