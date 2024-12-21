import { ReactNode } from "react";
import ReactDOM from "react-dom";

type TProps = {
  children: ReactNode;
  selector?: string;
};

export default function Portal({ children, selector = "portal" }: TProps) {
  const element = typeof window !== "undefined" && document.getElementById(selector);
  if (!children || !element) return null;
  return ReactDOM.createPortal(children, element);
}
