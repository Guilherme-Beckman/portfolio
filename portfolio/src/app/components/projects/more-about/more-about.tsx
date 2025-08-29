import { NavProject, NavProjectProps } from "./nav-project/nav-project";
import styles from "./more-about.module.css";
interface MoreAboutProps {
  navProps?: NavProjectProps;
}
export function MoreAbout({ navProps }: MoreAboutProps) {
  return (
    <div className={`${styles.moreAbout} animatedBg`}>
      <NavProject
        gitHubUrl={navProps?.gitHubUrl}
        liveDemoUrl={navProps?.liveDemoUrl}
      />
    </div>
  );
}
