import type { Metadata } from "next";
import "modern-normalize";

export const metadata: Metadata = {
  title: "Campers",
  description: "Find your Camper van!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
