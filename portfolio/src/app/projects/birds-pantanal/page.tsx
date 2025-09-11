import { MoreAbout } from "@/app/components/projects/more-about/more-about";
import { useTranslations } from "next-intl";

export default function BirdPantanal() {
  const t = useTranslations("ProjectPage.BirdPantanal");

  // Sempre garante array de strings plano
  const featuresRaw = t("features"); // retorna string
  const features = featuresRaw.split(";").map((f) => f.trim());

  return (
    <div>
      <MoreAbout
        navProps={{
          gitHubUrl:
            "https://github.com/Guilherme-Beckman/bird-pantanal-photo-gallery",
        }}
        mainImageProps={{
          url: "https://guilherme-beckman.github.io/portfolio-assets/bird-pantanal-photo-gallery/images/favicon.png",
          alt: t("title"),
        }}
        title={t("title")}
        subtitle={t("subtitle")}
        badges={[
          { name: "Web", color: "blue" },
          { name: "API", color: "cyan" },
          { name: "AWS", color: "orange" },
        ]}
        description={t("description")}
        features={features}
        technicalSpecifications={{
          frontend: [
            {
              name: "Angular",
              iconUrl: "/icons/skills/angular-svgrepo-com.svg",
            },
            { name: "TypeScript", iconUrl: "/icons/skills/typescript.svg" },
            { name: "SCSS", iconUrl: "/icons/skills/css-3-svgrepo-com.svg" },
            { name: "HTML", iconUrl: "/icons/skills/html-5-svgrepo-com.svg" },
          ],
          backend: [
            {
              name: "Java",
              iconUrl: "/icons/skills/java-svgrepo-com.svg",
            },
            {
              name: "Spring Boot",
              iconUrl: "/icons/skills/spring-svgrepo-com.svg",
            },
          ],
          database: [
            {
              name: "PostgreSQL",
              iconUrl: "/icons/skills/postgresql-svgrepo-com.svg",
            },

            {
              name: "AWS S3",
              iconUrl: "/icons/skills/aws-s3-svgrepo-com.svg",
            },
            {
              name: "AWS RDS",
              iconUrl: "/icons/skills/aws-rds-svgrepo-com.svg",
            },
          ],
          authentication: [
            { name: "JWT", iconUrl: "" },
            {
              name: "Spring Security",
              iconUrl: "/icons/skills/spring-svgrepo-com.svg",
            },
          ],
          hosting: [
            { name: "AWS", iconUrl: "/icons/skills/aws-svgrepo-com.svg" },
            { name: "Docker", iconUrl: "/icons/skills/docker-svgrepo-com.svg" },
            {
              name: "Nginx",
              iconUrl: "/icons/skills/nginx-svgrepo-com.svg",
            },
            {
              name: "AWS Route 53",
              iconUrl: "/icons/skills/aws-route53-svgrepo-com.svg",
            },
          ],
          performance: [
            {
              name: "Spring Cache",
              iconUrl: "/icons/skills/spring-svgrepo-com.svg",
            },
            { name: "Exception Handling (RFC)", iconUrl: "" },
          ],
        }}
        projectStatistics={{
          statistics: [
            { label: t("statistics.birds"), value: "50+" },
            { label: t("statistics.uptime"), value: "99.9%" },
          ],
        }}
        developmentTimeline={{
          events: [
            {
              date: "Dec 2025",
              title: t("timeline.projectStart"),
              description: t("timeline.initialPlanning"),
            },
            {
              date: "Jan 2025",
              title: t("timeline.betaRelease"),
              description: t("timeline.apiReady"),
            },
            {
              date: "Feb 2025",
              title: t("timeline.firstVersion"),
              description: t("timeline.frontendCompleted"),
            },
            {
              date: "Feb 2025",
              title: t("timeline.officialLaunch"),
              description: t("timeline.firstDeploy"),
            },
            {
              date: "May 2025",
              title: t("timeline.finalVersion"),
              description: t("timeline.awsInfrastructure"),
            },
          ],
        }}
        demo={{
          slides: [
            {
              title: t("demo.fluxogram"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/bird-pantanal-photo-gallery/images/fluxogram.png",
              alt: t("demo.fluxogram"),
            },
            {
              title: t("demo.creating"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/bird-pantanal-photo-gallery/videos/creating.mp4",
            },
            {
              title: t("demo.downloadCard"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/bird-pantanal-photo-gallery/videos/download-card.mp4",
            },
            {
              title: t("demo.login"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/bird-pantanal-photo-gallery/videos/login.mp4",
            },
            {
              title: t("demo.delete"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/bird-pantanal-photo-gallery/videos/delete.mp4",
            },
            {
              title: t("demo.editing"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/bird-pantanal-photo-gallery/videos/editing.mp4",
            },
            {
              title: t("demo.searching"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/bird-pantanal-photo-gallery/videos/searching.mp4",
            },
          ],
        }}
      />
    </div>
  );
}
