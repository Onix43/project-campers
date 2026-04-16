import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "modern-normalize";
import TanStackProvider from "@/components/TanstackProvider/TanstackProvider";
import Header from "@/components/Header/Header";
import { Suspense } from "react";
import FullPageLoader from "@/components/FullPageLoader/FullPageLoader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TravelTrucks",
  description:
    "Browse our extensive collection of campers. Find the perfect one for your journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TanStackProvider>
        <body className={`${inter.variable}`}>
          <Suspense fallback={<FullPageLoader />}>
            <Header />
            {children}
          </Suspense>
        </body>
      </TanStackProvider>
    </html>
  );
}
