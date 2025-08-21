"use client";
import styles from "./nav.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function Nav() {
  const pathName = usePathname();
  return (
    <div className={styles.nav}>
      <ul>
        <li className={pathName === "/" ? styles.active : ""}>
          <Link className={styles.link} href={"/"}>
            Home
          </Link>
        </li>
        <li className={pathName === "/about-me" ? styles.active : ""}>
          <Link className={styles.link} href={"/about-me"}>
            About
          </Link>
        </li>
        <li className={pathName === "/projects" ? styles.active : ""}>
          <Link className={styles.link} href={"/projects"}>
            Projects
          </Link>
        </li>
        <li className={pathName === "/blog" ? styles.active : ""}>
          <Link className={styles.link} href={"/blog"}>
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
}
