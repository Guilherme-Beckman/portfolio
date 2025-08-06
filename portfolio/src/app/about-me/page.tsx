import { Bio } from "../components/bio/bio";
import styles from "./page.module.css";
import { SlideIn } from "../components/animations/slide-in";
export default function AboutMe() {
  return (
    <div className={styles.aboutMe}>
      <SlideIn>
        <Bio />
      </SlideIn>
    </div>
  );
}
