import { MoreAbout } from "@/app/components/projects/more-about/more-about";
import { useTranslations } from "next-intl";

export default function FaceRecognition() {
  const t = useTranslations("ProjectPage.FaceRecognition");

  const featuresRaw = t("features");
  const features = featuresRaw.split(";").map((f) => f.trim());

  return (
    <div>
      <MoreAbout
        navProps={{
          gitHubUrl:
            "https://github.com/Guilherme-Beckman/reconhecimento-facial-ifms",
        }}
        mainImageProps={{
          url: "/icons/skills/web-cam-svgrepo-com.svg",
          alt: t("title"),
        }}
        title={t("title")}
        subtitle={t("subtitle")}
        badges={[
          { name: "WebCam", color: "gray" },
          { name: "face_recognition", color: "purple" },
          { name: "Iot", color: "blue" },
        ]}
        description={t("description")}
        features={features}
        technicalSpecifications={{
          frontend: [
            {
              name: "NextJs",
              iconUrl: "/icons/skills/nextjs-fill-svgrepo-com.svg",
            },
            {
              name: "HTML",
              iconUrl: "/icons/skills/html-5-svgrepo-com.svg",
            },
            {
              name: "CSS",
              iconUrl: "/icons/skills/css-3-svgrepo-com.svg",
            },
            {
              name: "Typescript",
              iconUrl: "/icons/skills/typescript.svg",
            },
          ],
          backend: [
            { name: "Python", iconUrl: "/icons/skills/python-svgrepo-com.svg" },
            {
              name: "face_recognition",
              iconUrl: "/icons/skills/face-id-svgrepo-com.svg",
            },
            {
              name: "Java",
              iconUrl: "/icons/skills/java-svgrepo-com.svg",
            },
            {
              name: "Spring",
              iconUrl: "/icons/skills/spring-svgrepo-com.svg",
            },
            {
              name: "Golang",
              iconUrl: "/icons/skills/golang-svgrepo-com.svg",
            },
          ],
          database: [
            {
              name: "PostgreSQL",
              iconUrl: "/icons/skills/postgresql-svgrepo-com.svg",
            },
          ],
          authentication: [
            {
              name: "Spring Security",
              iconUrl: "/icons/skills/spring-svgrepo-com.svg",
            },
          ],
          hosting: [
            {
              name: "Docker",
              iconUrl: "/icons/skills/docker-svgrepo-com.svg",
            },
          ],
          performance: [
            {
              name: "Microservices",
              iconUrl: "/icons/skills/microservice-icon.svg",
            },
          ],
        }}
        projectStatistics={{
          statistics: [
            {
              label: t("statistics.projectStatus"),
              value: t("statistics.planningPhase"),
            },
            { label: t("statistics.estimatedDuration"), value: "1Y" },
            { label: t("statistics.teamMembers"), value: "3" },
          ],
        }}
        developmentTimeline={{
          events: [
            {
              date: "September 2025",
              title: t("timeline.projectStart"),
              description: t("timeline.initialPlanning"),
            },
            {
              date: "Q4 2025",
              title: t("timeline.softwareDevelopment"),
              description: t("timeline.pythonImplementation"),
            },
            {
              date: "Q1 2026",
              title: t("timeline.securityModule"),
              description: t("timeline.javaIntegration"),
            },
            {
              date: "Q2 2026",
              title: t("timeline.auditModule"),
              description: t("timeline.golangImplementation"),
            },
            {
              date: "Q3 2026",
              title: t("timeline.testingDeployment"),
              description: t("timeline.systemRelease"),
            },
          ],
        }}
        demo={{
          slides: [
            {
              title: t("demo.systemArchitecture"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/facial-rec/images/arch.png",
              alt: t("demo.systemArchitecture") + " Preview",
            },
            {
              title: "Python",
              type: "image",
              src: "/icons/skills/python-svgrepo-com.svg",
              alt: "",
            },
            {
              title: "Spring",
              type: "image",
              src: "/icons/skills/spring-svgrepo-com.svg",
              alt: "",
            },
            {
              title: "Golang (Scary)",
              type: "image",
              src: "/icons/skills/golang-svgrepo-com.svg",
              alt: "",
            },
            {
              title: "face_recognition",
              type: "image",
              src: "/icons/skills/face-id-svgrepo-com.svg",
              alt: "",
            },
          ],
        }}
      />
    </div>
  );
}
