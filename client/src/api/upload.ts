"use server";

import { PageData } from "@/type/page.type";
import { revalidatePath } from "next/cache";

export const postCreatePage = async (formData: FormData): Promise<PageData> => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/page/create`, {
    method: "POST",
    body: formData,
  });
  const res = await data.json();
  revalidatePath("/page");
  return res;
};
