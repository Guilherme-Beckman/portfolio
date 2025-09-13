/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./skills-graph.module.css";
import nodes from "@/app/data/skillsGraphNodesData";
import links from "@/app/data/skillsGrapLinksData";
// ===== INTERFACES =====
export interface SkillNode {
  id: number;
  name: string;
  img: string;
  neighbors?: SkillNode[];
  links?: SkillLink[];
}

export interface SkillLink {
  source: SkillNode;
  target: SkillNode;
}

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), {
  ssr: false,
});

export function genSkillGraph() {
  nodes.forEach((node) => {
    node.neighbors = [];
    node.links = [];
  });

  // Connect all clusters to ensure connectivity
  for (let i = 0; i < nodes.length - 1; i++) {
    links.push({ source: nodes[i], target: nodes[i + 1] });
  }

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
  const graphRef = useRef<any>({});

  const [hoverNode, setHoverNode] = useState<any>(null);
  const [highlightNodes, setHighlightNodes] = useState<Set<any>>(new Set());
  const [highlightLinks, setHighlightLinks] = useState<Set<any>>(new Set());

  useEffect(() => {
    const imgMap: Record<string, HTMLImageElement> = {};
    data.nodes.forEach((node) => {
      const img = new Image();
      img.src = node.img;
      imgMap[node.id] = img;
    });
    imagesRef.current = imgMap;
  }, [data.nodes]);

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

  const renderNode = (
    node: any,
    ctx: CanvasRenderingContext2D,
    globalScale: number
  ) => {
    const img = imagesRef.current[node.id];
    const size = 40 / globalScale;

    ctx.beginPath();
    ctx.arc(node.x!, node.y!, size / 1.5, 0, 2 * Math.PI);
    ctx.fillStyle = "#222";
    ctx.fill();

    if (img && img.complete) {
      ctx.drawImage(img, node.x! - size / 2, node.y! - size / 2, size, size);
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
  };

  const renderNodePointerArea = (
    node: any,
    color: string,
    ctx: CanvasRenderingContext2D
  ) => {
    const size = 12;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(node.x!, node.y!, size, 0, 2 * Math.PI, false);
    ctx.fill();
  };

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
        linkDirectionalParticleWidth={(link) =>
          highlightLinks.has(link) ? 4 : 0
        }
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
