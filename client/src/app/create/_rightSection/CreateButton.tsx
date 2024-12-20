import { postCreatePage } from "@/api/upload";
import { AlertButton } from "@/components/common/AlertButton";
import { useSourceStore } from "@/stores/sourceStore";
import React from "react";
import { useStore } from "zustand";

export const CreateButton = () => {
  const { title, background } = useStore(useSourceStore);

  const createPage = async () => {
    const formData = new FormData();
    formData.append("name", title);
    formData.append("file", background);
    await postCreatePage(formData);
  };

  return (
    <AlertButton
      dialogTitle={`"${title}"\n페이지를 생성하시겠습니까?`}
      onConfirm={() => createPage()}
      triggerTitle="페이지 만들기"
      triggerClassName={`bg-white border w-fit`}
      disabled={!title}
    ></AlertButton>
  );
};
