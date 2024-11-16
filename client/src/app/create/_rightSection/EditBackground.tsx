import React from "react";
import { CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { AlertButton } from "@/components/common/AlertButton";
import { useStore } from "zustand";
import { FileInput } from "@/components/common/fileInput";
import { useSourceStore } from "@/stores/sourceStore";

export default function EditBackground() {
  const { setBackground, background } = useStore(useSourceStore);

  const handleImage: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { files } = e.currentTarget;
    if (!files || !files[0]) return;
    const file = files[0];
    setBackground({ background: file });
    e.target.value = "";
  };

  return (
    <CardContent className="pb-2 flex flex-col items-end">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="background" className="font-semibold">
          배경 이미지
        </Label>
        <FileInput id="background" maxLength={1} accept="image/*" onChange={handleImage} value={background.name} />
      </div>
    </CardContent>
  );
}
