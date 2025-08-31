/* animations.ts */
import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animationPageIn = () => {
  const overlay = document.getElementById("page-overlay");
  
  if (overlay) {
    gsap.to(overlay, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  }
};

export const animationPageOut = (href: string, router: AppRouterInstance) => {
  const overlay = document.getElementById("page-overlay");
  
  if (overlay) {
    gsap.set(overlay, { opacity: 0 });
    gsap.to(overlay, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        router.push(href);
      }
    });
  }
};