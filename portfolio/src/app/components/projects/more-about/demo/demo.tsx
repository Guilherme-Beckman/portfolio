import styles from "./demo.module.css";
import EmblaCarousel from "@/app/components/embla/carousel/embla-carousel";
export function Demo() {
  return (
    <div className={styles.demo}>
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
            src: "https://cdn.pixabay.com/video/xyz.mp4",
          },
        ]}
      />
    </div>
  );
}
