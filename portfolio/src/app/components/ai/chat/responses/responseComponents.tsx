import type { ReactNode } from "react";
import { ProfileCard } from "./ProfileCard";
import { SkillsCard } from "./SkillsCard";
import { ProjectsCard } from "./ProjectsCard";
import { ContactsCard } from "./ContactsCard";

const keywordGroups: { keywords: string[]; factory: () => ReactNode }[] = [
  { keywords: ["about", "sobre"], factory: () => <ProfileCard /> },
  { keywords: ["skills", "habilidades"], factory: () => <SkillsCard /> },
  { keywords: ["projects", "projetos"], factory: () => <ProjectsCard /> },
  { keywords: ["contact", "contato"], factory: () => <ContactsCard /> },
];

export function getResponseComponent(input: string): ReactNode | null {
  const lower = input.toLowerCase();
  for (const { keywords, factory } of keywordGroups) {
    if (keywords.some((kw) => lower.includes(kw))) {
      return factory();
    }
  }
  return null;
}
