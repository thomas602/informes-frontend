import { memo } from 'react';
import { Sidebar2 } from './Sidebar2';

export interface Props {
    children: React.ReactNode;
}

export const Sidebar2Container = (props: Props) => {
    const { children } = props;

    return <Sidebar2>{children}</Sidebar2>;
};

export const MemoizedSidebar2Container = memo(Sidebar2Container);
