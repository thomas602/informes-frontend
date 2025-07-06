export const Styles = {
    // Main table container with rounded corners and shadow
    table: 'w-full bg-white dark:bg-zinc-700 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-zinc-600',

    // Table header with gradient background
    tableHeader:
        'bg-gradient-to-r from-primary to-secondary dark:from-dark-primary dark:to-dark-secondary text-white transition-colors duration-200 ease-in-out',

    // Header cells with proper spacing and typography
    tableHeaderCell: 'px-6 py-4 text-left text-sm font-semibold tracking-wide uppercase',

    // Table body
    tableBody: 'bg-gray-100 dark:bg-zinc-700 divide-y divide-gray-300 dark:divide-zinc-600',

    // Table rows with hover effects and transitions
    tableBodyRow:
        'hover:bg-gray-50 dark:hover:bg-zinc-600 transition-colors duration-200 ease-in-out cursor-pointer',

    // Body cells with proper spacing and typography
    tableBodyCell: 'px-6 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap',

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
    tableHeaderCompact:
        'bg-gradient-to-r from-primary to-secondary dark:from-dark-primary dark:to-dark-secondary text-white transition-colors duration-200 ease-in-out',
    tableHeaderCellCompact: 'px-4 py-3 text-left text-xs font-semibold tracking-wide uppercase',
    tableBodyCellCompact: 'px-4 py-3 text-xs text-gray-700 whitespace-nowrap',

    // Table header section
    tableHeaderSection:
        'bg-white px-6 py-4 flex justify-between items-center border-t border-gray-100 dark:bg-zinc-900 dark:border-none',
    tableHeaderLeft: 'flex items-center',
    tableTitle: 'text-xl font-semibold text-gray-800 dark:text-white',
    tableHeaderRight: 'flex items-center gap-4',

    // Search container and input
    searchContainer: 'relative',
    searchInput:
        'pl-10 pr-4 py-2 border border-gray-300 dark:border-zinc-600 dark:bg-zinc-900 rounded-lg dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 w-64',

    // Header buttons
    headerButtons: 'flex gap-2',
    refreshButton:
        'px-4 py-2 border border-gray-300 dark:border-zinc-600 bg-gray-100 hover:bg-gray-200 text-gray-700 dark:text-white dark:bg-zinc-900 dark:hover:bg-zinc-800 rounded-lg transition-colors duration-200 flex items-center text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed',
    addButton:
        'px-4 py-2 bg-gradient-to-r from-primary to-secondary dark:from-dark-primary dark:to-dark-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-lg transition-all duration-200 flex items-center text-sm font-medium shadow-sm hover:shadow-md transition-colors duration-200 ease-in-out',

    // Table content wrapper with spacing
    tableContentWrapper: 'p-4 bg-white dark:bg-zinc-900',

    // Pagination styles
    paginationContainer: 'flex justify-between items-center px-6 py-4 bg-white dark:bg-zinc-900',
    paginationInfo: 'flex items-center',
    paginationText: 'text-sm text-gray-600 dark:text-gray-400',
    paginationControls: 'flex items-center gap-1',
    paginationButton:
        'px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-600 rounded-lg hover:bg-gray-50 hover:border-gray-400 dark:hover:bg-zinc-800 dark:hover:border-zinc-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-300',
    paginationButtonActive:
        'bg-gradient-to-r from-primary to-secondary dark:from-dark-primary dark:to-dark-secondary text-white border-primary hover:bg-gradient-to-r hover:from-primary/90 hover:to-secondary/90',
    paginationEllipsis: 'cursor-default hover:bg-white hover:border-gray-300',
};
