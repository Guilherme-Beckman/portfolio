"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./skills-graph.module.css";
interface SkillNode {
  id: number;
  name: string;
  img: string;
  neighbors?: SkillNode[];
  links?: any[];
}

interface SkillLink {
  source: SkillNode;
  target: SkillNode;
}

export function genSkillGraph() {
  const nodes: SkillNode[] = [
  { id: 0, name: "TypeScript", img: "/icons/skills/typescript.svg" },
  { id: 1, name: "JavaScript", img: "/icons/skills/js-svgrepo-com.svg" },
  { id: 2, name: "Angular", img: "/icons/skills/angular-svgrepo-com.svg" },
  { id: 3, name: "React", img: "/icons/skills/react-svgrepo-com.svg" },
  { id: 4, name: "Ionic", img: "/icons/skills/ionic-svgrepo-com.svg" },
  { id: 5, name: "Next.js", img: "/icons/skills/nextjs-fill-svgrepo-com.svg" },
  { id: 6, name: "HTML", img: "/icons/skills/html-5-svgrepo-com.svg" },
  { id: 7, name: "CSS", img: "/icons/skills/css-3-svgrepo-com.svg" },
  { id: 8, name: "Java", img: "/icons/skills/java-svgrepo-com.svg" },
  { id: 9, name: "Spring", img: "/icons/skills/spring-svgrepo-com.svg" },
  { id: 10, name: "PHP", img: "/icons/skills/php-svgrepo-com.svg" },
  { id: 11, name: "Laravel", img: "/icons/skills/laravel-svgrepo-com.svg" },
  { id: 12, name: "Python", img: "/icons/skills/python-svgrepo-com.svg" },
  { id: 13, name: "MySQL", img: "/icons/skills/mysql-svgrepo-com.svg" },
  { id: 14, name: "PostgreSQL", img: "/icons/skills/postgresql-svgrepo-com.svg" },
  { id: 15, name: "MongoDB", img: "/icons/skills/mongodb-svgrepo-com.svg" },
  { id: 16, name: "Docker", img: "/icons/skills/docker-svgrepo-com.svg" },
  { id: 17, name: "Kong", img: "/icons/skills/kong-icon-svgrepo-com.svg" },
  { id: 18, name: "Consul", img: "/icons/skills/consul-svgrepo-com.svg" },
  { id: 19, name: "AWS", img: "/icons/skills/aws-svgrepo-com.svg" },
  { id: 20, name: "EC2", img: "/icons/skills/aws-ec2-svgrepo-com.svg" },
  { id: 21, name: "S3", img: "/icons/skills/aws-s3-svgrepo-com.svg" },
  { id: 22, name: "Route53", img: "/icons/skills/aws-route53-svgrepo-com.svg" },
  { id: 23, name: "Nginx", img: "/icons/skills/nginx-svgrepo-com.svg" },
  { id: 24, name: "RabbitMQ", img: "/icons/skills/rabbitmq-icon-svgrepo-com.svg" },
  { id: 25, name: "Git", img: "/icons/skills/git-svgrepo-com.svg" },
  { id: 26, name: "GitHub", img: "/icons/skills/github-142-svgrepo-com.svg" },
  { id: 27, name: "Postman", img: "/icons/skills/postman-icon-svgrepo-com.svg" },
];

nodes.forEach((node) => {
  node.neighbors = [];
  node.links = [];
});

// Mantém as conexões lógicas que você já definiu
// Conexões principais (como você já tinha feito)
const baseLinks: SkillLink[] = [
  // Frontend core
  { source: nodes[0], target: nodes[1] }, // TS -> JS
  { source: nodes[0], target: nodes[2] }, // TS -> Angular
  { source: nodes[0], target: nodes[3] }, // TS -> React
  { source: nodes[3], target: nodes[4] }, // React -> Ionic
  { source: nodes[3], target: nodes[5] }, // React -> Next.js
  { source: nodes[1], target: nodes[6] }, // JS -> HTML
  { source: nodes[1], target: nodes[7] }, // JS -> CSS

  // Backend Java
  { source: nodes[8], target: nodes[9] }, // Java -> Spring

  // Backend PHP
  { source: nodes[10], target: nodes[11] }, // PHP -> Laravel

  // Databases
  { source: nodes[13], target: nodes[9] },  // MySQL -> Spring
  { source: nodes[14], target: nodes[9] },  // PostgreSQL -> Spring
  { source: nodes[15], target: nodes[12] }, // MongoDB -> Python

  // Infra
  { source: nodes[16], target: nodes[17] }, // Docker -> Kong
  { source: nodes[16], target: nodes[18] }, // Docker -> Consul
  { source: nodes[16], target: nodes[23] }, // Docker -> Nginx
  { source: nodes[17], target: nodes[18] }, // Kong -> Consul

  // AWS
  { source: nodes[19], target: nodes[20] }, // AWS -> EC2
  { source: nodes[19], target: nodes[21] }, // AWS -> S3
  { source: nodes[19], target: nodes[22] }, // AWS -> Route53

  // Tools
  { source: nodes[25], target: nodes[26] }, // Git -> GitHub
  { source: nodes[25], target: nodes[27] }, // Git -> Postman
];

// --- garante que TODO mundo fique conectado ---
// vamos percorrer os nodes e ligar em "cadeia"
for (let i = 0; i < nodes.length - 1; i++) {
  baseLinks.push({ source: nodes[i], target: nodes[i + 1] });
}



// Junta as conexões lógicas + todas as possíveis
const links: SkillLink[] = [...baseLinks, ...baseLinks];


  links.forEach((link) => {
    link.source.neighbors!.push(link.target);
    link.target.neighbors!.push(link.source);
    link.source.links!.push(link);
    link.target.links!.push(link);
  });

  return { nodes, links };
}

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), {
  ssr: false,
});

