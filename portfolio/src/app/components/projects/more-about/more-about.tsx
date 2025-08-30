import { NavProject, NavProjectProps } from "./nav-project/nav-project";
import styles from "./more-about.module.css";
import Image from "next/image";
import { Badge, BadgeProps } from "./badge/badge";
import { Code } from "lucide-react";
import { KeyFeatures } from "./key-features/key-features";
import {
  TechnicalSpecifications,
  TechnicalSpecificationsProps,
} from "./technical-specifications/technical-specifications";
import {
  ProjectStatistics,
  ProjectStatisticsProps,
} from "./project-statistics/project-statistics";
import {
  DevelopmentTimeline,
  DevelopmentTimelineProps,
} from "./development-timeline/development-timeline";
import { Demo, DemoProps } from "./demo/demo";
import ContactCard from "../../about-me/contacts/contacs";
interface MoreAboutProps {
  navProps?: NavProjectProps;
  mainImageProps?: MainImageProjectProps;
  title: string;
  subtitle: string;
  badges: BadgeProps[];
  description: string;
  features: string[];
  technicalSpecifications: TechnicalSpecificationsProps;
  projectStatistics: ProjectStatisticsProps;
  developmentTimeline: DevelopmentTimelineProps;
  demo: DemoProps;
}
export interface MainImageProjectProps {
  url?: string;
  alt?: string;
}
export function MoreAbout({
  navProps,
  mainImageProps,
  title,
  subtitle,
  badges,
  description,
  features,
  technicalSpecifications,
  projectStatistics,
  developmentTimeline,
  demo,
}: MoreAboutProps) {
  return (
    <div className={styles.moreAboutContainer}>
      <div className={`${styles.moreAbout} animatedBg`}>
        <NavProject
          gitHubUrl={navProps?.gitHubUrl}
          liveDemoUrl={navProps?.liveDemoUrl}
        />
        <div className={styles.mainImageContainer}>
          <Image
            src={mainImageProps?.url || "/falback.png"}
            alt={mainImageProps?.alt || "Project Image"}
            width={400}
            height={400}
            className={styles.mainImage}
          />
        </div>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <div className={styles.badgesContainer}>
          {badges.map((badge, index) => (
            <Badge key={index} name={badge.name} color={badge.color} />
          ))}
        </div>
        <div className={styles.demo}>
          <Demo slides={demo.slides} />
        </div>
        <div className={styles.content}>
          <div className={styles.mainContent}>
            <div className={styles.projectOverviewContainer}>
              <div className={styles.projectOverviewTitle}>
                <Code color="#9ae5f3" />
                <h3>Project Overview</h3>
              </div>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.keyFeaturesContainer}>
              <KeyFeatures features={features} />
            </div>
            <div className={styles.technicalSpecificationsContainer}>
              <TechnicalSpecifications {...technicalSpecifications} />
            </div>
          </div>

          <div className={styles.sideContent}>
            <ProjectStatistics statistics={projectStatistics.statistics} />
            <DevelopmentTimeline events={developmentTimeline.events} />
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        <ContactCard />
      </div>
    </div>
  );
}
