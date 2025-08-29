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
      ></MoreAbout>
    </div>
  );
}
