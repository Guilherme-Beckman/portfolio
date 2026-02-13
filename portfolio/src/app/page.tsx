"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { TypingText } from "./components/typing-text/typing-text";
import { AiInput } from "./components/ai/input/input";
import { Prompts } from "./components/ai/prompts/prompts";
import { ChatContainer } from "./components/ai/chat/ChatContainer";
import { FadeIn } from "./components/animations/fade-in";
import styles from "./page.module.css";

export default function Page() {
  const [chatMode, setChatMode] = useState(false);
  const [initialMessage, setInitialMessage] = useState("");

  function startChat(message: string) {
    setInitialMessage(message);
    setChatMode(true);
  }

  return (
    <div className={styles.page}>
      <AnimatePresence mode="wait">
        {!chatMode ? (
          <motion.div
            key="landing"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <h1>
              <FadeIn fromY={-20}>
                <span className={styles.highlighted}>AI Portfolio</span>
              </FadeIn>
              <br />
              <br />
              <FadeIn>
                <TypingText />
              </FadeIn>
            </h1>
            <FadeIn>
              <AiInput onSubmit={startChat} />
              <Prompts onPromptClick={startChat} />
            </FadeIn>
          </motion.div>
        ) : (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ width: "100%" }}
          >
            <ChatContainer initialMessage={initialMessage} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
