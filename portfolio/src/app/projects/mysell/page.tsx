import { MoreAbout } from "@/app/components/projects/more-about/more-about";
import { useTranslations } from "next-intl";

export default function ProjectExample() {
  const t = useTranslations("ProjectPage.MySell");

  // Sempre garante array de strings plano
  const featuresRaw = t("features"); // retorna string
  const features = featuresRaw.split(";").map((f) => f.trim());

  return (
    <div>
      <MoreAbout
        navProps={{
          gitHubUrl: "https://github.com/Guilherme-Beckman/mysell",
        }}
        mainImageProps={{
          url: "https://guilherme-beckman.github.io/portfolio-assets/mysell/images/favicon.png",
          alt: t("title"),
        }}
        title={t("title")}
        subtitle={t("subtitle")}
        badges={[
          { name: "Java", color: "orange" },
          { name: "Angular", color: "blue" },
          { name: "Ionic", color: "cyan" },
        ]}
        description={t("description")}
        features={features}
        technicalSpecifications={{
          frontend: [
            {
              name: "Angular",
              iconUrl: "/icons/skills/angular-svgrepo-com.svg",
            },
            { name: "Ionic", iconUrl: "/icons/skills/ionic-svgrepo-com.svg" },
            { name: "TypeScript", iconUrl: "/icons/skills/typescript.svg" },
            {
              name: "HTML/CSS",
              iconUrl: "/icons/skills/html-5-svgrepo-com.svg",
            },
          ],
          backend: [
            {
              name: "Java Spring Boot",
              iconUrl: "/icons/skills/spring-svgrepo-com.svg",
            },
            { name: "Golang", iconUrl: "" },
            {
              name: "Python FastAPI",
              iconUrl: "/icons/skills/fastapi-svgrepo-com.svg",
            },
          ],
          database: [
            {
              name: "PostgreSQL",
              iconUrl: "/icons/skills/postgresql-svgrepo-com.svg",
            },
            { name: "Redis", iconUrl: "" },
          ],
          authentication: [
            { name: "JWT", iconUrl: "" },
            { name: "OAuth2", iconUrl: "" },
            {
              name: "Spring Security",
              iconUrl: "/icons/skills/spring-svgrepo-com.svg",
            },
          ],
          hosting: [
            { name: "AWS", iconUrl: "/icons/skills/aws-svgrepo-com.svg" },
            { name: "Vercel", iconUrl: "" },
          ],
          performance: [
            { name: "Caching", iconUrl: "" },
            { name: "Load Balancing", iconUrl: "" },
          ],
        }}
        projectStatistics={{
          statistics: [
            { label: "Active Users", value: "500+" },
            { label: "Uptime", value: "99.9%" },
            { label: "Performance Score", value: "95/100" },
          ],
        }}
        developmentTimeline={{
          events: [
            {
              date: "Jan 2025",
              title: "Project Start",
              description: "Initial Planning",
            },
            {
              date: "Mar 2025",
              title: "Beta Release",
              description: "First Version",
            },
            {
              date: "Aug 2025",
              title: "Official Launch",
              description: "Final Version",
            },
          ],
        }}
        demo={{
          slides: [
            {
              title: t("demo.dashboard"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/mysell/images/MySell%20–%20Figma.png",
              alt: t("demo.dashboard") + " Preview",
            },
            {
              title: t("demo.bancoDeDados"),
              type: "image",
              src: "https://guilherme-beckman.github.io/portfolio-assets/mysell/images/psql-mysell.png",
              alt: t("demo.bancoDeDados") + " Preview",
            },
            {
              title: t("demo.loginRaw"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/mysell/videos/raw-login.mp4",
            },
            {
              title: t("demo.registerRaw"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/mysell/videos/raw-register.mp4",
            },
            {
              title: t("demo.googleLogin"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/mysell/videos/google-login.mp4",
            },
            {
              title: t("demo.facebookLogin"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/mysell/videos/facebook-login.mp4",
            },
            {
              title: t("demo.criandoProdutos"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/mysell/videos/raw-create-products.mp4",
            },
            {
              title: t("demo.produtosPreCriados"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/mysell/videos/pre-created-products.mp4",
            },
            {
              title: t("demo.editandoProdutos"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/mysell/videos/editing-products.mp4",
            },
            {
              title: t("demo.excluindoProdutos"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/mysell/videos/deleting-products.mp4",
            },
            {
              title: t("demo.vendendoProdutos"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/mysell/videos/seling-products.mp4",
            },
            {
              title: t("demo.excluindoVendas"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/mysell/videos/delete-sales.mp4",
            },
            {
              title: t("demo.qrCodeProdutos"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/mysell/videos/qr-code-create-products.mp4",
            },
            {
              title: t("demo.gerandoRelatoriosPDF"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/mysell/videos/generating-pdf-reports.mp4",
            },
            {
              title: t("demo.graficoRelatorios"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/mysell/videos/general-reports-graph.mp4",
            },
            {
              title: t("demo.excecaoBruteForce"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/mysell/videos/brute-force-exception.mp4",
            },
            {
              title: t("demo.visaoGeralAplicacao"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/mysell/videos/general-application.mp4",
            },
            {
              title: t("demo.buscandoCoisas"),
              type: "video",
              src: "https://guilherme-beckman.github.io/portfolio-assets/mysell/videos/searching-things.mp4",
            },
          ],
        }}
      />
    </div>
  );
}
