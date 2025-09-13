import styles from "./experiences.module.css";
import { WorkInfo } from "./work-info/work-info";
import Timeline from "./timeline/timeline";
import { JobDescription } from "./job-description/job-description";
import experiencesData from "data/experienceData";

export function Experiences() {
  return (
    <div className={`${styles.experiencesContainer} animatedBg`}>
      <div className={styles.experiences}>
        {experiencesData.map((exp, index) => (
          <div key={index} className={styles.workInfoContainer}>
            <WorkInfo
              companieNameKey={exp.companieNameKey}
              modelKey={exp.modelKey}
              period={exp.period}
              local={exp.local}
            />
            <JobDescription
              roleKey={exp.roleKey}
              descriptionKey={exp.descriptionKey}
              usedSkills={exp.usedSkills}
            />
          </div>
        ))}
      </div>
      <Timeline />
    </div>
  );
}
