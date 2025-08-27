"use client"
import { SocialButton } from "@/app/components/ui/social-button/social-button";
import { Github } from "lucide-react";
export function GitHubIcon() {
  return (
    <SocialButton
      icon={< Github/>}
      label="Git Hub"
      onClick={() => window.open("https://seu-link-demo.com", "_blank")}
    />
  );
}
