"use server";

import { PageData } from "@/type/page.type";
import { revalidatePath } from "next/cache";

export const getPageList = async (): Promise<PageData[]> => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/page`, {
    method: "GET",
  });
  const res = await data.json();
  return res;
};

export const getPageData = async ({ id }: { id: string }): Promise<PageData> => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/page/${id}`, {
    method: "GET",
  });
  const res = await data.json();
  return res;
};

export const deletePageData = async ({ id }: { id: string }): Promise<PageData> => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/page/${id}`, {
    method: "DELETE",
  });
  const res = await data.json();
  revalidatePath("/page");
  return res;
};
