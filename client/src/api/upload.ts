"use server";

import { revalidatePath } from "next/cache";

export const postCreatePage = async (formData: FormData) => {
  const data = await fetch("http://localhost:8000/page/create", {
    method: "POST",
    body: formData,
  });
  const res = await data.json();
  revalidatePath("/page");
  return res;
};
