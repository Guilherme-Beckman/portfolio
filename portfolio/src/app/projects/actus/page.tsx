import { MoreAbout } from "@/app/components/projects/more-about/more-about";
import { useTranslations } from "next-intl";

export default function ActusPage() {
  const t = useTranslations("ProjectPage.Actus");
  const featuresRaw = t("features", { default: "" });
  const features = featuresRaw
    ? featuresRaw.split(";").map((f) => f.trim())
    : [];

  return (
    <div>
      <MoreAbout
        navProps={{
          gitHubUrl: "https://github.com/ACAOX/ACTUS",
        }}
        mainImageProps={{
          url: "https://guilherme-beckman.github.io/portfolio-assets/actus/images/logo.png",
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
              name: "Angular 20",
              iconUrl: "/icons/skills/angular-svgrepo-com.svg",
            },
            { name: "TypeScript", iconUrl: "/icons/skills/typescript.svg" },
            { name: "Chart.js", iconUrl: "" },
            { name: "HTML5", iconUrl: "/icons/skills/html-5-svgrepo-com.svg" },
            { name: "CSS3", iconUrl: "/icons/skills/css-3-svgrepo-com.svg" },
          ],
          backend: [
            {
              name: "Spring Boot 4",
              iconUrl: "/icons/skills/spring-svgrepo-com.svg",
            },
            { name: "Java 21", iconUrl: "/icons/skills/java-svgrepo-com.svg" },
            {
              name: "Spring Security",
              iconUrl: "/icons/skills/spring-svgrepo-com.svg",
            },
            {
              name: "Spring Data JDBC",
              iconUrl: "/icons/skills/spring-svgrepo-com.svg",
            },
            { name: "Apache PDFBox", iconUrl: "" },
          ],
          database: [
            {
              name: "PostgreSQL",
              iconUrl: "/icons/skills/postgresql-svgrepo-com.svg",
            },
            { name: "Flyway", iconUrl: "" },
          ],
          authentication: [
            { name: "JWT", iconUrl: "" },
            {
              name: "Spring Security",
              iconUrl: "/icons/skills/spring-svgrepo-com.svg",
            },
          ],
          hosting: [
            { name: "Docker", iconUrl: "/icons/skills/docker-svgrepo-com.svg" },
          ],
        }}
        projectStatistics={{
          statistics: [
            { label: t("statistics.totalCommits"), value: "296" },
            { label: t("statistics.validationRules"), value: "284+" },
            { label: t("statistics.dbMigrations"), value: "36" },
            { label: t("statistics.documentTypes"), value: "4" },
          ],
        }}
        developmentTimeline={{
          events: [
            {
              date: "Dec 28, 2025",
              title: t("timeline.projectStart"),
              description: t("timeline.projectStartDesc"),
            },
            {
              date: "Jan 2026",
              title: t("timeline.coreFeatures"),
              description: t("timeline.coreFeaturesDesc"),
            },
            {
              date: "Feb 8, 2026",
              title: t("timeline.rulesEngine"),
              description: t("timeline.rulesEngineDesc"),
            },
            {
              date: "Feb 12, 2026",
              title: t("timeline.releaseV1"),
              description: t("timeline.releaseV1Desc"),
            },
          ],
        }}
        demo={{
          slides: [
            {
              title: t("demo.login"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/actus/images/login.png",
              alt: `${t("demo.login")} Preview`,
            },
            {
              title: t("demo.dashboard"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/actus/images/homepage.png",
              alt: `${t("demo.dashboard")} Preview`,
            },
            {
              title: t("demo.createCompany"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/actus/images/create-company.png",
              alt: `${t("demo.createCompany")} Preview`,
            },
            {
              title: t("demo.uploadDocument"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/actus/images/upload-document.png",
              alt: `${t("demo.uploadDocument")} Preview`,
            },
            {
              title: t("demo.documentFilled"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/actus/images/document-upload-filled.png",
              alt: `${t("demo.documentFilled")} Preview`,
            },
            {
              title: t("demo.chartOfAccounts"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/actus/images/chart-of-accounts.png",
              alt: `${t("demo.chartOfAccounts")} Preview`,
            },
            {
              title: t("demo.verification"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/actus/images/document-verification.png",
              alt: `${t("demo.verification")} Preview`,
            },
            {
              title: t("demo.analytics"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/actus/images/analytics.png",
              alt: `${t("demo.analytics")} Preview`,
            },
            {
              title: t("demo.userManagement"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/actus/images/user-management.png",
              alt: `${t("demo.userManagement")} Preview`,
            },
            {
              title: t("demo.deployBuild"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/actus/images/deploy-build.jpg",
              alt: `${t("demo.deployBuild")} Preview`,
            },
            {
              title: t("demo.deployProduction"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/actus/images/deploy-production.jpg",
              alt: `${t("demo.deployProduction")} Preview`,
            },
          ],
        }}
      />
    </div>
  );
}
