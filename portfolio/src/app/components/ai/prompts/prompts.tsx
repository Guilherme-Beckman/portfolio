import styles from "./prompts.module.css";
export function Prompts() {
  return (
    <div className={styles.prompts}>
      <div className={styles.container}>
        <ul>
          <li><button>About</button></li>
          <li><button>Projects</button></li>
          <li><button>Contact</button></li>
          <li><button>Skills</button></li>
        </ul>
      </div>
    </div>
  );
}
