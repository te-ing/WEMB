"use client";

import { useFileToImage } from "@/hooks/useFileToImage";

export default function Preview() {
  const image = useFileToImage();

  return (
    <div className={`w-full h-full bg-cover bg-no-repeat`} style={{ backgroundImage: `url(${image?.src || ""})` }}>
      PREVIEW
    </div>
  );
}
