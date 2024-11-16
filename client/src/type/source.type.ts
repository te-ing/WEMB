export interface SourceState {
  title: string;
  background: File;
}

export interface SourceAction {
  setBackground: ({ background }: Pick<SourceState, "background">) => void;
}
