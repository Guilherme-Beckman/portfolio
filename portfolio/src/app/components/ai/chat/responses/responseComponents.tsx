import type { ReactNode } from "react";
import { ProfileCard } from "./ProfileCard";

const componentMap: Record<string, () => ReactNode> = {
  about: () => <ProfileCard />,
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
