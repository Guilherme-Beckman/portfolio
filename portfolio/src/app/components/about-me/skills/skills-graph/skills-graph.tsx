"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./skills-graph.module.css";
const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), {
  ssr: false,
});
interface SkillNode {
  id: number;
  name: string;
  img: string;
  neighbors?: SkillNode[]; // opcional
  links?: any[]; // opcional, pode melhorar o tipo
}
interface SkillLink {
  source: SkillNode;
  target: SkillNode;
}
// Gera nodes e links
export function genSkillGraph() {
  const nodes: SkillNode[] = [
    { id: 0, name: "TypeScript", img: "/icons/skills/typescript.svg" },
    { id: 1, name: "Angular", img: "/icons/skills/typescript.svg" },
    { id: 2, name: "React", img: "/icons/skills/react.svg" },
  ];

  // Inicializa neighbors e links
  nodes.forEach((node) => {
    node.neighbors = [];
    node.links = [];
  });

  // Cria links tipados
  const links: SkillLink[] = [
    { source: nodes[0], target: nodes[1] },
    { source: nodes[1], target: nodes[2] },
  ];

  // Preenche neighbors e links em cada node
  links.forEach((link) => {
    link.source.neighbors!.push(link.target);
    link.target.neighbors!.push(link.source);
    link.source.links!.push(link);
    link.target.links!.push(link);
  });

  return { nodes, links };
}

export function SkillsGraph() {
  const data = useMemo(() => genSkillGraph(), []);
  const imagesRef = useRef<Record<string, HTMLImageElement>>({});

  // Carrega imagens dos nodes
  useEffect(() => {
    const imgMap: Record<string, HTMLImageElement> = {};
    data.nodes.forEach((node) => {
      const img = new Image();
      img.src = node.img;
      imgMap[node.id] = img;
    });
    imagesRef.current = imgMap;
  }, [data.nodes]);

  // Estados de highlight
  const [hoverNode, setHoverNode] = useState<any>(null);
  const [highlightNodes, setHighlightNodes] = useState<Set<any>>(new Set());
  const [highlightLinks, setHighlightLinks] = useState<Set<any>>(new Set());

  // Atualiza nodes e links destacados
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
      
        graphData={data}
        minZoom={10}
        maxZoom={1}
        nodeCanvasObject={(node: any, ctx, globalScale) => {
          const img = imagesRef.current[node.id];
          const size = 40 / globalScale;

          // Desenha a imagem ou fallback
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

          // Highlight ring
          if (highlightNodes.has(node)) {
            ctx.beginPath();
            ctx.arc(node.x!, node.y!, size / 1.5, 0, 2 * Math.PI);
            ctx.strokeStyle = node === hoverNode ? "red" : "orange";
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
      />
    </div>
  );
}
