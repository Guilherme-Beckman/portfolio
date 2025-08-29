import { MoreAbout } from "@/app/components/projects/more-about/more-about";
export default function ProjectExample() {
  return (
    <div>
      <MoreAbout
        navProps={{ gitHubUrl: "url", liveDemoUrl: "url" }}
        mainImageProps={{url: "/icons/skills/angular-svgrepo-com.svg", alt:"Angular Project"}}
      ></MoreAbout>
    </div>
  );
}
