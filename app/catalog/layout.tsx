import type { Metadata } from "next";
import "modern-normalize";
import css from "./Catalog.module.css";

export const metadata: Metadata = {
  title: "Campers",
  description: "Find your Camper van!",
};

export default function RootLayout({
  children,
  sidebar,
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
}>) {
  return (
    <>
      <div className={css.page}>
        <aside className={css.sidebar}>{sidebar}</aside>
        <>{children}</>
      </div>
    </>
  );
}
