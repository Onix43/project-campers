import Link from "next/link";
import css from "./Header.module.css";
import { Logo } from "../Logo/Logo";

// {
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }

export default async function Header() {
  // const catalog = await params;
  // console.log(catalog);
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
            <Link href="/catalog" className={css.navLink}>
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
