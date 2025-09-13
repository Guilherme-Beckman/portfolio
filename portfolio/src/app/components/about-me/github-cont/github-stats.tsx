import styles from "./github-stats.module.css";
export function GitHubStats() {
  const username = "Guilherme-Beckman";

  return (
    <div className={`${styles.container} animatedBg`}>
      {/* Contribution Graph */}
      <img
        src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark&bg_color=0d1117&color=58a6ff&line=58a6ff&point=f0f6fc&area=true&hide_border=true`}
        alt="GitHub Activity Graph"
        className={styles.graph}
      />

      {/* Stats Cards */}
      <div className={styles.cards}>
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark`}
          alt="GitHub Stats"
          className={styles.card}
        />
        <img
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark`}
          alt="GitHub Streak"
          className={styles.card}
        />
        <img
          src={`https://ghchart.rshah.org/409ba5/${username}`}
          alt="GitHub Contributions"
          className={styles.cardWide}
        />
 
      </div>
      
    </div>
  );
}
