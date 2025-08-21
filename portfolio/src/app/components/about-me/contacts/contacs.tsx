"use client";
import React from "react";
import styles from "./contacts.module.css";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

export default function ContactCard() {
  return (
    <div className={`${styles.contactContainer} animatedBg`}>
      {/* Background gradient overlay */}
      <div className={styles.bgGradient}></div>

      <div className={styles.content}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionDivider}></div>
          <h3 className={styles.sectionTitle}>CONTACT</h3>
          <div className={styles.sectionDivider}></div>
        </div>

        <div className={styles.contactItems}>
          <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              <Mail className={styles.icon} />
              <div className={styles.iconGlow}></div>
            </div>
            <div className={styles.itemContent}>
              <p className={styles.label}>MAIL</p>
              <a
                href="mailto:abhishekpanthee@proton.me"
                className={`${styles.link} ${styles.primaryLink}`}
              >
                abhishekpanthee@proton.me
              </a>
              <a
                href="mailto:contact@abhishekpanthee.com.np"
                className={`${styles.link} ${styles.secondaryLink}`}
              >
                contact@abhishekpanthee.com.np
              </a>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              <Phone className={styles.icon} />
              <div className={styles.iconGlow}></div>
            </div>
            <div className={styles.itemContent}>
              <p className={styles.label}>CONTACT</p>
              <a
                href="https://calendly.com"
                target="_blank"
                className={`${styles.link} ${styles.calendlyLink}`}
              >
                <span className={styles.calendlyText}>Schedule a Call</span>
                <span className={styles.calendlyBadge}>Calendly</span>
              </a>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              <MapPin className={styles.icon} />
              <div className={styles.iconGlow}></div>
            </div>
            <div className={styles.itemContent}>
              <p className={styles.label}>LOCATION</p>
              <p className={styles.locationText}>
                <span className={styles.locationDot}></span>
                Butwal, Nepal
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.sectionHeader} ${styles.externalHeader}`}>
          <div className={styles.sectionDivider}></div>
          <h3 className={styles.sectionTitle}>EXTERNAL</h3>
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
          <a
            href="https://instagram.com"
            target="_blank"
            className={`${styles.socialBtn} ${styles.instagram}`}
          >
            <Instagram className={styles.socialIcon} />
            <span className={styles.socialLabel}>Instagram</span>
            <div className={styles.socialRipple}></div>
          </a>
        </div>
      </div>
    </div>
  );
}
