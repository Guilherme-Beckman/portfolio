"use client";

import { motion } from "motion/react";
import type { Message } from "./types";
import styles from "./ChatMessage.module.css";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";
  return (
    <motion.div
      className={`${styles.message} ${isUser ? styles.user : styles.ai}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {message.component ? (
        message.component
      ) : (
        <div className={styles.bubble}>{message.content}</div>
      )}
    </motion.div>
  );
}
