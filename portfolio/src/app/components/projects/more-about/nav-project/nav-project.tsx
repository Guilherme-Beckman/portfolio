"use client"
import { BackArrow } from "@/app/components/ui/back-arrow/back-arrow";
import styles from "./nav-project.module.css";
import { SocialButton } from "@/app/components/ui/social-button/social-button";
import { Github, SquareArrowOutUpRight } from "lucide-react";
export interface NavProjectProps {
  gitHubUrl?: string;
  liveDemoUrl?: string;
}
export function NavProject({ gitHubUrl, liveDemoUrl }: NavProjectProps) {
  return (
    <div className={styles.navProject}>
      <BackArrow mainText="Voltar para projetos" />
      <div className={styles.live}>
        <SocialButton
          icon={<Github />}
          label="Git Hub"
          onClick={() => window.open(gitHubUrl, "_blank")}
        />
        <SocialButton
          icon={<SquareArrowOutUpRight />}
          label="Live Demo"
          onClick={() => window.open(liveDemoUrl, "_blank")}
        />
      </div>
    </div>
  );
}
