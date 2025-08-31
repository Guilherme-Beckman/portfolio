import Image from "next/image";
import styles from "./technical-specifications.module.css";
import { Grid2X2Plus } from "lucide-react";

export interface TechItem {
  name: string;
  iconUrl: string;
}

export interface TechnicalSpecificationsProps {
  frontend: TechItem[];
  backend: TechItem[];
  database: TechItem[];
  authentication: TechItem[];
  hosting: TechItem[];
  performance: TechItem[];
}

export function TechnicalSpecifications({
  frontend,
  backend,
  database,
  authentication,
  hosting,
  performance,
}: TechnicalSpecificationsProps) {
  const sections = [
    { title: "Frontend", items: frontend },
    { title: "Backend", items: backend },
    { title: "Database", items: database },
    { title: "Authentication", items: authentication },
    { title: "Hosting", items: hosting },
    { title: "Performance", items: performance },
  ];

  return (
    <div className={styles.technicalSpecifications}>
      <div className={styles.title}>
        <Grid2X2Plus color="#9ae5f3" />
        <h3>Technical Specifications</h3>
      </div>

      {sections.map((section, index) => (
        <div key={index} className={styles.section}>
          <span className={styles.sectionTitle}>{section.title}</span>
          <ul className={styles.specsContainer}>
            {section.items.map((item, i) => (
              <li key={i} className={styles.specItem}>
                {item.iconUrl && (
                  <Image
                    src={item.iconUrl}
                    alt={""}
                    width={20}
                    height={20}
                    className={styles.specIcon}
                  />
                )}
                <p className={styles.specText}>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
