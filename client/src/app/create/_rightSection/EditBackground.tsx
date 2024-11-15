import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { AlertButton } from "@/components/common/AlertButton";
import { useStore } from "zustand";
import { useBackgroundStore } from "@/stores/bgImageStore";
import { FileInput } from "@/components/common/fileInput";

export default function EditBackground() {
  const { setBackground, background } = useStore(useBackgroundStore);

  const handleImage: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { files } = e.currentTarget;
    if (!files || !files[0]) return;
    const file = files[0];
    setBackground({ background: file });
  };

  const onConfirm = () => {
    setBackground({ background: new File([], "") });
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle>배경 이미지 설정</CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="background">이미지</Label>
          <FileInput id="background" maxLength={1} accept="image/*" onChange={handleImage} value={background.name} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end pb-4">
        <AlertButton
          onConfirm={onConfirm}
          triggerTitle="초기화"
          dialogTitle="배경이미지를 초기화 하시겠습니까?"
          DialogClassName="w-[400px] h-[140px]"
        />
      </CardFooter>
    </Card>
  );
}
