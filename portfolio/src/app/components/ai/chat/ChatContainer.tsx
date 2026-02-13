"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Message } from "./types";
import { getResponseComponent } from "./responses/responseComponents";
import { ChatMessages } from "./ChatMessages";
import { AiInput } from "../input/input";
import styles from "./ChatContainer.module.css";

interface ChatContainerProps {
  initialMessage: string;
}

function getLocale(): string {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/(?:^|;\s*)locale=([^;]*)/);
  return match?.[1] || "en";
}

export function ChatContainer({ initialMessage }: ChatContainerProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const addAiReply = useCallback(
    async (userContent: string, currentMessages: Message[]) => {
      setIsTyping(true);

      try {
        const history = currentMessages.map((m) => ({
          role: m.role,
          content: m.content,
        }));

        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: userContent,
            locale: getLocale(),
            history,
          }),
        });

        let content: string;
        if (response.status === 429) {
          content =
            "I've reached my message limit. Please try again in a little while!";
        } else if (!response.ok) {
          content = "Sorry, something went wrong. Please try again.";
        } else {
          const data = await response.json();
          content = data.content;
        }

        const component = getResponseComponent(userContent);

        const aiMsg: Message = {
          id: crypto.randomUUID(),
          role: "ai",
          content,
          timestamp: Date.now(),
          ...(component ? { component } : {}),
        };
        setMessages((prev) => [...prev, aiMsg]);
      } catch {
        const errorMsg: Message = {
          id: crypto.randomUUID(),
          role: "ai",
          content:
            "Sorry, I couldn't connect to the server. Please try again.",
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, errorMsg]);
      } finally {
        setIsTyping(false);
      }
    },
    []
  );

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
    addAiReply(initialMessage, [userMsg]);
  }, [initialMessage, addAiReply]);

  const messagesRef = useRef<Message[]>([]);
  messagesRef.current = messages;

  function handleSend(value: string) {
    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: value,
      timestamp: Date.now(),
    };
    const updated = [...messagesRef.current, userMsg];
    setMessages(updated);
    addAiReply(value, updated);
  }

  return (
    <div className={styles.container}>
      <ChatMessages messages={messages} isTyping={isTyping} />
      <div className={styles.inputArea}>
        <AiInput onSubmit={handleSend} disabled={isTyping} />
      </div>
    </div>
  );
}
