import EmblaCarousel from "@/app/components/embla/carousel/EmblaCarousel";
import styles from "./demo.module.css";
import { EmblaOptionsType } from "embla-carousel";

export function Demo() {
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <div className={styles.demo}>
      {
        <EmblaCarousel
          slides={[
            {
              title: "Title",
              type: "image",
              src: "/icons/skills/angular-svgrepo-com.svg",
              alt: "Foto 1",
            },
            {
              title: "Title",
              type: "video",
              src: "https://cdn.pixabay.com/video/2025/08/20/298643_large.mp4",
            },
            {
              title: "Title",
              type: "video",
              src: "https://cdn.pixabay.com/video/2025/08/20/298643_large.mp4",
            },
          ]}
          options={OPTIONS}
        />
      }
    </div>
  );
}
