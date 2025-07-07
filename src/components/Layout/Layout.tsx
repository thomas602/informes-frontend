import type { ReactNode } from 'react';
/* import { Sidebar } from '../Sidebar'; */
import { Sidebar2 } from '../Sidebar2';

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    /*   return <Sidebar>{children}</Sidebar>; */
    return <Sidebar2>{children}</Sidebar2>;
};
