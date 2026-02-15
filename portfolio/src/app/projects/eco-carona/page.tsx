import { MoreAbout } from "@/app/components/projects/more-about/more-about";
import { useTranslations } from "next-intl";

export default function EcoCarona() {
  const t = useTranslations("ProjectPage.EcoCarona");

  const featuresRaw = t("features", { default: "" });
  const features = featuresRaw
    ? featuresRaw.split(";").map((f) => f.trim())
    : [];

  return (
    <div>
      <MoreAbout
        navProps={{
          gitHubUrl: "https://github.com/Guilherme-Beckman/eco-carona",
        }}
        mainImageProps={{
          url: "/icons/skills/golang-svgrepo-com.svg",
          alt: t("title"),
        }}
        title={t("title")}
        subtitle={t("subtitle")}
        badges={[
          { name: "Web", color: "blue" },
          { name: "API", color: "green" },
          { name: "Infrastructure", color: "purple" },
        ]}
        description={t("description")}
        features={features}
        technicalSpecifications={{
          frontend: [
            {
              name: "Next.js",
              iconUrl: "/icons/skills/nextjs-fill-svgrepo-com.svg",
            },
            { name: "TypeScript", iconUrl: "/icons/skills/typescript.svg" },
            {
              name: "TailwindCSS",
              iconUrl: "/icons/skills/css-3-svgrepo-com.svg",
            },
          ],
          backend: [
            { name: "Go", iconUrl: "/icons/skills/golang-svgrepo-com.svg" },
            { name: "Gin", iconUrl: "" },
            { name: "GORM", iconUrl: "" },
          ],
          database: [
            {
              name: "PostgreSQL",
              iconUrl: "/icons/skills/postgresql-svgrepo-com.svg",
            },
          ],
          hosting: [
            {
              name: "Docker",
              iconUrl: "/icons/skills/docker-svgrepo-com.svg",
            },
          ],
        }}
        projectStatistics={{
          statistics: [
            { label: t("statistics.commits"), value: "51" },
            { label: t("statistics.apiEndpoints"), value: "10" },
            { label: t("statistics.developmentTime"), value: "3 days" },
            { label: t("statistics.status"), value: "v1.1" },
          ],
        }}
        developmentTimeline={{
          events: [
            {
              date: "Sep 27, 2025",
              title: t("timeline.projectStart"),
              description: t("timeline.backendSetup"),
            },
            {
              date: "Sep 28, 2025",
              title: t("timeline.backendDev"),
              description: t("timeline.apiImplementation"),
            },
            {
              date: "Sep 29, 2025",
              title: t("timeline.frontendDev"),
              description: t("timeline.nextjsUI"),
            },
            {
              date: "Sep 29, 2025",
              title: t("timeline.dockerRelease"),
              description: t("timeline.fullStackDocker"),
            },
          ],
        }}
        demo={{
          slides: [
            {
              title: t("demo.usersTable"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/eco-carona/images/users-table-empty.png",
              alt: t("demo.usersTable"),
            },
            {
              title: t("demo.createUserForm"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/eco-carona/images/create-user-form.png",
              alt: t("demo.createUserForm"),
            },
            {
              title: t("demo.usersTableData"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/eco-carona/images/users-table-data.png",
              alt: t("demo.usersTableData"),
            },
            {
              title: t("demo.carsTableData"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/eco-carona/images/cars-table-data.png",
              alt: t("demo.carsTableData"),
            },
            {
              title: t("demo.backendControllers"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/eco-carona/images/backend-controllers.png",
              alt: t("demo.backendControllers"),
            },
            {
              title: t("demo.backendArchitecture"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/eco-carona/images/backend-architecture.png",
              alt: t("demo.backendArchitecture"),
            },
          ],
        }}
      />
    </div>
  );
}
