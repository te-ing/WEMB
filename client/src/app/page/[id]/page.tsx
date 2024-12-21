import { getPageData } from "@/api/page";

export default async function PageView({ params }: { params: { id: string } }) {
  const { background, width } = await getPageData({ id: params.id });

  return (
    <div className={`relative w-[${width}]`}>
      <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${background}`}></img>
    </div>
  );
}
