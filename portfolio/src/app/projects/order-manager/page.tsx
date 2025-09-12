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
          url: "/icons/skills/spring-svgrepo-com.svg",
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
              name: "RabbitMQ",
              iconUrl: "/icons/skills/rabbitmq-icon-svgrepo-com.svg",
            },
            { name: "Postman", iconUrl: "/icons/skills/postman-icon-svgrepo-com.svg" },
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
          authentication: [
            {
              name: "Spring Security",
              iconUrl: "/icons/skills/spring-svgrepo-com.svg",
            },
          ],
          performance: [{ name: "Exception Handling (RFC)", iconUrl: "" }],
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
              date: "Mar 2024",
              title: t("timeline.projectStart"),
              description: t("timeline.initialPlanning"),
            },
            {
              date: "Apr 2024",
              title: t("timeline.firstServices"),
              description: t("timeline.basicArchitecture"),
            },
            {
              date: "May 2024",
              title: t("timeline.integration"),
              description: t("timeline.rabbitMqWorking"),
            },
            {
              date: "Jun 2024",
              title: t("timeline.testing"),
              description: t("timeline.postmanDocs"),
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
