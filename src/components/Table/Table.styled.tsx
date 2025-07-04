/* export const Styles = {
    table: 'mt-10 w-full table-auto border-collapse',
    tableHeader: 'bg-gray-300',
    tableHeaderCell: 'p-2 border border-gray-500',
    tableBody: 'bg-gray-100',
    tableBodyRow: 'hover:bg-gray-50 border',
    tableBodyCell: 'p-2 overflow-hidden border-b border-gray-500',
    tableBodyCellButtons: 'flex gap-2 justify-center',
};
 */

export const Styles = {
    // Main table container with rounded corners and shadow
    table: 'w-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100',

    // Table header with gradient background
    tableHeader: 'bg-gradient-to-r from-primary to-secondary text-white',

    // Header cells with proper spacing and typography
    tableHeaderCell: 'px-6 py-4 text-left text-sm font-semibold tracking-wide uppercase',

    // Table body
    tableBody: 'bg-white divide-y divide-gray-100',

    // Table rows with hover effects and transitions
    tableBodyRow: 'hover:bg-gray-50 transition-colors duration-200 ease-in-out cursor-pointer',

    // Body cells with proper spacing and typography
    tableBodyCell: 'px-6 py-4 text-sm text-gray-700 whitespace-nowrap',

    // Container for action buttons in table cells
    tableBodyCellButtons: 'flex gap-2 justify-center items-center',

    // Empty state styling
    emptyState: 'text-center py-12 text-gray-500',

    // Loading state styling
    loadingState: 'text-center py-12 text-primary',

    // Responsive wrapper
    tableWrapper: 'overflow-x-auto rounded-2xl shadow-lg',

    // Striped rows variant (optional)
    tableBodyRowStriped:
        'hover:bg-gray-50 transition-colors duration-200 ease-in-out cursor-pointer bg-gray-50',

    // Compact variant
    tableCompact: 'w-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-100',
    tableHeaderCompact: 'bg-gradient-to-r from-primary to-secondary text-white',
    tableHeaderCellCompact: 'px-4 py-3 text-left text-xs font-semibold tracking-wide uppercase',
    tableBodyCellCompact: 'px-4 py-3 text-xs text-gray-700 whitespace-nowrap',

    // Table header section
    tableHeaderSection:
        'bg-white px-6 py-4 flex justify-between items-center border-t border-gray-100',
    tableHeaderLeft: 'flex items-center',
    tableTitle: 'text-xl font-semibold text-gray-800',
    tableHeaderRight: 'flex items-center gap-4',

    // Search container and input
    searchContainer: 'relative',
    searchInput:
        'pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 w-64',

    // Header buttons
    headerButtons: 'flex gap-2',
    refreshButton:
        'px-4 py-2 bg-gray-100 hover:bg-gray-200  text-gray-700 rounded-lg transition-colors duration-200 flex items-center text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed',
    addButton:
        'px-4 py-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-lg transition-all duration-200 flex items-center text-sm font-medium shadow-sm hover:shadow-md',

    // Table content wrapper with spacing
    tableContentWrapper: 'p-4 bg-white',

    // Pagination styles
    paginationContainer: 'flex justify-between items-center px-6 py-4 bg-white',
    paginationInfo: 'flex items-center',
    paginationText: 'text-sm text-gray-600',
    paginationControls: 'flex items-center gap-1',
    paginationButton:
        'px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-300',
    paginationButtonActive:
        'bg-gradient-to-r from-primary to-secondary text-white border-primary hover:bg-gradient-to-r hover:from-primary/90 hover:to-secondary/90',
    paginationEllipsis: 'cursor-default hover:bg-white hover:border-gray-300',
};
