"use client";
import styles from "./prompts.module.css";
import { useTranslations } from "next-intl";

interface PromptsProps {
  onPromptClick?: (prompt: string) => void;
}

const promptKeys = ["about", "projects", "contact", "skills"] as const;

export function Prompts({ onPromptClick }: PromptsProps) {
  const t = useTranslations("Prompts");

  return (
    <div className={styles.prompts}>
      <div className={styles.container}>
        <ul>
          {promptKeys.map((key) => (
            <li key={key}>
              <button
                type="button"
                onClick={() => {
                  console.log("clicked", key, t(key));
                  onPromptClick?.(t(key));
                }}
              >
                {t(key)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
