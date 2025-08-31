import styles from "./key-features.module.css";
import { CircleCheck } from "lucide-react";
export interface KeyFeaturesProps {
  features: string[];
}
export function KeyFeatures({ features }: KeyFeaturesProps) {
  return (
    <div className={styles.keyFeatures}>
      <div className={styles.keyFeaturesTitle}>
        <CircleCheck color="#9ae5f3" />
        <h3>Key Features</h3>
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
