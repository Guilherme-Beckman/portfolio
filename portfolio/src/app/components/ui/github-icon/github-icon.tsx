import styles from "./github-icon.module.css";
import { Github } from "lucide-react";
export function GitHubIcon() {
  return (
    <div className={styles.gitHub}>
      <Github />
      <h1>GitHub</h1>
    </div>
  );
}
