import { BackArrow } from "@/app/components/ui/back-arrow/back-arrow";
import styles from "./nav-project.module.css";
import { SocialButton } from "@/app/components/ui/social-button/social-button";
import { Github, SquareArrowOutUpRight } from "lucide-react";

export function NavProject() {
  return (
    <div className={styles.navProject}>
      <BackArrow mainText="Voltar para projetos" />
      <div className={styles.live}>
        <SocialButton
          icon={<Github />}
          label="Git Hub"
          onClick={() => window.open("https://seu-link-demo.com", "_blank")}
        />
        <SocialButton
          icon={<SquareArrowOutUpRight />}
          label="Live Demo"
          onClick={() => window.open("https://seu-link-demo.com", "_blank")}
        />
      </div>
    </div>
  );
}
