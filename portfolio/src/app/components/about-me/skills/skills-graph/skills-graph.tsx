"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./skills-graph.module.css";

// ===== INTERFACES =====
interface SkillNode {
  id: number;
  name: string;
  img: string;
  neighbors?: SkillNode[];
  links?: SkillLink[];
}

interface SkillLink {
  source: SkillNode;
  target: SkillNode;
}

// ===== DYNAMIC IMPORT =====
const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), {
  ssr: false,
});

// ===== DATA GENERATION =====
export function genSkillGraph() {
  const nodes: SkillNode[] = [
    // Frontend Technologies
    { id: 0, name: "TypeScript", img: "/icons/skills/typescript.svg" },
    { id: 1, name: "JavaScript", img: "/icons/skills/js-svgrepo-com.svg" },
    { id: 2, name: "Angular", img: "/icons/skills/angular-svgrepo-com.svg" },
    { id: 3, name: "React", img: "/icons/skills/react-svgrepo-com.svg" },
    { id: 4, name: "Ionic", img: "/icons/skills/ionic-svgrepo-com.svg" },
    { id: 5, name: "Next.js", img: "/icons/skills/nextjs-fill-svgrepo-com.svg" },
    { id: 6, name: "HTML", img: "/icons/skills/html-5-svgrepo-com.svg" },
    { id: 7, name: "CSS", img: "/icons/skills/css-3-svgrepo-com.svg" },

    // Backend Technologies
    { id: 8, name: "Java", img: "/icons/skills/java-svgrepo-com.svg" },
    { id: 9, name: "Spring", img: "/icons/skills/spring-svgrepo-com.svg" },
    { id: 10, name: "PHP", img: "/icons/skills/php-svgrepo-com.svg" },
    { id: 11, name: "Laravel", img: "/icons/skills/laravel-svgrepo-com.svg" },
    { id: 12, name: "Python", img: "/icons/skills/python-svgrepo-com.svg" },
    { id: 28, name: "FastApi", img: "/icons/skills/fastapi-svgrepo-com.svg" },

    // Database Technologies
    { id: 13, name: "MySQL", img: "/icons/skills/mysql-svgrepo-com.svg" },
    { id: 14, name: "PostgreSQL", img: "/icons/skills/postgresql-svgrepo-com.svg" },
    { id: 15, name: "MongoDB", img: "/icons/skills/mongodb-svgrepo-com.svg" },

    // Infrastructure & DevOps
    { id: 16, name: "Docker", img: "/icons/skills/docker-svgrepo-com.svg" },
    { id: 17, name: "Kong", img: "/icons/skills/kong-icon-svgrepo-com.svg" },
    { id: 18, name: "Consul", img: "/icons/skills/consul-svgrepo-com.svg" },
    { id: 19, name: "AWS", img: "/icons/skills/aws-svgrepo-com.svg" },
    { id: 20, name: "EC2", img: "/icons/skills/aws-ec2-svgrepo-com.svg" },
    { id: 21, name: "S3", img: "/icons/skills/aws-s3-svgrepo-com.svg" },
    { id: 22, name: "Route53", img: "/icons/skills/aws-route53-svgrepo-com.svg" },
    { id: 23, name: "Nginx", img: "/icons/skills/nginx-svgrepo-com.svg" },
    { id: 24, name: "RabbitMQ", img: "/icons/skills/rabbitmq-icon-svgrepo-com.svg" },

    // Development Tools
    { id: 25, name: "Git", img: "/icons/skills/git-svgrepo-com.svg" },
    { id: 26, name: "GitHub", img: "/icons/skills/github-142-svgrepo-com.svg" },
    { id: 27, name: "Postman", img: "/icons/skills/postman-icon-svgrepo-com.svg" },
  ];

  // Initialize node properties
  nodes.forEach((node) => {
    node.neighbors = [];
    node.links = [];
  });

  const links: SkillLink[] = [
    // Frontend connections
    { source: nodes[0], target: nodes[1] }, // TypeScript -> JavaScript
    { source: nodes[0], target: nodes[2] }, // TypeScript -> Angular
    { source: nodes[0], target: nodes[3] }, // TypeScript -> React
    { source: nodes[3], target: nodes[4] }, // React -> Ionic
    { source: nodes[3], target: nodes[5] }, // React -> Next.js
    { source: nodes[1], target: nodes[6] }, // JavaScript -> HTML
    { source: nodes[1], target: nodes[7] }, // JavaScript -> CSS

    // Backend connections
    { source: nodes[8], target: nodes[9] },   // Java -> Spring
    { source: nodes[10], target: nodes[11] }, // PHP -> Laravel
    { source: nodes[28], target: nodes[12] }, // FastApi -> Python

    // Database connections
    { source: nodes[13], target: nodes[9] },  // MySQL -> Spring
    { source: nodes[14], target: nodes[9] },  // PostgreSQL -> Spring
    { source: nodes[15], target: nodes[12] }, // MongoDB -> Python

    // Infrastructure connections
    { source: nodes[16], target: nodes[17] }, // Docker -> Kong
    { source: nodes[16], target: nodes[18] }, // Docker -> Consul
    { source: nodes[16], target: nodes[23] }, // Docker -> Nginx
    { source: nodes[17], target: nodes[18] }, // Kong -> Consul
    { source: nodes[19], target: nodes[20] }, // AWS -> EC2
    { source: nodes[19], target: nodes[21] }, // AWS -> S3
    { source: nodes[19], target: nodes[22] }, // AWS -> Route53

    // Tool connections
    { source: nodes[25], target: nodes[26] }, // Git -> GitHub
    { source: nodes[25], target: nodes[27] }, // Git -> Postman
  ];

  // Connect all clusters to ensure connectivity
  for (let i = 0; i < nodes.length - 1; i++) {
    links.push({ source: nodes[i], target: nodes[i + 1] });
  }

  // Build bidirectional relationships
  links.forEach((link) => {
    link.source.neighbors!.push(link.target);
    link.target.neighbors!.push(link.source);
    link.source.links!.push(link);
    link.target.links!.push(link);
  });

  return { nodes, links };
}

