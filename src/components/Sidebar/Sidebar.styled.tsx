export const Styles = {
    layout: 'flex h-lvh',
    mainContent: 'flex-1 px-4 xl:px-15 pt-8 pb-4 overflow-auto bg-gray-100 dark:bg-zinc-800',
    sidebar: `
        flex flex-col
        h-full px-4 pt-8 relative
        bg-gradient-to-r from-primary to-secondary 
        dark:from-dark-primary dark:to-dark-secondary 
        shadow-sm text-white 
        transition-all duration-300 ease-in-out`,
    sidebarCollapseIcon: `
    fa-solid fa-arrow-right 
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
    navItem: `flex flex-row gap-0 p-2 rounded-lg transition-all duration-200 ease-in-out
    dark:text-gray-300 hover:cursor-pointer`,
    navItemActive: `bg-white
    text-primary font-bold text-lg
    dark:bg-zinc-800`,
    navItemIcon: `text-2xl`,
    navItemLabel: `text-xl align-bottom`,
    userSection:
        'absolute bottom-0 left-0 right-0 w-full text-white transition-colors duration-200 ease-in-out',
    userInfo: 'flex items-center gap-2 px-4 py-2 overflow-hidden',
    userAvatar: 'w-10 h-10 rounded-full',
    userName: 'font-medium text-xl text-white truncate dark:text-gray-300',
    userEmail: 'text-sm text-white truncate dark:text-gray-300',
    logoutButton:
        'flex items-center justify-center gap-2 text-xl mt-2 py-4 text-sm font-semibold bg-neutral-800 text-red-600 hover:cursor-pointer hover:bg-black transition-colors',
    logoutButtonText: 'truncate',
    subMenu: 'flex flex-col gap-2 p-2 px-5 rounded-lg transition-all duration-200 ease-in-out',
    subMenuItem: 'text-sm truncate dark:text-gray-300 hover:cursor-pointer rounded-lg p-2',
    subMenuItemActive: 'bg-white dark:bg-zinc-800 text-primary font-bold text-lg',
};
