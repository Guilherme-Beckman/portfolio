import styles from "./badge.module.css";
export interface BadgeProps {
  name: string;
  color: string;
}
export function Badge({ name, color }: BadgeProps) {
  return (
    <div
      className={`${styles.badge}`}
      style={{
        backgroundColor: color,
      }}
    >
      <p>{name}</p>
    </div>
  );
}
