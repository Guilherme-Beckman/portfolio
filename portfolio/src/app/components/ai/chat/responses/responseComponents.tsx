import type { ReactNode } from "react";
import { ProfileCard } from "./ProfileCard";
import { SkillsCard } from "./SkillsCard";
import { ProjectsCard } from "./ProjectsCard";

const componentMap: Record<string, () => ReactNode> = {
  about: () => <ProfileCard />,
  skills: () => <SkillsCard />,
  projects: () => <ProjectsCard />,
};

export function getResponseComponent(input: string): ReactNode | null {
  const lower = input.toLowerCase();
  for (const [keyword, factory] of Object.entries(componentMap)) {
    if (lower.includes(keyword)) {
      return factory();
    }
  }
  return null;
}
