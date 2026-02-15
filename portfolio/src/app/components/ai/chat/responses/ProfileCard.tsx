import Image from "next/image";
import styles from "./ProfileCard.module.css";

const SKILLS = ["Java", "Spring Boot", "Angular", "Docker", "AWS", "Python", "AI Tools"];

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
        Software Developer focused on Java Backend, microservices, cloud, and
        infrastructure. Currently at ACAOX Contabilidade and IFMS.
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
