"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef } from "react";

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), {
  ssr: false,
});

export function genSkillGraph() {
  // nodes com id, nome e imagem
  const nodes = [
    { id: 2, name: "TypeScript", img: "/icons/skills/typescript.svg" },
    { id: 0, name: "TypeScript", img: "/icons/skills/typescript.svg" },
  ];

  // links que conectam skills específicas
  const links = [
    { source: 0, target: 2 }, // Java -> Spring
    { source: 2, target: 0 }, // TypeScript -> Angular
  ];

  return { nodes, links };
}

export function SkillsGraph() {
  const data = useMemo(() => genSkillGraph(), []);
  const imagesRef = useRef<Record<string, HTMLImageElement>>({});
  useEffect(() => {
    const imgMap: Record<string, HTMLImageElement> = {};
    data.nodes.forEach((node) => {
      const img = new Image();
      img.src = node.img;
      imgMap[node.id] = img;
    });
    imagesRef.current = imgMap;
  }, [data.nodes]);
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ForceGraph2D
        graphData={data}
        nodeCanvasObject={(node: any, ctx, globalScale) => {
          const img = imagesRef.current[node.id];
          if (img && img.complete) {
            // só desenha se já carregou
            const size = 20 / globalScale;
            ctx.drawImage(
              img,
              node.x! - size / 2,
              node.y! - size / 2,
              size,
              size
            );
          } else {
            // fallback: desenha círculo enquanto a imagem carrega
            const size = 20 / globalScale;
            ctx.fillStyle = "gray";
            ctx.beginPath();
            ctx.arc(node.x!, node.y!, size / 2, 0, 2 * Math.PI, false);
            ctx.fill();
          }
        }}
        nodePointerAreaPaint={(node, color, ctx) => {
          const size = 12;
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(node.x!, node.y!, size, 0, 2 * Math.PI, false);
          ctx.fill();
        }}
        maxZoom={2}
        minZoom={2}
        linkWidth={5}
      />
    </div>
  );
}
