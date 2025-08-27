import { BackArrow } from "@/app/components/ui/back-arrow/back-arrow";
import { GitHubIcon } from "@/app/components/ui/github-icon/github-icon";
import styles from "./nav-project.module.css";
import { LiveDemo } from "../live-demo/live-demo";
export function NavProject() {
  return (
    <div className={styles.navProject}>
      <BackArrow mainText="Voltar para projetos" />
      <div className={styles.live}>
        <GitHubIcon />
        <LiveDemo />
      </div>
    </div>
  );
}
