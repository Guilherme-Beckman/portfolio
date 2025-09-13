import kongIcon from "public/icons/skills/kong-icon-svgrepo-com.svg";
import consulIcon from "public/icons/skills/consul-svgrepo-com.svg";
import typeScriptIcon from "public/icons/skills/typescript.svg";
import javaScriptIcon from "public/icons/skills/js-svgrepo-com.svg";
import laravelIcon from "public/icons/skills/laravel-svgrepo-com.svg";
import phpIcon from "public/icons/skills/php-svgrepo-com.svg";
import microservicesIcon from "public/icons/skills/microservice-icon.svg";
import dockerIcon from "public/icons/skills/docker-svgrepo-com.svg";
import nginxIcon from "public/icons/skills/nginx-svgrepo-com.svg";
import mysqlIcon from "public/icons/skills/mysql-svgrepo-com.svg";
import htmlIcon from "public/icons/skills/html-5-svgrepo-com.svg";
import cssIcon from "public/icons/skills/css-3-svgrepo-com.svg";
import shellIcon from "public/icons/skills/shell-svgrepo-com.svg";
import pythonIcon from "public/icons/skills/python-svgrepo-com.svg";
import opencvIcon from "public/icons/skills/opencv-svgrepo-com.svg";
import postgresIcon from "public/icons/skills/postgresql-svgrepo-com.svg";
import facialRecIcon from "public/icons/skills/face-id-svgrepo-com.svg";
const experiencesData = [
   {
    companieNameKey: "ifmsFacial",
    modelKey: "research",
    period: "SEP 2025 - AUG 2026",
    local: "Corumbá, MS, Brazil",
    roleKey: "researcher",
    descriptionKey: "ifmsFacialDescription",
    usedSkills: [
      { name: "Python", pathIcon: pythonIcon },
      { name: "OpenCV", pathIcon: opencvIcon },
      { name: "Face Recognition", pathIcon: facialRecIcon },
      { name: "PostgreSQL", pathIcon: postgresIcon },
    ],
  },
  {
    companieNameKey: "ifms",
    modelKey: "onsite",
    period: "JAN 2025 - Present",
    local: "Corumbá, MS, Brazil",
    roleKey: "fullstackInfra",
    descriptionKey: "ifmsDescription",
    usedSkills: [
      { name: "Kong", pathIcon: kongIcon },
      { name: "Consul", pathIcon: consulIcon },
      { name: "Typescript", pathIcon: typeScriptIcon },
      { name: "JavaScript", pathIcon: javaScriptIcon },
      { name: "HTML", pathIcon: htmlIcon },
      { name: "CSS", pathIcon: cssIcon },
      { name: "Laravel", pathIcon: laravelIcon },
      { name: "PHP", pathIcon: phpIcon },
      { name: "Microservices", pathIcon: microservicesIcon },
      { name: "Docker", pathIcon: dockerIcon },
      { name: "Nginx", pathIcon: nginxIcon },
      { name: "MySql", pathIcon: mysqlIcon },
      { name: "Shell", pathIcon: shellIcon },
    ],
  },
  
];

export default experiencesData;
