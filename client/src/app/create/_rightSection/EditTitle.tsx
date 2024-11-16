import React, { ChangeEventHandler } from "react";
import { CardContent } from "@/components/ui/card";
import { useStore } from "zustand";
import { useSourceStore } from "@/stores/sourceStore";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export default function EditTitle() {
  const { setTitle, title } = useStore(useSourceStore);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle({ title: e.target.value });
  };
  return (
    <CardContent className="pb-2 flex flex-col items-end">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="title" className="font-semibold">
          타이틀
        </Label>
        <Input
          id="title"
          type="text"
          maxLength={100}
          placeholder="페이지의 이름을 입력해주세요"
          onChange={handleChange}
          value={title}
        />
      </div>
    </CardContent>
  );
}
