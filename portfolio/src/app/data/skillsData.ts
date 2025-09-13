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
      { name: "BirdsPantanal", link: "/projects/birds-pantanal" },

      { name: "MySell", link: "/projects/mysell" },
    ],
    category: "frontend",
    description: "angular.description",
  },
  {
    icon: "/icons/skills/kong-icon-svgrepo-com.svg",
    name: "Kong",
    projects: [
      {
        name: "Liads Server",
        link: "/projects/liads-server",
      },
    ],
    category: "backend",
    description: "kong.description",
  },
  {
    icon: "/icons/skills/aws-ec2-svgrepo-com.svg",
    name: "AWS EC2",
    projects: [
      { name: "BirdsPantanal", link: "/projects/birds-pantanal" },
      {
        name: "AWS re/Start",
        link: "https://aws.amazon.com/training/restart/",
      },
    ],
    category: "cloud",
    description: "awsEc2.description",
  },
  {
    icon: "/icons/skills/laravel-svgrepo-com.svg",
    name: "Laravel",
    projects: [
      {
        name: "",
        link: "",
      },
    ],
    category: "backend",
    description: "laravel.description",
  },
  {
    icon: "/icons/skills/aws-route53-svgrepo-com.svg",
    name: "AWS Route53",
    projects: [
      { name: "BirdsPantanal", link: "/projects/birds-pantanal" },
      {
        name: "AWS re/Start",
        link: "https://aws.amazon.com/training/restart/",
      },
    ],
    category: "cloud",
    description: "awsRoute53.description",
  },
  {
    icon: "/icons/skills/mongodb-svgrepo-com.svg",
    name: "MongoDB",
    projects: [
      {
        name: "Order Manager",
        link: "/projects/order-manager",
      },
    ],
    category: "backend",
    description: "mongodb.description",
  },
  {
    icon: "/icons/skills/aws-s3-svgrepo-com.svg",
    name: "AWS S3",
    projects: [
      { name: "BirdsPantanal", link: "/projects/birds-pantanal" },
      {
        name: "AWS re/Start",
        link: "https://aws.amazon.com/training/restart/",
      },
    ],
    category: "cloud",
    description: "awsS3.description",
  },
  {
    icon: "/icons/skills/mysql-svgrepo-com.svg",
    name: "MySQL",
    projects: [
      {
        name: "",
        link: "",
      },
    ],
    category: "backend",
    description: "mysql.description",
  },
  {
    icon: "/icons/skills/aws-svgrepo-com.svg",
    name: "AWS",
    projects: [
      { name: "BirdsPantanal", link: "/projects/birds-pantanal" },
      {
        name: "AWS re/Start",
        link: "https://aws.amazon.com/training/restart/",
      },
    ],
    category: "cloud",
    description: "aws.description",
  },
  {
    icon: "/icons/skills/nextjs-fill-svgrepo-com.svg",
    name: "Next.js",
    projects: [
      {
        name: "Portfolio",
        link: "#",
      },
    ],
    category: "frontend",
    description: "nextjs.description",
  },
  {
    icon: "/icons/skills/consul-svgrepo-com.svg",
    name: "Consul",
    projects: [
      {
        name: "Liads Server",
        link: "/projects/liads-server",
      },
    ],
    category: "cloud",
    description: "consul.description",
  },
  {
    icon: "/icons/skills/nginx-svgrepo-com.svg",
    name: "Nginx",
    projects: [
      { name: "BirdsPantanal", link: "/projects/birds-pantanal" },
      {
        name: "Liads Server",
        link: "/projects/liads-server",
      },
    ],
    category: "cloud",
    description: "nginx.description",
  },
  {
    icon: "/icons/skills/css-3-svgrepo-com.svg",
    name: "CSS3",
    projects: [
      { name: "BirdsPantanal", link: "/projects/birds-pantanal" },

      { name: "MySell", link: "/projects/mysell" },
    ],
    category: "frontend",
    description: "css3.description",
  },
  {
    icon: "/icons/skills/docker-svgrepo-com.svg",
    name: "Docker",
    projects: [
      { name: "BirdsPantanal", link: "/projects/birds-pantanal" },
      {
        name: "Liads Server",
        link: "/projects/liads-server",
      },
    ],
    category: "cloud",
    description: "docker.description",
  },
  {
    icon: "/icons/skills/php-svgrepo-com.svg",
    name: "PHP",
    projects: [
      {
        name: "",
        link: "",
      },
    ],
    category: "backend",
    description: "php.description",
  },
  {
    icon: "/icons/skills/fastapi-svgrepo-com.svg",
    name: "FastAPI",
    projects: [
      {
        name: "Iot Project",
        link: "/projects/iot-project",
      },
    ],
    category: "backend",
    description: "fastapi.description",
  },
  {
    icon: "/icons/skills/postgresql-svgrepo-com.svg",
    name: "PostgreSQL",
    projects: [
      { name: "BirdsPantanal", link: "/projects/birds-pantanal" },
      {
        name: "Order Manager",
        link: "/projects/order-manager",
      },
      { name: "MySell", link: "/projects/mysell" },
    ],
    category: "backend",
    description: "postgresql.description",
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
    category: "cloud",
    description: "github.description",
  },
  {
    icon: "/icons/skills/git-merge-svgrepo-com.svg",
    name: "Git Flow",
    projects: [
      {
        name: "All projects",
        link: "https://github.com/Guilherme-Beckman",
      },
    ],
    category: "cloud",
    description: "gitMerge.description",
  },
  {
    icon: "/icons/skills/git-svgrepo-com.svg",
    name: "Git",
    projects: [
      {
        name: "All Projects Repo",
        link: "https://github.com/Guilherme-Beckman",
      },
    ],
    category: "cloud",
    description: "git.description",
  },
  {
    icon: "/icons/skills/html-5-svgrepo-com.svg",
    name: "HTML5",
    projects: [
      { name: "BirdsPantanal", link: "/projects/birds-pantanal" },
      { name: "MySell", link: "/projects/mysell" },
    ],
    category: "frontend",
    description: "html5.description",
  },
  {
    icon: "/icons/skills/react-svgrepo-com.svg",
    name: "React",
    projects: [
      {
        name: "Portfolio Website",
        link: "#",
      },
    ],
    category: "frontend",
    description: "reactAlt.description",
  },
  {
    icon: "/icons/skills/ionic-svgrepo-com.svg",
    name: "Ionic",
    projects: [{ name: "MySell", link: "/projects/mysell" }],
    category: "frontend",
    description: "ionic.description",
  },
  {
    icon: "/icons/skills/java-svgrepo-com.svg",
    name: "Java",
    projects: [
      { name: "MySell", link: "/projects/mysell" },
      {
        name: "Order Manager",
        link: "/projects/order-manager",
      },
      { name: "BirdsPantanal", link: "/projects/birds-pantanal" },
    ],
    category: "backend",
    description: "java.description",
  },
  {
    icon: "/icons/skills/spring-svgrepo-com.svg",
    name: "Spring",
    projects: [
      { name: "MySell", link: "/projects/mysell" },
      {
        name: "Order Manager",
        link: "/projects/order-manager",
      },
      { name: "BirdsPantanal", link: "/projects/birds-pantanal" },
    ],
    category: "backend",
    description: "spring.description",
  },
  {
    icon: "/icons/skills/js-svgrepo-com.svg",
    name: "JavaScript",
    projects: [
      {
        name: "Portfolio",
        link: "#",
      },
    ],
    category: "frontend",
    description: "javascript.description",
  },
  {
    icon: "/icons/skills/typescript.svg",
    name: "TypeScript",
    projects: [
      { name: "BirdsPantanal", link: "/projects/birds-pantanal" },
      { name: "MySell", link: "/projects/mysell" },
      { name: "Porfolio", link: "#" },
    ],
    category: "frontend",
    description: "typescript.description",
  },
  {
    icon: "/icons/skills/python-svgrepo-com.svg",
    name: "Python",
    projects: [
      {
        name: "Iot Project",
        link: "/projects/iot-project",
      },
    ],
    category: "backend",
    description: "python.description",
  },
  {
    icon: "/icons/skills/rabbitmq-icon-svgrepo-com.svg",
    name: "RabbitMQ",
    projects: [
      {
        name: "Order Manager",
        link: "/projects/order-manager",
      },
    ],
    category: "backend",
    description: "rabbitmq.description",
  },
  {
    icon: "/icons/skills/postman-icon-svgrepo-com.svg",
    name: "Postman",
    projects: [
      {
        name: "Order Manager",
        link: "/projects/order-manager",
      },
    ],
    category: "tools",
    description: "postman.description",
  },
  {
    icon: "/icons/skills/arduino-svgrepo-com.svg",
    name: "Arduino",
    projects: [
      {
        name: "Iot Project",
        link: "/projects/iot-project",
      },
    ],
    category: "backend",
    description: "arduino.description",
  },
  {
    icon: "/icons/skills/linux-svgrepo-com.svg",
    name: "Linux",
    projects: [
      {
        name: "Liads Server",
        link: "/projects/liads-server",
      },
      {
        name: "OS",
        link: "#",
      },
    ],
    category: "tools",
    description: "linux.description",
  },
  {
    icon: "/icons/skills/microservice-icon.svg",
    name: "Microservices",
    projects: [
      {
        name: "Order Manager",
        link: "/projects/order-manager",
      },
    ],
    category: "backend",
    description: "microservices.description",
  },
  {
    icon: "/icons/skills/opencv-svgrepo-com.svg",
    name: "OpenCV",
    projects: [
      {
        name: "Facial Recognition",
        link: "projects/face-recognition",
      },
    ],
    category: "backend",
    description: "opencv.description",
  },
  {
    icon: "/icons/skills/face-id-svgrepo-com.svg",
    name: "Face Recognition",
    projects: [
      {
        name: "Facial Recognition",
        link: "projects/face-recognition",
      },
    ],
    category: "backend",
    description: "faceid.description",
  },
  {
    icon: "/icons/skills/shell-svgrepo-com.svg",
    name: "Shell Script",
    projects: [
      {
        name: "Liads Server",
        link: "/projects/liads-server",
      },
    ],
    category: "cloud",
    description: "shell.description",
  },
];

export default skills;
