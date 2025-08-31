"use client";
import styles from "./nav.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
            <Link className={styles.link} href={item.href}>
              <p>{item.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
