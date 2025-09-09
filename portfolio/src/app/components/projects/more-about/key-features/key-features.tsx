import { useTranslations } from "next-intl";
import styles from "./key-features.module.css";
import { CircleCheck } from "lucide-react";
export interface KeyFeaturesProps {
  features: string[];
}
export function KeyFeatures({ features }: KeyFeaturesProps) {
  const t = useTranslations("KeyFeatures");
  return (
    <div className={styles.keyFeatures}>
      <div className={styles.keyFeaturesTitle}>
        <CircleCheck color="#9ae5f3" />
        <h3>{t("keyFeatures")}</h3>{" "}
      </div>

      <ul className={styles.featuresContainer}>
        {features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            <CircleCheck color="#9ae5f3" className={styles.checkIcon} />
            <p className={styles.featureText}>{feature}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
