import EmblaCarousel from "@/app/components/embla/carousel/EmblaCarousel";
import styles from "./demo.module.css";
import { EmblaOptionsType } from "embla-carousel";

export function Demo() {
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <div className={styles.demo}>
      {/* <EmblaCarousel
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
            src: "https://cdn.pixabay.com/video/xyz.mp4",
          },
        ]}
      /> */}
      <EmblaCarousel slides={[1, 2, 3]} options={OPTIONS} />
    </div>
  );
}
