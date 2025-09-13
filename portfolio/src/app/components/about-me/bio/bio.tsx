import Image from "next/image";
import Profile from "public/images/pic.jpeg";
import styles from "./bio.module.css";
import { useTranslations } from "next-intl";

export function Bio() {
  const t = useTranslations("Bio");

  return (
    <div className={`${styles.bio} animatedBg`}>
      <div className={styles.imageWrapper}>
        <Image
          src={Profile}
          alt={t("alt")}
          className={styles.mainImage}
          priority
        />
      </div>
      <div className={styles.info}>
        <h2 className={styles.role}>{t("role")}</h2>
        <h1 className={styles.name}>{t("name")}</h1>
        <h3 className={styles.status}>{t("status")}</h3>
      </div>
    </div>
  );
}
