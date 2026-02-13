import type { ReactNode } from "react";

export interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
  timestamp: number;
  component?: ReactNode;
}
