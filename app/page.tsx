import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <section className={styles.page}>
        <Image
          src="/hero-image.webp"
          className={styles.picture}
          alt="camping-background"
          fill
        />
        <div className={styles.textBlock}>
          <h1 className={styles.header}>Campers of your dreams</h1>
          <p className={styles.description}>
            You can find everything you want in our catalog
          </p>
          <Button href="/catalog">View Now</Button>
        </div>
      </section>
    </main>
  );
}
