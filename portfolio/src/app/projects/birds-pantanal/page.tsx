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
            { name: "SCSS", iconUrl: "/icons/skills/scss-svgrepo-com.svg" },
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
          ],
          performance: [
            { name: "Caching", iconUrl: "/icons/skills/redis-svgrepo-com.svg" },
            { name: "Exception Handling (RFC)", iconUrl: "" },
          ],
        }}
        projectStatistics={{
          statistics: [
            { label: t("statistics.activeUsers"), value: "10+" },
            { label: t("statistics.uptime"), value: "99.9%" },
            { label: t("statistics.performanceScore"), value: "90/100" },
          ],
        }}
        developmentTimeline={{
          events: [
            {
              date: "Jan 2025",
              title: t("timeline.projectStart"),
              description: t("timeline.initialPlanning"),
            },
            {
              date: "Mar 2025",
              title: t("timeline.betaRelease"),
              description: "API pronta e testada",
            },
            {
              date: "May 2025",
              title: t("timeline.firstVersion"),
              description: "Frontend concluído",
            },
            {
              date: "Jun 2025",
              title: t("timeline.officialLaunch"),
              description: "Primeiro deploy oficial",
            },
            {
              date: "Jul 2025",
              title: t("timeline.finalVersion"),
              description: "Infraestrutura final na AWS",
            },
          ],
        }}
        demo={{
          slides: [
            {
              title: t("demo.dashboard"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/birdpantanal/videos/listing-birds.mp4",
              alt: t("demo.dashboard") + " Preview",
            },
            {
              title: t("demo.bancoDeDados"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/birdpantanal/videos/listing-birds.mp4",
              alt: t("demo.bancoDeDados") + " Preview",
            },
            {
              title: t("demo.listandoAves"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/birdpantanal/videos/listing-birds.mp4",
            },
            {
              title: t("demo.criandoAves"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/birdpantanal/videos/creating-birds.mp4",
            },
            {
              title: t("demo.atualizandoAves"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/birdpantanal/videos/updating-birds.mp4",
            },
            {
              title: t("demo.deletandoAves"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/birdpantanal/videos/deleting-birds.mp4",
            },
            {
              title: t("demo.login"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/birdpantanal/videos/login.mp4",
            },
            {
              title: t("demo.registro"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/birdpantanal/videos/register.mp4",
            },
            {
              title: t("demo.diagramaFluxo"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/birdpantanal/videos/register.mp4",
              alt: t("demo.diagramaFluxo") + " Preview",
            },
          ],
        }}
      />
    </div>
  );
}
