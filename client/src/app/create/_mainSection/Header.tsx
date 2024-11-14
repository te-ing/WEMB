import { HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 flex gap-2 p-1 items-center w-full h-10 border-b bg-white bg-opacity-5 backdrop-blur-sm ">
      <Link href={"/"}>
        <HomeIcon />
      </Link>
      HEADER
    </header>
  );
}
