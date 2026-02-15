import { MoreAbout } from "@/app/components/projects/more-about/more-about";
import { useTranslations } from "next-intl";

export default function AiRuleGeneratorPage() {
  const t = useTranslations("ProjectPage.AiRuleGenerator");
  const featuresRaw = t("features", { default: "" });
  const features = featuresRaw
    ? featuresRaw.split(";").map((f) => f.trim())
    : [];

  return (
    <div>
      <MoreAbout
        navProps={{
          gitHubUrl: "https://github.com/ACAOX/gerador-regras",
        }}
        mainImageProps={{
          url: "/icons/skills/ai-svgrepo-com.svg",
          alt: t("title"),
        }}
        title={t("title")}
        subtitle={t("subtitle")}
        badges={[
          { name: "AI", color: "blue" },
          { name: "RAG", color: "green" },
          { name: "NLP", color: "purple" },
        ]}
        description={t("description")}
        features={features}
        technicalSpecifications={{
          backend: [
            {
              name: "Python",
              iconUrl: "/icons/skills/python-svgrepo-com.svg",
            },
            {
              name: "Google Gemini 2.0 Flash",
              iconUrl: "/icons/skills/google-gemini-icon.svg",
            },
            {
              name: "ChromaDB",
              iconUrl: "/icons/skills/database-data-base-svgrepo-com.svg",
            },
            {
              name: "sentence-transformers",
              iconUrl: "/icons/skills/ai-svgrepo-com.svg",
            },
            {
              name: "pdfplumber",
              iconUrl: "/icons/skills/PDF_file_icon.svg",
            },
            {
              name: "pandas",
              iconUrl: "/icons/skills/Pandas.svg",
            },
            { name: "BeautifulSoup", iconUrl: "" },
          ],
        }}
        projectStatistics={{
          statistics: [
            { label: t("statistics.rulesPerExecution"), value: "200–300" },
            {
              label: t("statistics.cpcPronouncementsIndexed"),
              value: "50+",
            },
            { label: t("statistics.costPerRun"), value: "$0" },
            { label: t("statistics.llmBackends"), value: "3" },
          ],
        }}
        developmentTimeline={{
          events: [
            {
              date: "Jan 2026",
              title: t("timeline.ragSetup"),
              description: t("timeline.ragSetupDesc"),
            },
            {
              date: "Feb 2026",
              title: t("timeline.ruleGeneration"),
              description: t("timeline.ruleGenerationDesc"),
            },
            {
              date: "Feb 2026",
              title: t("timeline.optimization"),
              description: t("timeline.optimizationDesc"),
            },
          ],
        }}
        demo={{
          slides: [
            {
              title: "Python",
              type: "image",
              src: "/icons/skills/python-svgrepo-com.svg",
              alt: "Python",
            },
            {
              title: "Google Gemini",
              type: "image",
              src: "/icons/skills/google-gemini-icon.svg",
              alt: "Google Gemini",
            },
            {
              title: "AI / RAG",
              type: "image",
              src: "/icons/skills/ai-svgrepo-com.svg",
              alt: "AI RAG Architecture",
            },
            {
              title: "pandas",
              type: "image",
              src: "/icons/skills/Pandas.svg",
              alt: "pandas",
            },
            {
              title: "PDF Processing",
              type: "image",
              src: "/icons/skills/PDF_file_icon.svg",
              alt: "PDF Processing",
            },
            {
              title: "Database",
              type: "image",
              src: "/icons/skills/database-data-base-svgrepo-com.svg",
              alt: "ChromaDB Vector Store",
            },
          ],
        }}
      />
    </div>
  );
}
