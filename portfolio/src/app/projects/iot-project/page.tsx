import { MoreAbout } from "@/app/components/projects/more-about/more-about";
import { useTranslations } from "next-intl";

export default function IoTSchoolBell() {
  const t = useTranslations("ProjectPage.IoTSchoolBell");

  const featuresRaw = t("features");
  const features = featuresRaw.split(";").map((f) => f.trim());

  return (
    <div>
      <MoreAbout
        navProps={{
          gitHubUrl: "https://github.com/Gaby0805/Arduino-Rirau-ipyra",
        }}
        mainImageProps={{
          url: "/icons/skills/python-svgrepo-com.svg",
          alt: t("title"),
        }}
        title={t("title")}
        subtitle={t("subtitle")}
        badges={[
          { name: "IoT", color: "green" },
          { name: "FastAPI", color: "blue" },
          { name: "Next.js", color: "gray" },
        ]}
        description={t("description")}
        features={features}
        technicalSpecifications={{
          backend: [
            { name: "Python", iconUrl: "/icons/skills/python-svgrepo-com.svg" },
            {
              name: "FastAPI",
              iconUrl: "/icons/skills/fastapi-svgrepo-com.svg",
            },
            {
              name: "SQLAlchemy",
              iconUrl: "/icons/skills/SQLAlchemy.svg",
            },

            {
              name: "Arduino",
              iconUrl: "/icons/skills/arduino-svgrepo-com.svg",
            },
            {
              name: "ESP8266",
              iconUrl: "/icons/skills/wifi-svgrepo-com.svg",
            },
            { name: "TypeScript", iconUrl: "/icons/skills/typescript.svg" },
          ],
          database: [
            {
              name: "SQLite",
              iconUrl: "/icons/skills/sqllite-svgrepo-com.svg",
            },
          ],
          frontend: [
            {
              name: "Next.js",
              iconUrl: "/icons/skills/nextjs-fill-svgrepo-com.svg",
            },
            { name: "TypeScript", iconUrl: "/icons/skills/typescript.svg" },
          ],
          performance: [
            {
              name: "WebSocket",
              iconUrl: "/icons/skills/websocket-svgrepo-com.svg",
            },
          ],
          authentication: [
            { name: "TypeScript", iconUrl: "/icons/skills/typescript.svg" },
          ],
          hosting: [
            { name: "Docker", iconUrl: "/icons/skills/docker-svgrepo-com.svg" },
          ],
        }}
        projectStatistics={{
          statistics: [
            {
              label: t("statistics.devicesConnected"),
              value: "1 Arduino + ESP8266",
            },
            { label: t("statistics.scheduledRings"), value: "100%" },
            { label: t("statistics.manualIntervention"), value: "0" },
          ],
        }}
        developmentTimeline={{
          events: [
            {
              date: "May 2025",
              title: t("timeline.projectStart"),
              description: t("timeline.initialPlanning"),
            },
            {
              date: "Jun 2025",
              title: t("timeline.hardwareIntegration"),
              description: t("timeline.arduinoTests"),
            },
            {
              date: "Jun 2025",
              title: t("timeline.apiDevelopment"),
              description: t("timeline.fastApiIntegration"),
            },
            {
              date: "Jul 2025",
              title: t("timeline.frontendDevelopment"),
              description: t("timeline.schedulerUI"),
            },
            {
              date: "Ago 2025",
              title: t("timeline.productionDeployment"),
              description: t("timeline.systemOperational"),
            },
          ],
        }}
        demo={{
          slides: [
            {
              title: t("demo.thinkercad"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/iot-project/images/draw-arduino.jpeg",
              alt: t("demo.thinkercad") + " Preview",
            },
            {
              title: t("demo.figma"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/iot-project/images/frontend.jpeg",
              alt: t("demo.figma") + " Preview",
            },
            {
              title: t("demo.onshape"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/iot-project/images/onshape-1.png",
              alt: t("demo.onshape") + " Preview",
            },
            {
              title: t("demo.onshape"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/iot-project/images/onshape-2.png",
            },
            {
              title: t("demo.cCode"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/iot-project/images/c-arduino.png",
            },
          ],
        }}
      />
    </div>
  );
}
