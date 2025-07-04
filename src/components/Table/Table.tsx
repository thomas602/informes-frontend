import type { ReactNode } from 'react';
import { Styles } from './Table.styled';

export interface Column<T> {
    key: keyof T;
    header: string;
    render?: (value: T[keyof T], row: T) => ReactNode;
    width?: string;
}

export interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
    actions?: (row: T) => ReactNode;
    onRowClick?: (row: T) => void;
    loading?: boolean;
    emptyMessage?: string;
    variant?: 'default' | 'compact';
    striped?: boolean;
    // Header props
    title?: string;
    onRefresh?: () => void;
    onAdd?: () => void;
    onSearch?: (searchTerm: string) => void;
    searchPlaceholder?: string;
    showHeader?: boolean;
    // Pagination props
    currentPage?: number;
    totalPages?: number;
    onPageChange?: (page: number) => void;
    showPagination?: boolean;
}

export const Table = <T extends Record<string, any>>({
    data,
    columns,
    actions,
    onRowClick,
    loading = false,
    emptyMessage = 'No hay datos disponibles',
    variant = 'default',
    striped = false,
    // Header props
    title,
    onRefresh,
    onAdd,
    onSearch,
    searchPlaceholder = 'Buscar...',
    showHeader = true,
    // Pagination props
    currentPage,
    totalPages,
    onPageChange,
    showPagination = true,
}: TableProps<T>) => {
    const getTableClass = () => {
        return variant === 'compact' ? Styles.tableCompact : Styles.table;
    };

    const getHeaderClass = () => {
        return variant === 'compact' ? Styles.tableHeaderCompact : Styles.tableHeader;
    };

    const getHeaderCellClass = () => {
        return variant === 'compact' ? Styles.tableHeaderCellCompact : Styles.tableHeaderCell;
    };

    const getBodyCellClass = () => {
        return variant === 'compact' ? Styles.tableBodyCellCompact : Styles.tableBodyCell;
    };

    const getRowClass = (index: number) => {
        const baseClass = variant === 'compact' ? Styles.tableBodyCellCompact : Styles.tableBodyRow;
        const stripedClass = striped && index % 2 === 1 ? Styles.tableBodyRowStriped : '';
        return `${baseClass} ${stripedClass}`;
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch?.(e.currentTarget.value);
    };

    const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearch?.(e.currentTarget.value);
        }
    };

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= (totalPages || 1) && onPageChange) {
            onPageChange(page);
        }
    };

    const renderPagination = () => {
        if (!showPagination || !totalPages || totalPages <= 1) {
            return null;
        }

        const current = currentPage || 1;
        const total = totalPages;

        // Calculate which page numbers to show
        const getPageNumbers = () => {
            const pages = [];
            const maxVisible = 5;

            if (total <= maxVisible) {
                // Show all pages if total is small
                for (let i = 1; i <= total; i++) {
                    pages.push(i);
                }
            } else {
                // Show smart pagination with ellipsis
                if (current <= 3) {
                    // Near start
                    for (let i = 1; i <= 4; i++) {
                        pages.push(i);
                    }
                    pages.push('...');
                    pages.push(total);
                } else if (current >= total - 2) {
                    // Near end
                    pages.push(1);
                    pages.push('...');
                    for (let i = total - 3; i <= total; i++) {
                        pages.push(i);
                    }
                } else {
                    // Middle
                    pages.push(1);
                    pages.push('...');
                    for (let i = current - 1; i <= current + 1; i++) {
                        pages.push(i);
                    }
                    pages.push('...');
                    pages.push(total);
                }
            }

            return pages;
        };

        return (
            <div className={Styles.paginationContainer}>
                <div className={Styles.paginationInfo}>
                    <span className={Styles.paginationText}>
                        Página {current} de {total}
                    </span>
                </div>

                <div className={Styles.paginationControls}>
                    {/* Previous button */}
                    <button
                        onClick={() => handlePageChange(current - 1)}
                        disabled={current <= 1}
                        className={Styles.paginationButton}>
                        <i className='fa-solid fa-chevron-left'></i>
                    </button>

                    {/* Page numbers */}
                    {getPageNumbers().map((page, index) => (
                        <button
                            key={index}
                            onClick={() =>
                                typeof page === 'number' ? handlePageChange(page) : null
                            }
                            disabled={page === '...'}
                            className={`${Styles.paginationButton} ${
                                page === current ? Styles.paginationButtonActive : ''
                            } ${page === '...' ? Styles.paginationEllipsis : ''}`}>
                            {page}
                        </button>
                    ))}

                    {/* Next button */}
                    <button
                        onClick={() => handlePageChange(current + 1)}
                        disabled={current >= total}
                        className={Styles.paginationButton}>
                        <i className='fa-solid fa-chevron-right'></i>
                    </button>
                </div>
            </div>
        );
    };

    if (loading) {
        return (
            <div className={Styles.tableWrapper}>
                {/* Show header even during loading */}
                {showHeader && (
                    <div className={Styles.tableHeaderSection}>
                        <div className={Styles.tableHeaderLeft}>
                            {title && <h3 className={Styles.tableTitle}>{title}</h3>}
                        </div>
                        <div className={Styles.tableHeaderRight}>
                            {/* Search Input */}
                            {onSearch && (
                                <div className={Styles.searchContainer}>
                                    <input
                                        type='text'
                                        placeholder={searchPlaceholder}
                                        onChange={handleSearchChange}
                                        onKeyDown={handleSearchKeyPress}
                                        className={Styles.searchInput}
                                    />
                                    <i className='fa-solid fa-search text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2'></i>
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className={Styles.headerButtons}>
                                {onRefresh && (
                                    <button
                                        onClick={onRefresh}
                                        className={Styles.refreshButton}
                                        disabled={loading}>
                                        <i className='fa-solid fa-refresh mr-2'></i>
                                        Actualizar
                                    </button>
                                )}

                                {onAdd && (
                                    <button onClick={onAdd} className={Styles.addButton}>
                                        <i className='fa-solid fa-plus mr-2'></i>
                                        Agregar
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )}
                <div className={Styles.tableContentWrapper}>
                    <div className={Styles.loadingState}>
                        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4'></div>
                        <p>Cargando datos...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={Styles.tableWrapper}>
            {/* Table Header */}
            {showHeader && (
                <div className={Styles.tableHeaderSection}>
                    <div className={Styles.tableHeaderLeft}>
                        {title && <h3 className={Styles.tableTitle}>{title}</h3>}
                    </div>
                    <div className={Styles.tableHeaderRight}>
                        {/* Search Input */}
                        {onSearch && (
                            <div className={Styles.searchContainer}>
                                <input
                                    type='text'
                                    placeholder={searchPlaceholder}
                                    onChange={handleSearchChange}
                                    onKeyDown={handleSearchKeyPress}
                                    className={Styles.searchInput}
                                />
                                <i className='fa-solid fa-search text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2'></i>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className={Styles.headerButtons}>
                            {onRefresh && (
                                <button
                                    onClick={onRefresh}
                                    className={Styles.refreshButton}
                                    disabled={loading}>
                                    <i className='fa-solid fa-refresh mr-2'></i>
                                    Actualizar
                                </button>
                            )}

                            {onAdd && (
                                <button onClick={onAdd} className={Styles.addButton}>
                                    <i className='fa-solid fa-plus mr-2'></i>
                                    Agregar
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Table or Empty State */}
            <div className={Styles.tableContentWrapper}>
                {!data || data.length === 0 ? (
                    <div className={Styles.emptyState}>
                        <div className='text-6xl mb-4'>📊</div>
                        <p className='text-lg font-medium'>{emptyMessage}</p>
                    </div>
                ) : (
                    <table className={getTableClass()}>
                        <thead className={getHeaderClass()}>
                            <tr>
                                {columns.map(column => (
                                    <th
                                        key={String(column.key)}
                                        className={getHeaderCellClass()}
                                        style={{ width: column.width }}>
                                        {column.header}
                                    </th>
                                ))}
                                {actions && <th className={getHeaderCellClass()}>Acciones</th>}
                            </tr>
                        </thead>
                        <tbody className={Styles.tableBody}>
                            {data.map((row, index) => (
                                <tr
                                    key={index}
                                    className={getRowClass(index)}
                                    onClick={() => onRowClick?.(row)}
                                    style={{ cursor: onRowClick ? 'pointer' : 'default' }}>
                                    {columns.map(column => (
                                        <td
                                            key={String(column.key)}
                                            className={getBodyCellClass()}
                                            style={{ width: column.width }}>
                                            {column.render
                                                ? column.render(row[column.key], row)
                                                : String(row[column.key] || '')}
                                        </td>
                                    ))}
                                    {actions && (
                                        <td className={getBodyCellClass()}>
                                            <div className={Styles.tableBodyCellButtons}>
                                                {actions(row)}
                                            </div>
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {renderPagination()}
        </div>
    );
};
