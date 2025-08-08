import styles from "./experiences.module.css";
import { WorkInfo } from "./work-info/work-info";
import Timeline from "./timeline/timeline";
import { JobDescription } from "./job-description/job-description";
import reactIcon from "public/icons/skills/react.svg"
import typescriptIcon from "public/icons/skills/typescript.svg"
export function Experiences() {
  const experiencesData = [
    {
      companieName: "IFMS",
      model: "Presencial",
      period: "JAN 2025 - Present",
      local: "Corumbá, MS, Brazil",
      role: "FullStack / Infra",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut necessitatibus veritatis facilis tempore, magnam vel ullam dicta distinctio facere repellat iusto minus eius. Ullam facilis asperiores repellendus laborum dicta dolores!",
      usedSkills: [
        { name: "React", pathIcon: reactIcon },
        { name: "TypeScript", pathIcon: typescriptIcon },
      ],
    },
    {
      companieName: "IFMS",
      model: "Presencial",
      period: "JAN 2025 - Present",
      local: "Corumbá, MS, Brazil",

      role: "FullStack / Infra",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut necessitatibus veritatis facilis tempore, magnam vel ullam dicta distinctio facere repellat iusto minus eius. Ullam facilis asperiores repellendus laborum dicta dolores!",
      usedSkills: [
        { name: "React", pathIcon: reactIcon },
        { name: "TypeScript", pathIcon: typescriptIcon },
      ],
    },
    {
      companieName: "IFMS",
      model: "Presencial",
      period: "JAN 2025 - Present",
      local: "Corumbá, MS, Brazil",

      role: "FullStack / Infra",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut necessitatibus veritatis facilis tempore, magnam vel ullam dicta distinctio facere repellat iusto minus eius. Ullam facilis asperiores repellendus laborum dicta dolores!",
      usedSkills: [
        { name: "React", pathIcon: "/icons/skills/skills/react.svg" },
        { name: "TypeScript", pathIcon: typescriptIcon },
      ],
    },
  ];

  return (
    <div className={styles.experiencesContainer}>
      <div className={styles.experiences}>
        {experiencesData.map((exp, index) => (
          <div key={index} className={styles.workInfoContainer}>
            <WorkInfo
              companieName={exp.companieName}
              model={exp.model}
              period={exp.period}
              local={exp.local}
            />
            <JobDescription
              role={exp.role}
              description={exp.description}
              usedSkills={exp.usedSkills}
            />
          </div>
        ))}
      </div>

      <Timeline />
    </div>
  );
}
