import styles from "./nav.module.css";
export function Nav() {
  return (
    <div className={styles.nav}>
        <ul>
          <li>Home</li>
          <li>About me</li>
          <li>Projects</li>
          <li>Blog</li>
        </ul>
    </div>
  );
}
