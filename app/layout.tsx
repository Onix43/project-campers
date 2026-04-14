import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "modern-normalize";
import TanStackProvider from "@/components/TanstackProvider/TanstackProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Campers",
  description: "Find your Camper van!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TanStackProvider>
        <body className={`${inter.variable}`}>{children}</body>
      </TanStackProvider>
    </html>
  );
}
