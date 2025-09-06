import Image from "next/image";
import styles from "./project-card.module.css";
import { useTranslations } from "next-intl";
import { TransitionLink } from "../../transition-link";

interface Tag {
  name: string;
  icon: string;
}
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: Tag[];
  demoLink: string;
  codeLink: string;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  demoLink,
  codeLink,
}: ProjectCardProps) {
  const t = useTranslations("ProjectCard");

  return (
    <div className={styles.card}>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${image})` }}
      >
        <Image
          src={image}
          alt={`${title} preview`}
          width={200}
          height={200}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>

        <div className={styles.tags}>
          {tags.map((tag, idx) => (
            <span key={idx} className={styles.tag}>
              <Image
                src={tag.icon}
                alt={`${title} preview`}
                width={400}
                height={200}
                className={styles.icon}
              />
              {tag.name}
            </span>
          ))}
        </div>

        <div className={styles.actions}>
          <div className={styles.demoBtn}>
            <TransitionLink href={demoLink} label={t("moreInfo")} />
          </div>

          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.codeBtn}
          >
            {t("code")}
          </a>
        </div>
      </div>
    </div>
  );
}
