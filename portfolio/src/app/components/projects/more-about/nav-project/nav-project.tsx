import { BackArrow } from "@/app/components/ui/back-arrow/back-arrow";
import { GitHubIcon } from "@/app/components/ui/github-icon/github-icon";
import styles from "./nav-project.module.css";
export function NavProject() {
  return (
    <div className={styles.navProject}>
      <BackArrow mainText="Voltar para projetos" />
      <div className="live">
        <GitHubIcon />
      </div>
    </div>
  );
}
