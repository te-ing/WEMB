import { SourceAction, SourceState } from "@/type/source.type";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useSourceStore = create(
  devtools<SourceState & SourceAction>((set, get) => ({
    title: "",
    background: new File([], ""),
    setBackground: ({ background }) =>
      set((state) => ({
        ...state,
        background,
      })),
  })),
);

export { useSourceStore };
