"use client";

import Image from "next/image";
import { useRef } from "react";

interface FullscreenImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function FullscreenImage({
  src,
  alt = "",
  className,
}: FullscreenImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  const handleFullscreen = async () => {
    if (imgRef.current) {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await imgRef.current.requestFullscreen();
      }
    }
  };

  return (
    <Image
      ref={imgRef}
      src={src}
      alt={alt}
      className={className ?? "cursor-pointer rounded-xl"}
      onClick={handleFullscreen}
    />
  );
}
