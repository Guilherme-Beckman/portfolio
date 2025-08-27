"use client"
import { SocialButton } from "@/app/components/ui/social-button/social-button";
import { SquareArrowOutUpRight } from "lucide-react";
export function LiveDemo() {
  return (
    <SocialButton
      icon={<SquareArrowOutUpRight />}
      label="Live Demo"
      onClick={() => window.open("https://seu-link-demo.com", "_blank")}
    />
  );
}
