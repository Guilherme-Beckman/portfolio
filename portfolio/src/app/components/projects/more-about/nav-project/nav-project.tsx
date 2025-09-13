"use client";
import { BackArrow } from "@/app/components/ui/back-arrow/back-arrow";
import styles from "./nav-project.module.css";
import { SocialButton } from "@/app/components/ui/social-button/social-button";
import { Github, SquareArrowOutUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

export interface NavProjectProps {
  gitHubUrl?: string;
  liveDemoUrl?: string;
}

export function NavProject({ gitHubUrl, liveDemoUrl }: NavProjectProps) {
  const t = useTranslations("NavProject");

  return (
    <div className={styles.navProject}>
      <BackArrow mainText={t("backToProjects")} />

      <div className={styles.live}>
        {gitHubUrl && (
          <SocialButton
            icon={<Github />}
            label={t("github")}
            onClick={() => window.open(gitHubUrl, "_blank")}
          />
        )}

        {liveDemoUrl && (
          <SocialButton
            icon={<SquareArrowOutUpRight />}
            label={t("liveDemo")}
            onClick={() => window.open(liveDemoUrl, "_blank")}
          />
        )}
      </div>
    </div>
  );
}
