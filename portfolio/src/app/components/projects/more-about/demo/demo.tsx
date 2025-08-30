import styles from "./demo.module.css";
import Video from "next-video";
import Instaplay from "player.style/instaplay/react";
export function Demo() {
  return (
    <div className={styles.demo}>
      <Video
        src={"https://cdn.pixabay.com/video/2025/08/20/298643_large.mp4"}
        theme={Instaplay}
      />
    </div>
  );
}
