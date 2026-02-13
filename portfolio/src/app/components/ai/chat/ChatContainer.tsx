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

        if (response.status === 429) {
          const aiMsg: Message = {
            id: crypto.randomUUID(),
            role: "ai",
            content:
              "I've reached my message limit. Please try again in a little while!",
            timestamp: Date.now(),
          };
          setMessages((prev) => [...prev, aiMsg]);
          return;
        }

        if (!response.ok) {
          const aiMsg: Message = {
            id: crypto.randomUUID(),
            role: "ai",
            content: "Sorry, something went wrong. Please try again.",
            timestamp: Date.now(),
          };
          setMessages((prev) => [...prev, aiMsg]);
          return;
        }

        const aiMsgId = crypto.randomUUID();
        const aiMsg: Message = {
          id: aiMsgId,
          role: "ai",
          content: "",
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, aiMsg]);

        const reader = response.body!.getReader();
        const decoder = new TextDecoder();
        let fullContent = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          fullContent += decoder.decode(value, { stream: true });
          const snapshot = fullContent;
          setMessages((prev) =>
            prev.map((m) =>
              m.id === aiMsgId ? { ...m, content: snapshot } : m
            )
          );
        }

        const component = getResponseComponent(userContent);
        if (component) {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === aiMsgId ? { ...m, component } : m
            )
          );
        }
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
