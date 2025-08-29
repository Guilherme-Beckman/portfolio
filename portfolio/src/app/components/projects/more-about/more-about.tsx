import { NavProject, NavProjectProps } from "./nav-project/nav-project";
import styles from "./more-about.module.css";
import Image from "next/image";
interface MoreAboutProps {
  navProps?: NavProjectProps;
  mainImageProps?: MainImageProjectProps;
}
export interface MainImageProjectProps {
  url?: string;
  alt?: string;
}
export function MoreAbout({ navProps, mainImageProps }: MoreAboutProps) {
  return (
    <div className={`${styles.moreAbout} animatedBg`}>
      <NavProject
        gitHubUrl={navProps?.gitHubUrl}
        liveDemoUrl={navProps?.liveDemoUrl}
      />
      <div className={styles.mainImageContainer}>
        <Image
          src={mainImageProps?.url || "/falback.png"}
          alt={mainImageProps?.alt || "Project Image"}
          width={400}
          height={400}
          className={styles.mainImage}
        />
      </div>
    </div>
  );
}
