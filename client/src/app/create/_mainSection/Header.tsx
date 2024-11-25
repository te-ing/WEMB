import { HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex gap-2 p-2 items-center w-full h-10 border-b bg-white ">
      <Link href={"/"}>
        <HomeIcon />
      </Link>
      HEADER
    </header>
  );
}
