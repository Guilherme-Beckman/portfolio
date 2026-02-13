"use client";
import styles from "./prompts.module.css";

interface PromptsProps {
  onPromptClick?: (prompt: string) => void;
}

const promptLabels = ["About", "Projects", "Contact", "Skills"];

export function Prompts({ onPromptClick }: PromptsProps) {
  return (
    <div className={styles.prompts}>
      <div className={styles.container}>
        <ul>
          {promptLabels.map((label) => (
            <li key={label}>
              <button onClick={() => onPromptClick?.(label)}>{label}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
