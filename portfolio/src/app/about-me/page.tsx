import { Bio } from "../components/about-me/bio/bio";
import styles from "./page.module.css";
import { SlideIn } from "../components/animations/slide-in";
import { Experiences } from "../components/about-me/experiences/experiences";
import { Education } from "../components/about-me/education/education";
import educationData from "../data/educationData";
import { SkillsGraph } from "../components/about-me/skills/skills-graph/skills-graph";
export default function AboutMe() {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.aboutMeWrapper}>
        <div className={styles.bioEducationWrapper}>
          <SlideIn>
            <Bio />
          </SlideIn>
          <SlideIn>
            <Education educationProps={educationData} />
          </SlideIn>
        </div>

        <SlideIn fromX={50}>
          <Experiences />
        </SlideIn>
      </div>
      <div className={styles.skills}>
        <SlideIn fromX={50}>
          <SkillsGraph />
        </SlideIn>
      </div>
    </div>
  );
}
