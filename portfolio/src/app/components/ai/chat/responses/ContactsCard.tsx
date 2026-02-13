import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import styles from "./ContactsCard.module.css";

const CONTACTS = [
  {
    icon: Mail,
    label: "Email",
    value: "guilhermebeckman3@gmail.com",
    href: "mailto:guilhermebeckman3@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "MS, Brasil",
  },
];

const SOCIALS = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Guilherme-Beckman/",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/guilherme-beckman/",
  },
];

export function ContactsCard() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Contact Me</h3>

      <div className={styles.items}>
        {CONTACTS.map((contact) => (
          <div key={contact.label} className={styles.item}>
            <div className={styles.iconWrapper}>
              <contact.icon size={16} className={styles.icon} />
            </div>
            <div className={styles.itemInfo}>
              <span className={styles.label}>{contact.label}</span>
              {contact.href ? (
                <a
                  href={contact.href}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.value}
                </a>
              ) : (
                <span className={styles.value}>{contact.value}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.socials}>
        {SOCIALS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <social.icon size={18} className={styles.socialIcon} />
            <span>{social.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
