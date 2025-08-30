"use client"
import styles from "./demo.module.css";
import Video from "next-video";
import Instaplay from "player.style/instaplay/react";
import useEmblaCarousel from "embla-carousel-react";
export function Demo() {
  const [emblaRef] = useEmblaCarousel();
  return (
    <div className={styles.demo}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}>
            <Video
              src={"https://cdn.pixabay.com/video/2025/08/20/298643_large.mp4"}
              theme={Instaplay}
            />
          </div>
          <div className={styles.embla__slide}>
            <Video
              src={"https://cdn.pixabay.com/video/2025/08/20/298643_large.mp4"}
              theme={Instaplay}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
