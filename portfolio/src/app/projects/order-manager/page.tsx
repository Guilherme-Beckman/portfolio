import { MoreAbout } from "@/app/components/projects/more-about/more-about";
import { useTranslations } from "next-intl";

export default function OrderManager() {
  const t = useTranslations("ProjectPage.OrderManager");

  // Garante array de strings a partir das features traduzidas
  const featuresRaw = t("features", { default: "" }); // garante string vazia
  const features = featuresRaw
    ? featuresRaw.split(";").map((f) => f.trim())
    : [];

  return (
    <div>
      <MoreAbout
        navProps={{
          gitHubUrl: "https://github.com/Guilherme-Beckman/order-manager",
        }}
        mainImageProps={{
          url: "https://guilherme-beckman.github.io/portfolio-assets/order-manager/images/system-design.png",
          alt: t("title"),
        }}
        title={t("title")}
        subtitle={t("subtitle")}
        badges={[
          { name: "Microservices", color: "purple" },
          { name: "API", color: "cyan" },
          { name: "Docker", color: "blue" },
        ]}
        description={t("description")}
        features={features}
        technicalSpecifications={{
          backend: [
            { name: "Java", iconUrl: "/icons/skills/java-svgrepo-com.svg" },
            {
              name: "Spring Boot",
              iconUrl: "/icons/skills/spring-svgrepo-com.svg",
            },
            {
              name: "Spring Security",
              iconUrl: "/icons/skills/spring-svgrepo-com.svg",
            },
            {
              name: "RabbitMQ",
              iconUrl: "/icons/skills/rabbitmq-svgrepo-com.svg",
            },
            { name: "Postman", iconUrl: "/icons/skills/postman-icon.svg" },
          ],
          database: [
            {
              name: "MongoDB",
              iconUrl: "/icons/skills/mongodb-svgrepo-com.svg",
            },
          ],
          hosting: [
            { name: "Docker", iconUrl: "/icons/skills/docker-svgrepo-com.svg" },
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
            { label: t("statistics.microservices"), value: "5+" },
            { label: t("statistics.users"), value: "100+" },
          ],
        }}
        developmentTimeline={{
          events: [
            {
              date: "Mar 2025",
              title: t("timeline.projectStart"),
              description: t("timeline.initialPlanning"),
            },
            {
              date: "Apr 2025",
              title: t("timeline.firstServices"),
              description: t("timeline.basicArchitecture"),
            },
            {
              date: "May 2025",
              title: t("timeline.integration"),
              description: t("timeline.rabbitMqWorking"),
            },
            {
              date: "Jun 2025",
              title: t("timeline.testing"),
              description: t("timeline.postmanDocs"),
            },
            {
              date: "Jul 2025",
              title: t("timeline.deploy"),
              description: t("timeline.containerizedDeploy"),
            },
          ],
        }}
        demo={{
          slides: [
            {
              title: t("demo.systemDesign"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/order-manager/images/Order Manger System Design.png",
              alt: t("demo.systemDesign"),
            },
            {
              title: t("demo.microservices"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/order-manager/images/microservices.png",
              alt: t("demo.systemDesign"),
            },
            {
              title: t("demo.postman1"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/order-manager/images/postman-1.png",
              alt: t("demo.systemDesign"),
            },
            {
              title: t("demo.postman1"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/order-manager/images/postman-1.png",
              alt: t("demo.systemDesign"),
            },
            {
              title: "RabbitMQ",
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/order-manager/images/rabbitmq.png",
              alt: t("demo.systemDesign"),
            },
          ],
        }}
      />
    </div>
  );
}
