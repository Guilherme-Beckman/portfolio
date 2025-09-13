"use client";
import { motion } from "motion/react";
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
import { useTranslations } from "next-intl";
interface FadeInProps {
  children: React.ReactNode;
  fromY?: number;
  duration?: number;
  delay?: number;
}

export function FadeIn({
  children,
  fromY = 20,
  duration = 1,
  delay = 0,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: fromY }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}

interface SlideInProps {
  children: React.ReactNode;
  fromX?: number;
  duration?: number;
  delay?: number;
}

export function SlideIn({
  children,
  fromX = -50,
  duration = 1,
  delay = 0,
}: SlideInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: fromX }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}

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
  const t = useTranslations("MoreAbout");

  return (
    <div className={styles.moreAboutContainer}>
      <div className={`${styles.moreAbout} animatedBg`}>
        <FadeIn fromY={-20} duration={0.8}>
          <NavProject
            gitHubUrl={navProps?.gitHubUrl}
            liveDemoUrl={navProps?.liveDemoUrl}
          />
        </FadeIn>

        <SlideIn fromX={50} duration={1}>
          <div className={styles.mainImageContainer}>
            <Image
              src={mainImageProps?.url || "/falback.png"}
              alt={mainImageProps?.alt || "Project Image"}
              width={300}
              height={300}
              className={styles.mainImage}
            />
          </div>
        </SlideIn>

        <FadeIn fromY={20} duration={1}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
        </FadeIn>

        <div className={styles.badgesContainer}>
          {badges.map((badge, index) => (
            <FadeIn key={index} duration={0.5} delay={index * 0.1}>
              <Badge name={badge.name} color={badge.color} />
            </FadeIn>
          ))}
        </div>
        <FadeIn duration={1.2}>
          <div className={styles.demo}>
            <Demo slides={demo.slides} />
          </div>
        </FadeIn>

        <div className={styles.content}>
          <div className={styles.mainContent}>
            <FadeIn duration={1}>
              <div className={styles.projectOverviewContainer}>
                <div className={styles.projectOverviewTitle}>
                  <Code color="#9ae5f3" />
                  <h3>{t("projectOverview")}</h3>{" "}
                </div>
                <p className={styles.description}>{description}</p>
              </div>
            </FadeIn>
            <FadeIn duration={1}>
              <div className={styles.keyFeaturesContainer}>
                <KeyFeatures features={features} />
              </div>
            </FadeIn>

            <FadeIn duration={1}>
              <div className={styles.technicalSpecificationsContainer}>
                <TechnicalSpecifications {...technicalSpecifications} />
              </div>
            </FadeIn>
          </div>

          <div className={styles.sideContent}>
            <SlideIn fromX={50} duration={1}>
              <ProjectStatistics statistics={projectStatistics.statistics} />
            </SlideIn>
            <FadeIn duration={1}>
              <DevelopmentTimeline events={developmentTimeline.events} />
            </FadeIn>
          </div>
        </div>
      </div>

      <FadeIn fromY={20} duration={1}>
        <div className={styles.contact}>
          <ContactCard />
        </div>
      </FadeIn>
    </div>
  );
}
