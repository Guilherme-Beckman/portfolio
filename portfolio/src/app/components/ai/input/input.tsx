import styles from "./input.module.css";
import Image from "next/image";
import arrow from "public/icons/arrow.svg";
export function AiInput() {
  return (
    <div className={styles.input}>
      <div className={styles.container}>
        <input type="text" placeholder="Ask me something..." />
        <button type="submit">
          <Image src={arrow} alt="Arrow" width={25} height={25} />
        </button>
      </div>
    </div>
  );
}
