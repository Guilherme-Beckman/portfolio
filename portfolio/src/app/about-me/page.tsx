import { Bio } from "../components/about-me/bio/bio";
import styles from "./page.module.css";
import { SlideIn } from "../components/animations/slide-in";
import { Experiences } from "../components/about-me/experiences/experiences";
export default function AboutMe() {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.bioExperiencesWrapper}>
        <SlideIn>
          <Bio />
        </SlideIn>
        <SlideIn fromX={50}>
          <Experiences />
        </SlideIn>
      </div>
    </div>
  );
}
