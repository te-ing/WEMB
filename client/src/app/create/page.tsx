"use client";

import { LeftSidebar } from "./_leftSection/LeftSidebar";
import Header from "./_mainSection/Header";
import Preview from "./_mainSection/Preview";
import RightSidebar from "./_rightSection/RightSidebar";

export default function CreatePage() {
  return (
    <div className="flex">
      <LeftSidebar />
      <section className="w-full flex flex-col pt-10">
        <Header />
        <Preview />
      </section>
      <RightSidebar />
    </div>
  );
}
