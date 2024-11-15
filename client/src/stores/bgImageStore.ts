import { create } from "zustand";

interface BackgroundState {
  background: File;
}

interface BackgroundAction {
  setBackground: ({ background }: BackgroundState) => void;
}

const useBackgroundStore = create<BackgroundState & BackgroundAction>((set, get) => ({
  background: new File([], ""),
  setBackground: ({ background }: BackgroundState) =>
    set((state) => ({
      ...state,
      background: background,
    })),
}));

export { useBackgroundStore };
