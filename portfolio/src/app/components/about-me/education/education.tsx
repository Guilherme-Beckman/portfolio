import styles from "./education.module.css";

interface EducationProps {
  cert: string;
  course: string;
  school: string;
  date: string; // novo campo para a data (ex: "2020 - 2022", "Jan 2019", etc)
}

interface Props {
  educationProps: EducationProps[];
}

export function Education({ educationProps }: Props) {
  return (
    <div className={`${styles.education} animatedBg`}>
      <h2 className={styles.title}>EDUCATION</h2>

      <div className={styles.section}>
        {educationProps.map((education, index) => (
          <div key={index} className={styles.educationItem}>
            <p className={styles.date}>{education.date}</p>
            <p className={styles.cert}>{education.cert}</p>
            <p className={styles.course}>{education.course}</p>
            <p className={styles.school}>{education.school}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
