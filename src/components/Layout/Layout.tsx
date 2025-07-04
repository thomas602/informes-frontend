import type { ReactNode } from "react";
import { Sidebar } from "../Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <Sidebar>{children}</Sidebar>;
};
