"use client";
import React from "react";
import styles from "./contacts.module.css";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactCard() {
  const t = useTranslations("Contact")
  return (
    <div className={`${styles.contactContainer} animatedBg`}>
      {/* Background gradient overlay */}
      <div className={styles.bgGradient}></div>

      <div className={styles.content}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionDivider}></div>
          <h3 className={styles.sectionTitle}>{t("title")}</h3>
          <div className={styles.sectionDivider}></div>
        </div>

        <div className={styles.contactItems}>
          <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              <Mail className={styles.icon} />
              <div className={styles.iconGlow}></div>
            </div>
            <div className={styles.itemContent}>
              <p className={styles.label}>EMAIL</p>
              <a
                href="mailto:guilhermebeckman3@gmail.com"
                className={`${styles.link} ${styles.primaryLink}`}
              >
                guilhermebeckman3@gmail.com
              </a>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              <MapPin className={styles.icon} />
              <div className={styles.iconGlow}></div>
            </div>
            <div className={styles.itemContent}>
              <p className={styles.label}>{t("location")}</p>
              <p className={styles.locationText}>
                <span className={styles.locationDot}></span>
                MS, Brasil
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.sectionHeader} ${styles.externalHeader}`}>
          <div className={styles.sectionDivider}></div>
          <h3 className={styles.sectionTitle}>{t("external")}</h3>
          <div className={styles.sectionDivider}></div>
        </div>

        <div className={styles.socials}>
          <a
            href="https://github.com"
            target="_blank"
            className={`${styles.socialBtn} ${styles.github}`}
          >
            <Github className={styles.socialIcon} />
            <span className={styles.socialLabel}>GitHub</span>
            <div className={styles.socialRipple}></div>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className={`${styles.socialBtn} ${styles.linkedin}`}
          >
            <Linkedin className={styles.socialIcon} />
            <span className={styles.socialLabel}>LinkedIn</span>
            <div className={styles.socialRipple}></div>
          </a>
        </div>
      </div>
    </div>
  );
}
