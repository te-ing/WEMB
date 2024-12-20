"use client";

import { deletePageData } from "@/api/page";
import { Button } from "@/components/ui/button";
import { PenLineIcon, Trash2 } from "lucide-react";
import React from "react";

export const ActionButton = ({ pageId }: { pageId: string }) => {
  const handleDeletePageButton = async (id: string) => {
    try {
      await deletePageData({ id });
      alert("삭제되었습니다.");
    } catch {
      return alert("삭제 도중 오류가 발생했습니다.");
    }
  };
  const handleEditPageButton = async (id: string) => {
    alert("개발중인 기능입니다");
  };

  return (
    <div className="flex gap-2">
      <Button variant="outline" size="sm" onClick={() => handleEditPageButton(pageId)}>
        <PenLineIcon />
      </Button>
      <Button variant="outline" size="sm" onClick={() => handleDeletePageButton(pageId)}>
        <Trash2 />
      </Button>
    </div>
  );
};
