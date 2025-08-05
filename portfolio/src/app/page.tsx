import { TypingText } from "./components/typing-text/typing-text";
import { AiInput } from "./components/ai/input/input";
import { Prompts } from "./components/ai/prompts/prompts";
import styles from "./page.module.css";
export default function Page() {
  return (
    <div className={styles.page}>
      <h1>
        <span>AI Portfolio</span>
        <br />
        <br />
        <TypingText />
      </h1>
      <AiInput />
      <Prompts />
    </div>
  );
}
