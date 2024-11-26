import { AlertButton } from "@/components/common/AlertButton";
import { useSourceStore } from "@/stores/sourceStore";
import React from "react";
import { useStore } from "zustand";

export const CreateButton = () => {
  const { title } = useStore(useSourceStore);

  return (
    <AlertButton
      dialogTitle={`"${title}"\n페이지를 생성하시겠습니까?`}
      onConfirm={() => ""}
      triggerTitle="페이지 만들기"
      triggerClassName={`bg-white border w-fit`}
      disabled={!title}
    ></AlertButton>
  );
};
