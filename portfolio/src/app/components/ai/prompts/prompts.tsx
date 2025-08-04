import styles from "./prompts.module.css";
export function Prompts() {
  return (
    <div className={styles.prompts}>
      <ul>
        <li>About me</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>Skills</li>
      </ul>
    </div>
  );
}
