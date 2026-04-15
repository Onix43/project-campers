"use client";

import "modern-normalize";
import css from "./Catalog.module.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
  sidebar,
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isDetailsPage =
    pathname.split("/").length > 2 && pathname.includes("/catalog/");

  return (
    <>
      <div className={css.page}>
        {!isDetailsPage && <aside className={css.sidebar}>{sidebar}</aside>}
        <>{children}</>
      </div>
    </>
  );
}
