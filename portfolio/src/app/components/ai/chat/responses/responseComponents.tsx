import type { ReactNode } from "react";
import { ProfileCard } from "./ProfileCard";
import { SkillsCard } from "./SkillsCard";
import { ProjectsCard } from "./ProjectsCard";
import { ContactsCard } from "./ContactsCard";

const componentMap: Record<string, () => ReactNode> = {
  about: () => <ProfileCard />,
  skills: () => <SkillsCard />,
  projects: () => <ProjectsCard />,
  contact: () => <ContactsCard />,
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
