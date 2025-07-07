export const Styles = {
    layout: 'flex h-lvh',
    mainContent: 'flex-1 px-4 xl:px-15 pt-8 pb-4 overflow-auto bg-gray-100 dark:bg-zinc-800',
    sidebar: `
        flex flex-col justify-between
        h-full px-4 pt-8 relative
        bg-gradient-to-r from-primary to-secondary 
        dark:from-dark-primary dark:to-dark-secondary 
        shadow-sm text-white 
        transition-all duration-300 ease-in-out`,
    sidebarCollapseIcon: `
    fa-solid fa-arrow-left 
    p-2 text-primary absolute 
    bg-white rounded-full text-2xl -right-4 top-9
    border-2 border-secondary
    transition-all duration-200 ease-in-out
    hover:cursor-pointer
    hover:bg-secondary hover:text-white
    dark:bg-zinc-800 dark:border-dark-secondary
    dark:hover:bg-dark-secondary dark:hover:text-white`,
    sidebarTitle: `text-2xl font-bold transition-all duration-300 ease-in-out`,
    search: `mt-10 flex flex-row p-2 rounded-md 
    text-primary
    dark:bg-zinc-800 dark:text-white`,
    searchInput: `w-full bg-white dark:bg-zinc-800 text-sm outline-none text-black dark:text-white`,
    navList: `mt-10 flex flex-col gap-2`,
    navItem: `flex items-center gap-2 p-2 rounded-lg transition-all duration-200 ease-in-out
    dark:text-gray-300`,
    navItemActive: `bg-white
    text-primary font-bold text-lg
    dark:bg-zinc-800`,
    navItemIcon: `text-2xl`,
    userSection:
        'xl:w-full xl:mt-3 xl:mt-auto xl:pt-4 text-white xl:bg-gradient-to-r from-secondary to-primary dark:from-dark-secondary dark:to-dark-primary rounded-2xl transition-colors duration-200 ease-in-out',
    userInfo: 'hidden xl:block xl:px-4 xl:py-2',
    userName: 'font-medium text-xl',
    userEmail: 'text-sm overflow-hidden text-ellipsis whitespace-nowrap',
    logoutButton:
        'w-full text-xl p-2 xl:mt-2 xl:py-2 xl:text-sm font-semibold xl:bg-neutral-800 text-red-600 xl:hover:bg-black xl:rounded-b-2xl transition-colors',
    logoutButtonText: 'hidden xl:block',
};
