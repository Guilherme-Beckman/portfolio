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
              title={t("MySell.title")}
              description={t("MySell.description")}
              image="https://guilherme-beckman.github.io/portfolio-assets/mysell/images/favicon.png"
              tags={[
                {
                  name: "Spring Boot WebFlux",
                  icon: "/icons/skills/spring-svgrepo-com.svg",
                },
                {
                  name: "PostgreSQL",
                  icon: "/icons/skills/postgresql-svgrepo-com.svg",
                },
                {
                  name: "Angular",
                  icon: "/icons/skills/angular-svgrepo-com.svg",
                },
                { name: "Ionic", icon: "/icons/skills/ionic-svgrepo-com.svg" },
              ]}
              demoLink="projects/mysell"
              codeLink="https://github.com/Guilherme-Beckman/mysell"
            />
          </SlideIn>
        </div>
      </div>
    </div>
  );
}
