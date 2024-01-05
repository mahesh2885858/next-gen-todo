"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { useEffect, useLayoutEffect, useState } from "react";

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode((p) => {
      if (p) {
        localStorage.theme = "light";
      } else {
        localStorage.theme = "dark";
      }
      return !p;
    });
  };
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Whenever the user explicitly chooses light mode
  }, [darkMode]);

  return (
    <html lang="en">
      <body className=" dark:bg-purple-950 bg-blue-950 text-white flex  flex-col w-screen overflow-x-hidden  ">
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {children}
      </body>
    </html>
  );
}
