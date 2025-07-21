import { main } from "framer-motion/client";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ClientShortcutWrapper from './components/ClientShortcutWrapper'

export const metadata = {
  title: "Catalin Ciortea - Terapeut",
  description: "Terapie holistică și transformare interioară.",
};

export default function RootLayout({ children }: { children: ReactNode }) {

  
  return (
    <html lang="ro">
      <body className="bg-white text-gray-800">
        <Navbar />
        <ClientShortcutWrapper />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}