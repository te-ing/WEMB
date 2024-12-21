import React, { useEffect, useState } from "react";
import { postCreatePage } from "@/api/upload";
import { AlertButton } from "@/components/common/AlertButton";
import { AlertLoading } from "@/components/common/AlertLoading";
import { useSourceStore } from "@/stores/sourceStore";
import { useRouter } from "next/navigation";
import { useStore } from "zustand";

export const CreateButton = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { title, background, reset } = useStore(useSourceStore);

  const createPage = async () => {
    const formData = new FormData();
    formData.append("name", title);
    formData.append("file", background);
    setIsLoading(true);
    const res = await postCreatePage(formData);
    router.push(`/page/${res._id}`);
    setIsLoading(false);
  };

  useEffect(() => {
    // 페이지 탈출 시 작성중인 데이터 삭제
    return () => reset();
  }, []);

  return (
    <>
      {isLoading && <AlertLoading />}
      <AlertButton
        dialogTitle={`"${title}"\n페이지를 생성하시겠습니까?`}
        onConfirm={() => createPage()}
        triggerTitle="페이지 만들기"
        triggerClassName={`bg-white border w-fit`}
        disabled={!title}
      ></AlertButton>
    </>
  );
};
