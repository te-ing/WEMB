"use client";

import { LeftSidebar } from "./_leftSection/LeftSidebar";
import Preview from "./_mainSection/Preview";
import RightSidebar from "./_rightSection/RightSidebar";

export default function CreatePage() {
  return (
    <div className="flex">
      <LeftSidebar />
      <section className="w-full flex flex-col">
        <Preview />
      </section>
      <RightSidebar />
    </div>
  );
}
