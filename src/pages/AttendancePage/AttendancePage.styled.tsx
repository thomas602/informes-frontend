export const Styles = {
    pageHeader: 'flex flex-col gap-6 xl:flex-row justify-between items-start xl:items-center',
    pageTitle: 'flex flex-col gap-2',
    title: 'text-4xl font-bold',
    description: 'text-gray-600 dark:text-gray-400',
    button: `px-4 py-2 rounded-md flex flex-row gap-2 items-center text-white transition-all duration-200 ease-in-out
        hover:bg-gradient-to-r hover:from-primary/90 hover:to-secondary/90
        dark:hover:from-dark-primary/90 dark:hover:to-dark-secondary/90
        bg-gradient-to-r from-primary to-secondary 
        dark:from-dark-primary dark:to-dark-secondary`,
    filtersContainer:
        'mt-8 px-4 py-4 xl:px-4 border border-gray-300 dark:border-zinc-700 rounded-lg',
    filtersTitle: `flex flex-row gap-2 items-center text-xl font-bold
        text-gray-900 dark:text-gray-400`,
    filtersContent: 'mt-4 py-2 flex flex-col xl:flex-row xl:justify-between gap-2',
    filtersContentItem: `flex flex-col gap-2 xl:w-1/3`,
    filtersContentItemLabel: 'text-gray-900 dark:text-gray-400',
    filtersContentItemInput: `w-full p-1 border rounded-md
        border-gray-300 dark:border-zinc-700
        text-gray-900 dark:text-gray-400`,
    dashboard: `
        grid grid-cols-2 xl:grid-cols-5 gap-4
        mt-8`,
    dashboardItem: `overflow-x-hidden flex flex-col gap-2 w-full
        p-4
        border border-gray-300
        dark:border-zinc-700
        rounded-lg`,
    dashboardItemTitle: `flex flex-row gap-2 items-center text-xl font-bold
        text-gray-900 dark:text-gray-400`,
    dashboardItemTitleContent: 'flex flex-col',
    dashboardItemTitleContentTitle: 'text-sm font-light text-gray-700 dark:text-gray-400',
    dashboardItemTitleContentValue: 'text-3xl font-bold',
    studentsAttendance: 'mt-8 p-4 border border-gray-300 dark:border-zinc-700 rounded-lg',
    studentsAttendanceHeader: 'flex flex-col gap-2',
    studentsAttendanceHeaderTitle: 'text-2xl font-bold text-gray-900 dark:text-gray-400',
    studentsAttendanceHeaderDescription: 'text-gray-600 dark:text-gray-400',
    studentsAttendanceList: 'mt-4 flex flex-col gap-4',
    studentsAttendanceListItem:
        'overflow-x-auto flex flex-row gap-2 px-4 py-3 justify-between border border-gray-300 dark:border-zinc-700 rounded-lg text-gray-900 dark:text-gray-400 items-center',
    studentsAttendanceListItemName: 'text-lg font-bold',
    studentsAttendanceListItemActions: 'flex flex-row gap-2',
    studentsAttendanceListItemAction: `px-2 py-1 rounded-md border border-gray-300 dark:border-zinc-700
        text-gray-900 dark:text-gray-400`,
    studentsAttendanceFooter: 'flex flex-row gap-2 justify-end mt-4',
    studentsAttendanceFooterCancelButton: `
        px-4 py-2 rounded-md 
        font-semibold
        border border-gray-300 dark:border-zinc-700
        text-gray-900 dark:text-gray-400
        transition-all duration-200 ease-in-out
        hover:bg-gray-200 dark:hover:bg-zinc-700
        `,
    studentsAttendanceFooterSaveButton: `
        px-4 py-2 rounded-md border 
        border-gray-300 dark:border-zinc-700
        bg-gradient-to-r from-primary to-secondary
        dark:from-dark-primary dark:to-dark-secondary
        text-white font-semibold
        transition-all duration-200 ease-in-out
        hover:bg-gradient-to-r hover:from-primary/90 hover:to-secondary/90
        dark:hover:from-dark-primary/90 dark:hover:to-dark-secondary/90
        `,
};
