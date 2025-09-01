"use client";
import styles from "./page.module.css";
import { Mail, FileDown } from "lucide-react";
import ContactCard from "../components/about-me/contacts/contacs";
export default function Resume() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Hire Me</h1>
        <p className={styles.subtitle}>
          Desenvolvedor full-stack focado em backend e infra. Vamos trabalhar
          juntos?
        </p>
        <div className={styles.ctaRow}>
          <a
            className={styles.buttonPrimary}
            href="mailto:seu.email@exemplo.com"
          >
            <Mail /> <p>Fale comigo</p>
          </a>
          <a className={styles.buttonGhost} href="/cv.pdf" download>
            <FileDown />
            <p>Baixar CV (PDF)</p>
          </a>
        </div>
      </header>

      <div className={styles.viewer}>
        <object
          data="/resume.pdf#toolbar=1&navpanes=0"
          type="application/pdf"
          className={styles.pdf}
          aria-label="Visualizador de currículo em PDF"
        >
          <p className={styles.fallback}>
            Não foi possível embutir o PDF no seu navegador.
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Abrir o currículo em uma nova aba
            </a>{" "}
            ou{" "}
            <a href="/resume.pdf" download>
              baixar o arquivo
            </a>
            .
          </p>
        </object>
      </div>
      <ContactCard/>
    </section>
  );
}
