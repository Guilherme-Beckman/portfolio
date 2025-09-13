"use client";
import { motion } from "motion/react";
interface SlideInProps {
  children: React.ReactNode;
  fromX?: number;
  duration?: number;
}

export function SlideIn({ children, fromX = -50, duration = 1 }: SlideInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: fromX }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
}
