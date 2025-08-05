"use client";

import { motion } from "motion/react";

interface FadeInProps {
  children: React.ReactNode;
  fromY?: number;
  duration?: number;
}
export function FadeIn({ children, fromY = 20, duration = 1 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: fromY }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: duration }}
    >
      {children}
    </motion.div>
  );
}
