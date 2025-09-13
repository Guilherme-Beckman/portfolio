import EmblaCarousel from "@/app/components/embla/carousel/EmblaCarousel";
import styles from "./demo.module.css";
import { EmblaOptionsType } from "embla-carousel";

type Slide = {
  title: string;
  type: "image" | "video";
  src: string;
  alt?: string;
};

export interface DemoProps {
  slides: Slide[];
  options?: EmblaOptionsType;
}

export function Demo({ slides, options }: DemoProps) {
  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <div className={styles.demo}>
      <EmblaCarousel slides={slides} options={OPTIONS} />
    </div>
  );
}
