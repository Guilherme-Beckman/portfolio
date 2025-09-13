'use client'
import styles from "./input.module.css";
import Image from "next/image";
import arrow from "public/icons/arrow.svg";
import { useState } from "react";
export function AiInput() {
  const [inputValue, setInputValue] = useState("");
  const isButtonDisable = inputValue.trim() === "";
  return (
    <div className={styles.input}>
      <div className={styles.container}>
        <input
          type="text"
          placeholder="Ask me something..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" disabled={isButtonDisable}>
          <Image src={arrow} alt="Arrow" width={25} height={25} />
        </button>
      </div>
    </div>
  );
}
