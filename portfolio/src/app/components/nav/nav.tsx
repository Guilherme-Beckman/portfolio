"use client";
import styles from "./nav.module.css";
import { usePathname } from "next/navigation";
import { TransitionLink } from "../transition-link";
export function Nav() {
  const pathName = usePathname();
  const items = [
    { href: "/", label: "Home" },
    { href: "/about-me", label: "About" },
    { href: "/projects", label: "Projects" },
    // { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className={styles.nav}>
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
    </nav>
  );
}
