"use client";
import Link from "next/link";
import css from "./Header.module.css";
import { Logo } from "../Logo/Logo";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <nav>
        <ul className={css.navList}>
          <li>
            <Link href="/" className={css.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/catalog"
              className={`${css.navLink} ${pathname === "/catalog" ? css.activeLink : ""}`}
            >
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
