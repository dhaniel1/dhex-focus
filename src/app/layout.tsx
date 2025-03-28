"use client";

// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../public/sass/main.scss";
import "./globals.css";
import { NavBar, SideNav } from "@/components";
import PomodoroProvider from "@/store/timer/pomodoroProvider";
import { SessionProvider } from "@/store/timer/pomodoroProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}; */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <PomodoroProvider>
        <SessionProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <main className="app_layout">
              <SideNav />
              <div className="app_layout_main">
                <NavBar />
                {children}
              </div>
            </main>
          </body>
        </SessionProvider>
      </PomodoroProvider>
    </html>
  );
}
