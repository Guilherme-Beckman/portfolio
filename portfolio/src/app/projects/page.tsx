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
          <SlideIn fromX={-50}>
            <ProjectCard
              title={t("Actus.title")}
              description={t("Actus.description")}
              image="https://guilherme-beckman.github.io/portfolio-assets/actus/images/logo.png"
              tags={[
                {
                  name: "Angular",
                  icon: "/icons/skills/angular-svgrepo-com.svg",
                },
                {
                  name: "Spring Boot",
                  icon: "/icons/skills/spring-svgrepo-com.svg",
                },
                {
                  name: "PostgreSQL",
                  icon: "/icons/skills/postgresql-svgrepo-com.svg",
                },
                { name: "Java", icon: "/icons/skills/java-svgrepo-com.svg" },
                { name: "TypeScript", icon: "/icons/skills/typescript.svg" },
                {
                  name: "Docker",
                  icon: "/icons/skills/docker-svgrepo-com.svg",
                },
              ]}
              demoLink="projects/actus"
              codeLink="https://github.com/ACAOX/ACTUS"
            />
          </SlideIn>
        </div>
        <div className={styles.projectCard}>
          <SlideIn fromX={50}>
            <ProjectCard
              title={t("AiRuleGenerator.title")}
              description={t("AiRuleGenerator.description")}
              image="/icons/skills/python-svgrepo-com.svg"
              tags={[
                {
                  name: "Python",
                  icon: "/icons/skills/python-svgrepo-com.svg",
                },
                {
                  name: "RAG",
                  icon: "/icons/skills/ai-svgrepo-com.svg",
                },
                {
                  name: "Google Gemini",
                  icon: "/icons/skills/google-gemini-icon.svg",
                },
                {
                  name: "ChromaDB",
                  icon: "/icons/skills/database-data-base-svgrepo-com.svg",
                },
                {
                  name: "pandas",
                  icon: "/icons/skills/Pandas.svg",
                },
              ]}
              demoLink="projects/ai-rule-generator"
              codeLink="https://github.com/ACAOX/gerador-regras"
            />
          </SlideIn>
        </div>
        <div className={styles.projectCard}>
          <SlideIn fromX={-50}>
            <ProjectCard
              title={t("EcoCarona.title")}
              description={t("EcoCarona.description")}
              image="/icons/skills/golang-svgrepo-com.svg"
              tags={[
                { name: "Go", icon: "/icons/skills/golang-svgrepo-com.svg" },
                {
                  name: "Next.js",
                  icon: "/icons/skills/nextjs-fill-svgrepo-com.svg",
                },
                { name: "TypeScript", icon: "/icons/skills/typescript.svg" },
                {
                  name: "PostgreSQL",
                  icon: "/icons/skills/postgresql-svgrepo-com.svg",
                },
                {
                  name: "Docker",
                  icon: "/icons/skills/docker-svgrepo-com.svg",
                },
              ]}
              demoLink="projects/eco-carona"
              codeLink="https://github.com/Guilherme-Beckman/eco-carona"
            />
          </SlideIn>
        </div>
        <div className={styles.projectCard}>
          <SlideIn fromX={50}>
            <ProjectCard
              title={t("FaceRecognition.title")}
              description={t("FaceRecognition.description")}
              image="/icons/skills/web-cam-svgrepo-com.svg"
              tags={[
                {
                  name: "Python",
                  icon: "/icons/skills/python-svgrepo-com.svg",
                },
                {
                  name: "face_recognition",
                  icon: "/icons/skills/face-id-svgrepo-com.svg",
                },
                {
                  name: "PostgreSQL",
                  icon: "/icons/skills/postgresql-svgrepo-com.svg",
                },
                {
                  name: "Java",
                  icon: "/icons/skills/java-svgrepo-com.svg",
                },
                {
                  name: "Spring Security",
                  icon: "/icons/skills/spring-svgrepo-com.svg",
                },
                {
                  name: "Golang",
                  icon: "/icons/skills/golang-svgrepo-com.svg",
                },
                {
                  name: "Microservices",
                  icon: "/icons/skills/microservice-icon.svg",
                },
              ]}
              demoLink="projects/face-recognition"
              codeLink="https://github.com/Guilherme-Beckman/reconhecimento-facial-ifms"
            />
          </SlideIn>
        </div>

        <div className={styles.projectCard}>
          <SlideIn fromX={-50}>
            <ProjectCard
              title={t("IoTSchoolBell.title")}
              description={t("IoTSchoolBell.description")}
              image="/icons/skills/python-svgrepo-com.svg"
              tags={[
                {
                  name: "Arduino",
                  icon: "/icons/skills/arduino-svgrepo-com.svg",
                },
                {
                  name: "ESP8266",
                  icon: "/icons/skills/wifi-svgrepo-com.svg",
                },
                {
                  name: "FastAPI",
                  icon: "/icons/skills/fastapi-svgrepo-com.svg",
                },
                {
                  name: "SQLAlchemy",
                  icon: "/icons/skills/SQLAlchemy.svg",
                },
                {
                  name: "SQLite",
                  icon: "/icons/skills/sqllite-svgrepo-com.svg",
                },
                {
                  name: "Next.js",
                  icon: "/icons/skills/nextjs-fill-svgrepo-com.svg",
                },
                { name: "TypeScript", icon: "/icons/skills/typescript.svg" },
              ]}
              demoLink="projects/iot-project"
              codeLink="https://github.com/Gaby0805/Arduino-Rirau-ipyra"
            />
          </SlideIn>
        </div>
        <div className={styles.projectCard}>
          <SlideIn fromX={50}>
            <ProjectCard
              title={t("LiadsServer.title")}
              description={t("LiadsServer.description")}
              image="https://guilherme-beckman.github.io/portfolio-assets/liads/images/liads.png"
              tags={[
                {
                  name: "Kong Gateway",
                  icon: "/icons/skills/kong-icon-svgrepo-com.svg",
                },
                {
                  name: "Consul",
                  icon: "/icons/skills/consul-svgrepo-com.svg",
                },
                {
                  name: "Nginx",
                  icon: "/icons/skills/nginx-svgrepo-com.svg",
                },
                {
                  name: "Shell",
                  icon: "/icons/skills/shell-svgrepo-com.svg",
                },
                {
                  name: "Ubuntu Server",
                  icon: "/icons/skills/ubuntu-svgrepo-com.svg",
                },
                {
                  name: "Docker",
                  icon: "/icons/skills/docker-svgrepo-com.svg",
                },
                {
                  name: "Vagrant",
                  icon: "/icons/skills/vagrant-svgrepo-com.svg",
                },
              ]}
              demoLink="projects/liads-server"
              codeLink="https://github.com/LIADS-IFMS "
            />
          </SlideIn>
        </div>
        <div className={styles.projectCard}>
          <SlideIn fromX={-50}>
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
        <div className={styles.projectCard}>
          <SlideIn fromX={50}>
            <ProjectCard
              title={t("BirdPantanal.title")}
              description={t("BirdPantanal.description")}
              image="https://guilherme-beckman.github.io/portfolio-assets/bird-pantanal-photo-gallery/images/favicon.png"
              tags={[
                {
                  name: "Spring Boot",
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
                {
                  name: "SCSS",
                  icon: "/icons/skills/css-3-svgrepo-com.svg",
                },
                {
                  name: "AWS",
                  icon: "/icons/skills/aws-svgrepo-com.svg",
                },
              ]}
              demoLink="projects/birds-pantanal"
              codeLink="https://github.com/Guilherme-Beckman/bird-pantanal-photo-gallery"
            />
          </SlideIn>
        </div>
        <div className={styles.projectCard}>
          <SlideIn fromX={-50}>
            <ProjectCard
              title={t("OrderManager.title")}
              description={t("OrderManager.description")}
              image="/icons/skills/spring-svgrepo-com.svg"
              tags={[
                {
                  name: "Spring Boot",

                  icon: "/icons/skills/spring-svgrepo-com.svg",
                },

                {
                  name: "Spring Security",

                  icon: "/icons/skills/spring-svgrepo-com.svg",
                },

                {
                  name: "MongoDB",

                  icon: "/icons/skills/mongodb-svgrepo-com.svg",
                },

                {
                  name: "Docker",

                  icon: "/icons/skills/docker-svgrepo-com.svg",
                },

                {
                  name: "RabbitMQ",

                  icon: "/icons/skills/rabbitmq-icon-svgrepo-com.svg",
                },

                {
                  name: "Postman",

                  icon: "/icons/skills/postman-icon-svgrepo-com.svg",
                },
              ]}
              demoLink="projects/order-manager"
              codeLink="https://github.com/Guilherme-Beckman/order-manager"
            />
          </SlideIn>
        </div>
      </div>
    </div>
  );
}
