import Image from "next/image";
import Profile from "public/images/pic.jpeg";
import styles from "./bio.module.css";

export function Bio() {
  return (
    <div className={styles.bio}>
      <div className={styles.imageWrapper}>
        <Image
          src={Profile}
          alt="Profile picture"

          className={styles.mainImage}
          priority
        />
      </div>
      <div className={styles.info}>
        <h2 className={styles.role}>FullStack Developer</h2>
        <h1 className={styles.name}>Guilherme Beckman</h1>
        <h3 className={styles.status}>Currently working as an intern at IFMS</h3>
      </div>
    </div>
  );
}
