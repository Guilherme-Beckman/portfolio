interface Project {
  name: string;
  link: string;
}
interface TechItem {
  icon: string;
  name: string;
  projects: Project[];
  category: string;
  description: string;
}
const skills: TechItem[] = [
  {
    icon: "/icons/skills/angular-svgrepo-com.svg",
    name: "Angular",
    projects: [
      {
        name: "Portfolio Website",
        link: "https://github.com/Guilherme-Beckman/portfolio",
      },
      {
        name: "FocusBird Frontend",
        link: "https://github.com/Guilherme-Beckman/focusbird-frontend",
      },
    ],
    category: "frontend",
    description: "Framework para construir aplicações web dinâmicas.",
  },
  {
    icon: "/icons/skills/kong-icon-svgrepo-com.svg",
    name: "Kong",
    projects: [
      {
        name: "API Gateway Setup",
        link: "https://github.com/Guilherme-Beckman/kong-setup",
      },
    ],
    category: "backend",
    description: "Gateway de APIs para roteamento e segurança.",
  },
  {
    icon: "/icons/skills/aws-ec2-svgrepo-com.svg",
    name: "AWS EC2",
    projects: [
      {
        name: "Web App Hosting",
        link: "https://github.com/Guilherme-Beckman/aws-ec2-hosting",
      },
    ],
    category: "cloud",
    description: "Serviço de instâncias virtuais na nuvem.",
  },
  {
    icon: "/icons/skills/laravel-svgrepo-com.svg",
    name: "Laravel",
    projects: [
      {
        name: "E-commerce API",
        link: "https://github.com/Guilherme-Beckman/laravel-ecommerce",
      },
    ],
    category: "backend",
    description: "Framework PHP para desenvolvimento rápido de APIs.",
  },
  {
    icon: "/icons/skills/aws-route53-svgrepo-com.svg",
    name: "AWS Route53",
    projects: [
      {
        name: "DNS Management",
        link: "https://github.com/Guilherme-Beckman/aws-route53",
      },
    ],
    category: "cloud",
    description: "Serviço de DNS escalável da AWS.",
  },
  {
    icon: "/icons/skills/mongodb-svgrepo-com.svg",
    name: "MongoDB",
    projects: [
      {
        name: "FocusBird Database",
        link: "https://github.com/Guilherme-Beckman/focusbird-backend",
      },
    ],
    category: "database",
    description: "Banco de dados NoSQL orientado a documentos.",
  },
  {
    icon: "/icons/skills/aws-s3-svgrepo-com.svg",
    name: "AWS S3",
    projects: [
      {
        name: "File Storage Service",
        link: "https://github.com/Guilherme-Beckman/aws-s3-storage",
      },
    ],
    category: "cloud",
    description: "Armazenamento de arquivos escalável na nuvem.",
  },
  {
    icon: "/icons/skills/mysql-svgrepo-com.svg",
    name: "MySQL",
    projects: [
      {
        name: "Inventory System",
        link: "https://github.com/Guilherme-Beckman/mysql-inventory",
      },
    ],
    category: "database",
    description: "Banco de dados relacional amplamente usado.",
  },
  {
    icon: "/icons/skills/aws-svgrepo-com.svg",
    name: "AWS",
    projects: [
      {
        name: "Cloud Infrastructure",
        link: "https://github.com/Guilherme-Beckman/aws-infra",
      },
    ],
    category: "cloud",
    description:
      "Serviços de nuvem da Amazon para infraestrutura e aplicações.",
  },
  {
    icon: "/icons/skills/nextjs-fill-svgrepo-com.svg",
    name: "Next.js",
    projects: [
      {
        name: "Marketing Website",
        link: "https://github.com/Guilherme-Beckman/nextjs-marketing",
      },
    ],
    category: "frontend",
    description: "Framework React para aplicações SSR e estáticas.",
  },
  {
    icon: "/icons/skills/consul-svgrepo-com.svg",
    name: "Consul",
    projects: [
      {
        name: "Service Discovery",
        link: "https://github.com/Guilherme-Beckman/consul-setup",
      },
    ],
    category: "devops",
    description: "Ferramenta para descoberta e configuração de serviços.",
  },
  {
    icon: "/icons/skills/nginx-svgrepo-com.svg",
    name: "Nginx",
    projects: [
      {
        name: "Reverse Proxy Setup",
        link: "https://github.com/Guilherme-Beckman/nginx-config",
      },
    ],
    category: "devops",
    description: "Servidor web e proxy reverso de alto desempenho.",
  },
  {
    icon: "/icons/skills/css-3-svgrepo-com.svg",
    name: "CSS3",
    projects: [
      {
        name: "Responsive Website",
        link: "https://github.com/Guilherme-Beckman/css-website",
      },
    ],
    category: "frontend",
    description: "Folhas de estilo para estilizar páginas web.",
  },
  {
    icon: "/icons/skills/onshape-svgrepo-com.svg",
    name: "Onshape",
    projects: [
      {
        name: "3D Modeling Project",
        link: "https://github.com/Guilherme-Beckman/onshape-models",
      },
    ],
    category: "design",
    description: "Plataforma de CAD 3D na nuvem.",
  },
  {
    icon: "/icons/skills/docker-svgrepo-com.svg",
    name: "Docker",
    projects: [
      {
        name: "Microservices Setup",
        link: "https://github.com/Guilherme-Beckman/docker-microservices",
      },
    ],
    category: "devops",
    description:
      "Containerização de aplicações para consistência e portabilidade.",
  },
  {
    icon: "/icons/skills/php-svgrepo-com.svg",
    name: "PHP",
    projects: [
      {
        name: "Blog CMS",
        link: "https://github.com/Guilherme-Beckman/php-blog",
      },
    ],
    category: "backend",
    description: "Linguagem de programação para web backend.",
  },
  {
    icon: "/icons/skills/fastapi-svgrepo-com.svg",
    name: "FastAPI",
    projects: [
      {
        name: "REST API",
        link: "https://github.com/Guilherme-Beckman/fastapi-service",
      },
    ],
    category: "backend",
    description: "Framework Python para APIs rápidas e modernas.",
  },
  {
    icon: "/icons/skills/postgresql-svgrepo-com.svg",
    name: "PostgreSQL",
    projects: [
      {
        name: "Analytics DB",
        link: "https://github.com/Guilherme-Beckman/postgresql-analytics",
      },
    ],
    category: "database",
    description: "Banco de dados relacional avançado e open-source.",
  },
  {
    icon: "/icons/skills/github-142-svgrepo-com.svg",
    name: "GitHub",
    projects: [
      {
        name: "All Projects Repo",
        link: "https://github.com/Guilherme-Beckman",
      },
    ],
    category: "devops",
    description: "Plataforma de versionamento e colaboração de código.",
  },
  {
    icon: "/icons/skills/git-merge-svgrepo-com.svg",
    name: "Git Merge",
    projects: [
      {
        name: "Branching Workflows",
        link: "https://github.com/Guilherme-Beckman/git-workflows",
      },
    ],
    category: "devops",
    description: "Operação de versionamento para integrar branches.",
  },
  {
    icon: "/icons/skills/git-svgrepo-com.svg",
    name: "Git",
    projects: [
      {
        name: "Version Control Setup",
        link: "https://github.com/Guilherme-Beckman/git-setup",
      },
    ],
    category: "devops",
    description: "Sistema de controle de versão distribuído.",
  },
  {
    icon: "/icons/skills/html-5-svgrepo-com.svg",
    name: "HTML5",
    projects: [
      {
        name: "Landing Page",
        link: "https://github.com/Guilherme-Beckman/html-landing",
      },
    ],
    category: "frontend",
    description: "Linguagem de marcação para estruturar páginas web.",
  },
  {
    icon: "/icons/skills/react.svg",
    name: "React",
    projects: [
      {
        name: "FocusBird Frontend",
        link: "https://github.com/Guilherme-Beckman/focusbird-frontend",
      },
    ],
    category: "frontend",
    description: "Biblioteca JavaScript para construir UIs interativas.",
  },
  {
    icon: "/icons/skills/react-svgrepo-com.svg",
    name: "React (alt)",
    projects: [
      {
        name: "Portfolio Website",
        link: "https://github.com/Guilherme-Beckman/portfolio",
      },
    ],
    category: "frontend",
    description: "Alternativa de logo React para portfólio.",
  },
  {
    icon: "/icons/skills/ionic-svgrepo-com.svg",
    name: "Ionic",
    projects: [
      {
        name: "FocusBird Mobile App",
        link: "https://github.com/Guilherme-Beckman/focusbird-frontend",
      },
    ],
    category: "frontend",
    description: "Framework para apps mobile híbridos.",
  },
  {
    icon: "/icons/skills/java-svgrepo-com.svg",
    name: "Java",
    projects: [
      {
        name: "Backend Services",
        link: "https://github.com/Guilherme-Beckman/java-backend",
      },
    ],
    category: "backend",
    description: "Linguagem de programação orientada a objetos.",
  },
  {
    icon: "/icons/skills/spring-svgrepo-com.svg",
    name: "Spring",
    projects: [
      {
        name: "REST API with Spring",
        link: "https://github.com/Guilherme-Beckman/spring-api",
      },
    ],
    category: "backend",
    description: "Framework Java para construção de aplicações robustas.",
  },
  {
    icon: "/icons/skills/js-svgrepo-com.svg",
    name: "JavaScript",
    projects: [
      {
        name: "Web Interactivity",
        link: "https://github.com/Guilherme-Beckman/js-interactivity",
      },
    ],
    category: "frontend",
    description: "Linguagem de programação para comportamento web.",
  },
  {
    icon: "/icons/skills/typescript.svg",
    name: "TypeScript",
    projects: [
      {
        name: "Typed Web App",
        link: "https://github.com/Guilherme-Beckman/ts-app",
      },
    ],
    category: "frontend",
    description: "Superset do JavaScript com tipagem estática.",
  },
  {
    icon: "/icons/skills/python-svgrepo-com.svg",
    name: "Python",
    projects: [
      {
        name: "FocusBird Backend",
        link: "https://github.com/Guilherme-Beckman/focusbird-backend",
      },
    ],
    category: "backend",
    description: "Linguagem de programação versátil e popular.",
  },
  {
    icon: "/icons/skills/rabbitmq-icon-svgrepo-com.svg",
    name: "RabbitMQ",
    projects: [
      {
        name: "Message Queue Service",
        link: "https://github.com/Guilherme-Beckman/rabbitmq-service",
      },
    ],
    category: "backend",
    description: "Sistema de mensageria para aplicações distribuídas.",
  },
  {
    icon: "/icons/skills/postman-icon-svgrepo-com.svg",
    name: "Postman",
    projects: [
      {
        name: "API Testing",
        link: "https://github.com/Guilherme-Beckman/postman-tests",
      },
    ],
    category: "devops",
    description: "Ferramenta para testar e documentar APIs.",
  },
];
export default skills;