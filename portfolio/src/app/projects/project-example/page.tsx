import { MoreAbout } from "@/app/components/projects/more-about/more-about";
export default function ProjectExample() {
  return (
    <div>
      <MoreAbout
        navProps={{ gitHubUrl: "url", liveDemoUrl: "url" }}
        mainImageProps={{
          url: "/icons/skills/angular-svgrepo-com.svg",
          alt: "Angular Project",
        }}
        title="Angular Project"
        subtitle="Comprehensive Church Management Platform"
        badges={[
          { name: "Live", color: "gray" },
          { name: "Live", color: "cyan" },
          { name: "Live", color: "pink" },
        ]}
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus at
      deleniti eligendi asperiores corrupti impedit minima commodi harum facere,
      voluptatum distinctio nemo! Aliquid fuga qui eaque eius. Harum, temporibus
      nostrum?"
        features={[
          "Member Management",
          "System Attendance",
          "Tracking Financial",
          "Tracking Financial",
          "Tracking Financial",
        ]}
        technicalSpecifications={{
          frontend: [
            { name: "React", iconUrl: "/icons/skills/react.svg" },
            {
              name: "Angular",
              iconUrl: "/icons/skills/angular-svgrepo-com.svg",
            },
            { name: "TypeScript", iconUrl: "/icons/skills/typescript.svg" },
            {
              name: "Tailwind CSS",
              iconUrl: "/icons/skills/css-3-svgrepo-com.svg",
            },
          ],
          backend: [
            {
              name: "Java Spring Boot",
              iconUrl: "/icons/skills/spring-svgrepo-com.svg",
            },
            { name: "Node.js", iconUrl: "/icons/skills/js-svgrepo-com.svg" },
            {
              name: "Python FastAPI",
              iconUrl: "/icons/skills/fastapi-svgrepo-com.svg",
            },
            { name: "Go", iconUrl: "" }, // sem ícone disponível, pode adicionar depois
          ],
          database: [
            {
              name: "PostgreSQL",
              iconUrl: "/icons/skills/postgresql-svgrepo-com.svg",
            },
            {
              name: "MongoDB",
              iconUrl: "/icons/skills/mongodb-svgrepo-com.svg",
            },
            { name: "Redis", iconUrl: "" }, // sem ícone disponível
            { name: "MySQL", iconUrl: "/icons/skills/mysql-svgrepo-com.svg" },
          ],
          authentication: [
            { name: "JWT", iconUrl: "" },
            { name: "OAuth2", iconUrl: "" },
            { name: "Firebase Auth", iconUrl: "" },
            {
              name: "Spring Security",
              iconUrl: "/icons/skills/spring-svgrepo-com.svg",
            },
          ],
          hosting: [
            { name: "AWS", iconUrl: "/icons/skills/aws-svgrepo-com.svg" },
            { name: "Google Cloud", iconUrl: "" },
            { name: "Vercel", iconUrl: "" },
            { name: "Netlify", iconUrl: "" },
          ],
          performance: [
            { name: "Caching", iconUrl: "" },
            { name: "Load Balancing", iconUrl: "" },
            { name: "CDN", iconUrl: "" },
            { name: "Horizontal Scaling", iconUrl: "" },
          ],
        }}
        projectStatistics={{
          statistics: [
            { label: "Active Users", value: "500+" },
            { label: "Churches Served", value: "25+" },
            { label: "Uptime", value: "99.9%" },
            { label: "Performance Score", value: "95/100" },
          ],
        }}
        developmentTimeline={{
          events: [
            {
              date: "Jan 2025",
              title: "Início do projeto",
              description: "Planejamento inicial",
            },
            {
              date: "Mar 2025",
              title: "Primeira versão",
              description: "Versão beta lançada",
            },
            {
              date: "Ago 2025",
              title: "Versão final",
              description: "Lançamento oficial",
            },
          ],
        }}
        demo={{
          slides: [
            {
              title: "Title",
              type: "image",
              src: "/icons/skills/angular-svgrepo-com.svg",
              alt: "Foto 1",
            },
            {
              title: "Title",
              type: "video",
              src: "https://cdn.pixabay.com/video/2025/08/20/298643_large.mp4",
            },
            {
              title: "Title",
              type: "video",
              src: "https://cdn.pixabay.com/video/2021/09/11/88242-602915695_large.mp4",
            },
            {
              title: "Title",
              type: "video",
              src: "https://cdn.pixabay.com/video/2020/02/24/32767-394004551_large.mp4",
            },
          ],
        }}
      ></MoreAbout>
    </div>
  );
}
