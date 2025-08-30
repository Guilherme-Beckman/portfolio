import { Calendar } from "lucide-react";
import styles from "./development-timeline.module.css";
export interface TimelineEvent {
  title: string;
  date: string;
  description?: string;
}

export interface DevelopmentTimelineProps {
  events: TimelineEvent[];
}

export function DevelopmentTimeline({ events }: DevelopmentTimelineProps) {
  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timelineTitle}>
        <Calendar color="#9ae5f3" />
        <h3>Development Timeline</h3>
      </div>
      <div className={styles.timeline}>
        {events.map((event, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelinePoint}></div>
            <div className={styles.timelineContent}>
              <span className={styles.timelineDate}>{event.date}</span>
              <h4 className={styles.timelineEventTitle}>{event.title}</h4>
              {event.description && (
                <p className={styles.timelineDescription}>
                  {event.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
