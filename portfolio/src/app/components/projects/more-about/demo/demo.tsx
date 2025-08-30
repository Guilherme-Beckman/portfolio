import styles from "./demo.module.css";
import EmblaCarousel from "@/app/components/embla/carousel/embla-carousel";
export function Demo() {
  return (
    <div className={styles.demo}>
      <EmblaCarousel slides={[1, 2, 3]} />
    </div>
  );
}
