import { NavProject, NavProjectProps } from "./nav-project/nav-project";
import styles from "./more-about.module.css";

export function MoreAbout({ gitHubUrl, liveDemoUrl }: NavProjectProps) {
  return (
    <div className={`${styles.moreAbout} animatedBg`}>
      <NavProject gitHubUrl={gitHubUrl} liveDemoUrl={liveDemoUrl} />
    </div>
  );
}
