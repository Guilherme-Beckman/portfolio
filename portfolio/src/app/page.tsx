import { TypingText } from "./components/typing-text/typing-text";
import { AiInput } from "./components/ai/input/input";
import { Prompts } from "./components/ai/prompts/prompts";
import styles from "./page.module.css";
import { FadeIn } from "./components/animations/fade-in";
import { useTranslations } from "next-intl";
export default function Page() {
  const t = useTranslations("HomePage");
  return (
    <div className={styles.page}>
      <h1>{t("title")}</h1>
      <h1>
        <FadeIn fromY={-20}>
          <span className={styles.highlighted}>AI Portfolio</span>
        </FadeIn>
        <br />
        <br />
        <FadeIn>
          <TypingText />
        </FadeIn>
      </h1>
      <FadeIn>
        <AiInput />
        <Prompts />
      </FadeIn>
    </div>
  );
}
