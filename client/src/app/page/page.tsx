import { getPageList } from "@/api/page";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import dayjs from "dayjs";
import Link from "next/link";

export default async function ListPage() {
  const data = await getPageList();
  const PAGE_LIST_TABLE_HEAD = ["NO", "페이지명", "생성날짜", "수정날짜"];

  return (
    <div className="flex flex-col items-center">
      <header className="p-4">페이지 리스트</header>
      <div className="rounded-md border w-[80%]">
        <Table>
          <TableHeader>
            <TableRow key={1}>
              {PAGE_LIST_TABLE_HEAD.map((v) => (
                <TableHead key={v} className="text-center">
                  {v}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.length ? (
              data.map(({ _id: id, name, createdAt, updatedAt }, idx) => (
                <TableRow key={id} className="text-center">
                  <TableCell className="w-[10%]">{idx + 1}</TableCell>
                  <TableCell className="w-[50%]">
                    <Link className="underline" href={`/page/${id}`}>
                      {name}
                    </Link>
                  </TableCell>
                  <TableCell className="w-[20%]">{dayjs(createdAt).format("YYYY년 MM월 D일 HH시 mm분")}</TableCell>
                  <TableCell className="w-[20%]">{dayjs(updatedAt).format("YYYY년 MM월 D일 HH시 mm분")}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={PAGE_LIST_TABLE_HEAD.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
