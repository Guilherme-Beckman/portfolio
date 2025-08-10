import { Bio } from "../components/about-me/bio/bio";
import styles from "./page.module.css";
import { SlideIn } from "../components/animations/slide-in";
import { Experiences } from "../components/about-me/experiences/experiences";
import { Education } from "../components/about-me/education/education";

const exampleEducationData = [
  {
    cert: "Bachelor's Degree",
    course: "Computer Science",
    school: "University of XYZ",
    date: "2015 - 2019"
  },
  {
    cert: "Master's Degree",
    course: "Software Engineering",
    school: "Institute of ABC",
    date: "2019 - 2021"
  },
  {
    cert: "Certification",
    course: "Cloud Architecture",
    school: "Online Academy",
    date: "2022"
  },
  {
    cert: "Certification",
    course: "Machine Learning",
    school: "Tech Institute",
    date: "2023"
  },

];


export default function AboutMe() {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.aboutMeWrapper}>
        <div className={styles.bioEducationWrapper}>
          <SlideIn>
            <Bio />
          </SlideIn>
          <SlideIn>
            <Education educationProps={exampleEducationData}/>
          </SlideIn>
        </div>

        <SlideIn fromX={50}>
          <Experiences />
        </SlideIn>
      </div>
    </div>
  );
}
