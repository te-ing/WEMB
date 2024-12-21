"use client";

import { LoaderCircleIcon } from "lucide-react";
import React from "react";
import Portal from "./Portal";

export const AlertLoading = () => {
  return (
    <Portal>
      <div className={"fixed inset-0 z-50 bg-black/80 flex justify-center items-center"}>
        <LoaderCircleIcon className="text-gray-200 h-16 w-16 animate-spin" />
      </div>
    </Portal>
  );
};
