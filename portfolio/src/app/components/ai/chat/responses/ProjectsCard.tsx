import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectsCard.module.css";

const PROJECTS = [
  {
    name: "Face Recognition",
    description: "Facial recognition system with microservices architecture",
    image: "/icons/skills/web-cam-svgrepo-com.svg",
    tags: ["Python", "Spring", "Microservices"],
    link: "/projects/face-recognition",
  },
  {
    name: "IoT School Bell",
    description: "IoT-powered automated school bell system",
    image: "/icons/skills/python-svgrepo-com.svg",
    tags: ["Arduino", "FastAPI", "Next.js"],
    link: "/projects/iot-project",
  },
  {
    name: "LIADS Server",
    description: "API gateway infrastructure with service discovery",
    image: "/icons/skills/kong-icon-svgrepo-com.svg",
    tags: ["Kong", "Docker", "Consul"],
    link: "/projects/liads-server",
  },
  {
    name: "MySell",
    description: "Reactive e-commerce platform with mobile support",
    image: "/icons/skills/spring-svgrepo-com.svg",
    tags: ["Spring", "Angular", "Ionic"],
    link: "/projects/mysell",
  },
  {
    name: "Birds Pantanal",
    description: "Photo gallery for Pantanal bird species",
    image: "/icons/skills/spring-svgrepo-com.svg",
    tags: ["Spring", "Angular", "AWS"],
    link: "/projects/birds-pantanal",
  },
  {
    name: "Order Manager",
    description: "Order management with event-driven messaging",
    image: "/icons/skills/spring-svgrepo-com.svg",
    tags: ["Spring", "MongoDB", "RabbitMQ"],
    link: "/projects/order-manager",
  },
];

export function ProjectsCard() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>My Projects</h3>
      <div className={styles.list}>
        {PROJECTS.map((project) => (
          <Link
            key={project.name}
            href={project.link}
            className={styles.project}
          >
            <Image
              src={project.image}
              alt={project.name}
              width={32}
              height={32}
              className={styles.projectImage}
            />
            <div className={styles.projectInfo}>
              <span className={styles.projectName}>{project.name}</span>
              <span className={styles.projectDesc}>{project.description}</span>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
