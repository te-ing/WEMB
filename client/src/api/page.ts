"use server";

import { PageData } from "@/type/page.type";
import { revalidatePath } from "next/cache";

export const getPageList = async (): Promise<PageData[]> => {
  const data = await fetch("http://localhost:8000/page", {
    method: "GET",
  });
  const res = await data.json();
  return res;
};

export const getPageData = async ({ id }: { id: string }): Promise<PageData> => {
  const data = await fetch(`http://localhost:8000/page/${id}`, {
    method: "GET",
  });
  const res = await data.json();
  return res;
};

export const deletePageData = async ({ id }: { id: string }): Promise<PageData> => {
  const data = await fetch(`http://localhost:8000/page/${id}`, {
    method: "DELETE",
  });
  const res = await data.json();
  revalidatePath("/page");
  return res;
};
