"use client";
import styles from "./nav.module.css";
import { usePathname, useRouter } from "next/navigation";
import { TransitionLink } from "../transition-link";
import { Languages } from "lucide-react";
import { useState } from "react";

export function Nav() {
  const pathName = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const items = [
    { href: "/", label: "Home" },
    { href: "/about-me", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
  ];

  const locales = ["en", "pt"];

  const changeLocale = (locale: string) => {
    document.cookie = `locale=${locale}; path=/; max-age=31536000`;
    setOpen(false); // fecha o dropdown depois da escolha
    router.refresh();
  };

  return (
    <nav className={styles.navContainer}>
      <div className={styles.nav}>
        <div className={styles.translate}>
          <div className={styles.dropdown}>
            <button
              className={styles.translateButton}
              onClick={() => setOpen((prev) => !prev)}
            >
              <Languages size={20} />
            </button>
            {open && (
              <ul className={styles.dropdownMenu}>
                {locales.map((locale) => (
                  <li key={locale}>
                    <button
                      className={styles.localeOption}
                      onClick={() => changeLocale(locale)}
                    >
                      {locale.toUpperCase()}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <ul>
          {items.map((item) => (
            <li
              key={item.href}
              className={pathName === item.href ? styles.active : ""}
            >
              <div className={styles.link}>
                <TransitionLink href={item.href} label={item.label} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