// ===== MAIN COMPONENT =====
export function SkillsGraph() {
  // Data and refs
  const data = useMemo(() => genSkillGraph(), []);
  const imagesRef = useRef<Record<string, HTMLImageElement>>({});
  const graphRef = useRef<any>({});

  // State for interactions
  const [hoverNode, setHoverNode] = useState<any>(null);
  const [highlightNodes, setHighlightNodes] = useState<Set<any>>(new Set());
  const [highlightLinks, setHighlightLinks] = useState<Set<any>>(new Set());

  // ===== EFFECTS =====
  
  // Preload images
  useEffect(() => {
    const imgMap: Record<string, HTMLImageElement> = {};
    data.nodes.forEach((node) => {
      const img = new Image();
      img.src = node.img;
      imgMap[node.id] = img;
    });
    imagesRef.current = imgMap;
  }, [data.nodes]);

  // Center graph after initialization
  useEffect(() => {
    const timer = setTimeout(() => {
      if (graphRef.current) {
        graphRef.current.centerAt(0, 0, 0);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // ===== EVENT HANDLERS =====
  
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

  // ===== RENDER FUNCTIONS =====
  
  const renderNode = (node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
    const img = imagesRef.current[node.id];
    const size = 40 / globalScale;

    // Background circle
    ctx.beginPath();
    ctx.arc(node.x!, node.y!, size / 1.5, 0, 2 * Math.PI);
    ctx.fillStyle = "#222";
    ctx.fill();

    // Node image
    if (img && img.complete) {
      ctx.drawImage(
        img,
        node.x! - size / 2,
        node.y! - size / 2,
        size,
        size
      );
    } else {
      // Fallback for loading images
      ctx.fillStyle = "gray";
      ctx.beginPath();
      ctx.arc(node.x!, node.y!, size / 2, 0, 2 * Math.PI);
      ctx.fill();
    }

    // Highlight border
    if (highlightNodes.has(node)) {
      ctx.beginPath();
      ctx.arc(node.x!, node.y!, size / 1.5, 0, 2 * Math.PI);
      ctx.strokeStyle = node === hoverNode ? "cyan" : "orange";
      ctx.lineWidth = 3 / globalScale;
      ctx.stroke();
    }
  };

  const renderNodePointerArea = (node: any, color: string, ctx: CanvasRenderingContext2D) => {
    const size = 12;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(node.x!, node.y!, size, 0, 2 * Math.PI, false);
    ctx.fill();
  };

  // ===== COMPONENT RENDER =====
  
  return (
    <div className={`${styles.skillsGraph} animatedBg`}>
      <ForceGraph2D
        ref={graphRef}
        graphData={data}
        enableZoomInteraction={false}
        enablePanInteraction={false}
        nodeCanvasObject={renderNode}
        nodePointerAreaPaint={renderNodePointerArea}
        linkWidth={(link) => (highlightLinks.has(link) ? 4 : 1)}
        linkColor={(link) => (highlightLinks.has(link) ? "cyan" : "white")}
        linkDirectionalParticleWidth={(link) => (highlightLinks.has(link) ? 4 : 0)}
        linkDirectionalParticles={4}
        nodeColor="black"
        nodeRelSize={4}
        autoPauseRedraw={false}
        onNodeHover={handleNodeHover}
        onLinkHover={handleLinkHover}
      />
    </div>
  );
}