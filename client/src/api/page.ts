import { PageData } from "@/type/page.type";

export const getPageList = async (): Promise<PageData[]> => {
  const data = await fetch("http://localhost:8000/page", {
    method: "GET",
  });
  const res = await data.json();
  return res;
};
