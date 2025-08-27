import styles from "./github-icon.module.css";
import { Github } from "lucide-react";
export function GitHubIcon() {
  return (
    <div className={`${styles.socialBtn} ${styles.gitHub}`}>
      <Github className={styles.socialIcon} />
      <h1 className={styles.socialLabel}>GitHub</h1>
      <div className={styles.socialRipple}></div>
    </div>
  );
}
