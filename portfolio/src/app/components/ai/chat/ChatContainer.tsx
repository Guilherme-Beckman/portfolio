"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Message } from "./types";
import { getMockResponse, MOCK_DELAY_MS } from "./mockResponses";
import { ChatMessages } from "./ChatMessages";
import { AiInput } from "../input/input";
import styles from "./ChatContainer.module.css";

interface ChatContainerProps {
  initialMessage: string;
}

export function ChatContainer({ initialMessage }: ChatContainerProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const addAiReply = useCallback((userContent: string) => {
    setIsTyping(true);
    setTimeout(() => {
      const aiMsg: Message = {
        id: crypto.randomUUID(),
        role: "ai",
        content: getMockResponse(userContent),
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, MOCK_DELAY_MS);
  }, []);

  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: initialMessage,
      timestamp: Date.now(),
    };
    setMessages([userMsg]);
    addAiReply(initialMessage);
  }, [initialMessage, addAiReply]);

  function handleSend(value: string) {
    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: value,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, userMsg]);
    addAiReply(value);
  }

  return (
    <div className={styles.container}>
      <ChatMessages messages={messages} isTyping={isTyping} />
      <div className={styles.inputArea}>
        <AiInput onSubmit={handleSend} />
      </div>
    </div>
  );
}
