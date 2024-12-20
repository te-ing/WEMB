import { getPageData } from "@/api/page";

export default async function PageView({ params }: { params: { id: string } }) {
  const { background, width } = await getPageData({ id: params.id });

  return (
    <div className={`relative w-[${width}]`}>
      <img src={`http://localhost:8000/${background}`}></img>
    </div>
  );
}
