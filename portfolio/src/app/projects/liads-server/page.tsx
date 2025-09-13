import { MoreAbout } from "@/app/components/projects/more-about/more-about";
import { useTranslations } from "next-intl";

export default function LiadsServer() {
  const t = useTranslations("ProjectPage.Liads");

  // Sempre garante array de strings plano
  const featuresRaw = t("features"); // retorna string
  const features = featuresRaw.split(";").map((f) => f.trim());

  return (
    <div>
      <MoreAbout
        navProps={{
          gitHubUrl: "https://github.com/LIADS-IFMS",
        }}
        mainImageProps={{
          url: "https://guilherme-beckman.github.io/portfolio-assets/liads/images/liads.png",
          alt: t("title"),
        }}
        title={t("title")}
        subtitle={t("subtitle")}
        badges={[
          { name: "On-premise", color: "gray" },
          { name: "Microservices", color: "blue" },
          { name: "Infrastructure", color: "green" },
        ]}
        description={t("description")}
        features={features}
        technicalSpecifications={{
          backend: [
            {
              name: "Kong Gateway",
              iconUrl: "/icons/skills/kong-icon-svgrepo-com.svg",
            },
            { name: "Consul", iconUrl: "/icons/skills/consul-svgrepo-com.svg" },
            { name: "Nginx", iconUrl: "/icons/skills/nginx-svgrepo-com.svg" },
            { name: "Docker", iconUrl: "/icons/skills/docker-svgrepo-com.svg" },
          ],
          hosting: [
            {
              name: "Ubuntu Server",
              iconUrl: "/icons/skills/ubuntu-svgrepo-com.svg",
            },
            {
              name: "On-Premise",
              iconUrl: "/icons/skills/server-svgrepo-com.svg",
            },
          ],
          performance: [
            {
              name: "Service Isolation",
              iconUrl: "/icons/skills/docker-svgrepo-com.svg",
            },
            {
              name: "Health Checks",
              iconUrl: "/icons/skills/check-circle-svgrepo-com.svg",
            },
            {
              name: "DNS-based Routing",
              iconUrl: "/icons/skills/consul-svgrepo-com.svg",
            },
          ],
        }}
        projectStatistics={{
          statistics: [
            { label: t("statistics.registeredServices"), value: "2" },
            { label: t("statistics.uptime"), value: "99.9%" },
            { label: t("statistics.infrastructure"), value: "Dockerized" },
          ],
        }}
        developmentTimeline={{
          events: [
            {
              date: "Jun 2025",
              title: t("timeline.projectStart"),
              description: t("timeline.initialPlanning"),
            },
            {
              date: "Jul 2025",
              title: t("timeline.baseInfrastructure"),
              description: t("timeline.kongConsulSetup"),
            },
            {
              date: "Sep 2025",
              title: t("timeline.currentDevelopment"),
              description: t("timeline.serviceRegistration"),
            },
          ],
        }}
        demo={{
          slides: [
            {
              title: t("demo.infrastructureDiagram"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/liads/images/infra.png",
              alt: t("demo.infrastructureDiagram") + " Preview",
            },
            {
              title: t("demo.consulDashboard"),
              type: "image",
              src: "/icons/skills/consul-svgrepo-com.svg",
              alt: t("demo.consulDashboard") + " Preview",
            },
            {
              title: t("demo.kongRoutes"),
              type: "image",
              src: "/icons/skills/kong-icon-svgrepo-com.svg",
              alt: t("demo.kongRoutes") + " Preview",
            },
            {
              title: t("demo.dockerCompose"),
              type: "image",
              src: "/icons/skills/docker-svgrepo-com.svg",
              alt: t("demo.dockerCompose") + " Preview",
            },
            {
              title: t("demo.ubuntuOnPremise"),
              type: "image",
              src: "/icons/skills/ubuntu-svgrepo-com.svg",
              alt: t("demo.ubuntuOnPremise") + " Preview",
            },
          ],
        }}
      />
    </div>
  );
}
