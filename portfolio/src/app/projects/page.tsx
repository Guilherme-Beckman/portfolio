import styles from "./page.module.css";
import { ProjectCard } from "../components/projects/project-card/project-card";
import { SlideIn } from "../components/animations/slide-in";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <div className={`${styles.projects} animatedBg`}>
      <h1 className={styles.title}>{t("title")}</h1>
      <h2 className={styles.subtitle}>{t("subtitle")}</h2>

      <div className={styles.projectsContainer}>
        <div className={styles.projectCard}>
          <SlideIn>
            <ProjectCard
              title="Devflow Console"
              description="A dashboard application integrated with GitHub, developed using Golang and the GitHub GraphQL API, to display repository analytics, pull request data, and test summaries."
              image="/icons/skills/angular-svgrepo-com.svg"
              tags={[
                {
                  name: "NextJS",
                  icon: "/icons/skills/angular-svgrepo-com.svg",
                },
              ]}
              demoLink="https://example.com/demo"
              codeLink="https://github.com/example/devflow-console"
            />
          </SlideIn>
        </div>
      </div>
    </div>
  );
}