export function SkillsGraph() {
  const data = useMemo(() => genSkillGraph(), []);
  const imagesRef = useRef<Record<string, HTMLImageElement>>({});
  const graphRef = useRef<any>({});

  useEffect(() => {
    const imgMap: Record<string, HTMLImageElement> = {};
    data.nodes.forEach((node) => {
      const img = new Image();
      img.src = node.img;
      imgMap[node.id] = img;
    });
    imagesRef.current = imgMap;
  }, [data.nodes]);

  const [hoverNode, setHoverNode] = useState<any>(null);
  const [highlightNodes, setHighlightNodes] = useState<Set<any>>(new Set());
  const [highlightLinks, setHighlightLinks] = useState<Set<any>>(new Set());

  useEffect(() => {
    const timer = setTimeout(() => {
      if (graphRef.current) {
        graphRef.current.centerAt(0, 0, 0);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleNodeHover = (node: any) => {
    const newHighlightNodes = new Set<any>();
    const newHighlightLinks = new Set<any>();

    if (node) {
      newHighlightNodes.add(node);
      node.neighbors.forEach((n: any) => newHighlightNodes.add(n));
      node.links.forEach((l: any) => newHighlightLinks.add(l));
    }

    setHoverNode(node || null);
    setHighlightNodes(newHighlightNodes);
    setHighlightLinks(newHighlightLinks);
  };

  const handleLinkHover = (link: any) => {
    const newHighlightNodes = new Set<any>();
    const newHighlightLinks = new Set<any>();

    if (link) {
      newHighlightLinks.add(link);
      newHighlightNodes.add(link.source);
      newHighlightNodes.add(link.target);
    }

    setHighlightNodes(newHighlightNodes);
    setHighlightLinks(newHighlightLinks);
  };

  return (
    <div className={`${styles.skillsGraph} animatedBg`}>
      <ForceGraph2D
        ref={graphRef}
        graphData={data}
        enableZoomInteraction={false}
        enablePanInteraction={false}
        nodeCanvasObject={(node: any, ctx, globalScale) => {
          const img = imagesRef.current[node.id];
          const size = 40 / globalScale;

          if (img && img.complete) {
            ctx.drawImage(
              img,
              node.x! - size / 2,
              node.y! - size / 2,
              size,
              size
            );
          } else {
            ctx.fillStyle = "gray";
            ctx.beginPath();
            ctx.arc(node.x!, node.y!, size / 2, 0, 2 * Math.PI);
            ctx.fill();
          }

          if (highlightNodes.has(node)) {
            ctx.beginPath();
            ctx.arc(node.x!, node.y!, size / 1.5, 0, 2 * Math.PI);
            ctx.strokeStyle = node === hoverNode ? "cyan" : "orange";
            ctx.lineWidth = 3 / globalScale;
            ctx.stroke();
          }
        }}
        nodePointerAreaPaint={(node, color, ctx) => {
          const size = 12;
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(node.x!, node.y!, size, 0, 2 * Math.PI, false);
          ctx.fill();
        }}
        linkWidth={(link) => (highlightLinks.has(link) ? 4 : 1)}
        onNodeHover={handleNodeHover}
        onLinkHover={handleLinkHover}
        autoPauseRedraw={false}
        linkDirectionalParticleWidth={(link) =>
          highlightLinks.has(link) ? 4 : 0
        }
        linkDirectionalParticles={4}
        nodeRelSize={4}
        linkColor={(link) => (highlightLinks.has(link) ? "cyan" : "white")}
        onNodeDrag={() => {
          if (graphRef.current) {
            graphRef.current.centerAt(0, 0, 0);
          }
        }}
      />
    </div>
  );
}
