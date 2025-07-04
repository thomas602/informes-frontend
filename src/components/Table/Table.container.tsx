import { memo, type ReactNode } from 'react';
import { Table, type TableProps } from './Table';

export interface Props extends TableProps<any> {
    data: any[];
    columns: any[];
    actions?: (row: any) => ReactNode;
    onRowClick?: (row: any) => void;
}

export const TableContainer = (props: Props) => {
    const childProps = {
        ...props,
    };

    return <Table {...childProps} />;
};

export const MemoizedTableContainer = memo(TableContainer);
