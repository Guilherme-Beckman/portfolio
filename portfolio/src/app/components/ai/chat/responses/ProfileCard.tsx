import Image from "next/image";
import styles from "./ProfileCard.module.css";

const SKILLS = ["React", "Next.js", "TypeScript", "Docker", "AWS"];

export function ProfileCard() {
  return (
    <div className={styles.card}>
      <Image
        src="/images/pic.jpeg"
        alt="Guilherme Beckman"
        width={80}
        height={80}
        className={styles.avatar}
      />
      <h3 className={styles.name}>Guilherme Beckman</h3>
      <p className={styles.role}>FullStack Developer</p>
      <p className={styles.location}>Corumba, MS, Brazil</p>
      <p className={styles.bio}>
        Passionate about crafting interactive and performant web experiences with
        modern technologies.
      </p>
      <div className={styles.tags}>
        {SKILLS.map((skill) => (
          <span key={skill} className={styles.tag}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
