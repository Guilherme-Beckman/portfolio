'use client'
import styles from "./input.module.css";
import Image from "next/image";
import arrow from "public/icons/arrow.svg";
import { useState } from "react";

interface AiInputProps {
  onSubmit?: (value: string) => void;
  disabled?: boolean;
}

export function AiInput({ onSubmit, disabled }: AiInputProps) {
  const [inputValue, setInputValue] = useState("");
  const isButtonDisable = inputValue.trim() === "" || disabled;

  function handleSubmit() {
    if (disabled) return;
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    onSubmit?.(trimmed);
    setInputValue("");
  }

  return (
    <div className={styles.input}>
      <div className={styles.container}>
        <input
          type="text"
          placeholder="Ask me something..."
          value={inputValue}
          disabled={disabled}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />
        <button type="submit" disabled={isButtonDisable} onClick={handleSubmit}>
          <Image src={arrow} alt="Arrow" width={25} height={25} />
        </button>
      </div>
    </div>
  );
}
