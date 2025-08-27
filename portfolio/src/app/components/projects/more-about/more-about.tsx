import { NavProject } from "./nav-project/nav-project";
import styles from "./more-about.module.css";
export function MoreAbout() {
  return (
    <div className={`${styles.moreAbout} animatedBg`}>
      <NavProject />
    </div>
  );
}
