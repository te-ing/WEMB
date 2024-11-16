import { useSourceStore } from "@/stores/sourceStore";
import { useEffect, useState } from "react";
import { useStore } from "zustand";

export function useFileToImage() {
  const { background: file } = useStore(useSourceStore);
  const [image, setImage] = useState<HTMLImageElement>();

  useEffect(() => {
    if (!file || !file.size) {
      setImage(undefined);
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = (event) => {
      const image = new Image();
      image.src = event.target?.result as string;
      image.onload = () => {
        setImage(image);
        return;
      };
    };
  }, [file]);

  return image;
}
