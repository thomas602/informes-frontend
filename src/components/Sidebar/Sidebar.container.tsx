import { memo } from 'react';
import { Sidebar } from './Sidebar';

export interface Props {
    children: React.ReactNode;
}

export const SidebarContainer = (props: Props) => {
    const { children } = props;

    return <Sidebar>{children}</Sidebar>;
};

export const MemoizedSidebarContainer = memo(SidebarContainer);
