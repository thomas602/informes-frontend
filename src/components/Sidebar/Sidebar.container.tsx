import { memo } from "react";
import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";

export interface Props {
  children?: ReactNode;
}

export const SidebarContainer = (props: Props) => {
  const { children } = props;

  const childProps = {
    ...props,
    children,
  };

  return <Sidebar {...childProps} />;
};

export const MemorizedSidebarContainer = memo(SidebarContainer);
