"use client";
import styles from "./page.module.css";
import { Mail, FileDown } from "lucide-react";
import ContactCard from "../components/about-me/contacts/contacs";
import { useTranslations } from "next-intl";

export default function Resume() {
  const t = useTranslations("Resume");

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{t("title")}</h1>
        <p className={styles.subtitle}>{t("subtitle")}</p>
        <div className={styles.ctaRow}>
          <a
            className={styles.buttonPrimary}
            href="mailto:seu.email@exemplo.com"
          >
            <Mail /> <p>{t("contact")}</p>
          </a>
          <a className={styles.buttonGhost} href="/cv.pdf" download>
            <FileDown />
            <p>{t("download")}</p>
          </a>
        </div>
      </header>

      <div className={styles.viewer}>
        <object
          data="/resume.pdf#toolbar=1&navpanes=0"
          type="application/pdf"
          className={styles.pdf}
          aria-label={t("aria")}
        >
          <p className={styles.fallback}>
            {t("fallback")}{" "}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              {t("open")}
            </a>{" "}
            {t("or")}{" "}
            <a href="/resume.pdf" download>
              {t("downloadFile")}
            </a>
            .
          </p>
        </object>
      </div>
      <ContactCard />
    </section>
  );
}
