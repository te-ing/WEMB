"use client";

import { Button } from "@/components/ui/button";
import { useFileToImage } from "@/hooks/useFileToImage";
import { useEffect } from "react";

export default function Preview() {
  const image = useFileToImage();

  return (
    <article className="relative flex justify-center">
      <img src={image?.src} className={`absolute -z-10`}></img>
    </article>
  );
}
