export const Styles = {
    layout: 'flex flex-col xl:flex-row h-screen w-full',
    sidebar:
        'w-full xl:h-full xl:w-1/7 bg-gradient-to-r from-primary to-secondary p-4 shadow-sm text-white',
    sidebarContent:
        'items-center flex flex-row justify-between xl:items-start xl:h-full xl:flex-col',
    sidebarTitle: 'text-2xl font-bold xl:mb-4',
    nav: 'xl:w-full',
    navList: 'flex flex-row gap-6 list-none xl:flex-col p-0 xl:m-4 xl:mt-10 xl:gap-0',
    navItem:
        'flex flex-row text-center items-center p-2 xl:m-1 rounded-md cursor-pointer transition-colors hover:bg-white hover:text-primary',
    navItemActive:
        'flex flex-row text-center items-center p-2 xl:m-1 rounded-md cursor-pointer transition-colors bg-white text-primary font-bold',
    navItemIcon: 'xl:mr-2 items-center',
    navItemText: 'hidden xl:block',
    sidebarSeparator: 'flex flex-row xl:flex-col justify-between xl:h-full',
    userSection:
        'xl:w-full xl:mt-3 xl:mt-auto xl:pt-4 text-white xl:bg-gradient-to-r from-secondary to-primary rounded-2xl',
    userInfo: 'hidden xl:block xl:px-4 xl:py-2',
    userName: 'font-medium text-xl',
    userEmail: 'text-sm overflow-hidden text-ellipsis whitespace-nowrap',
    logoutButton:
        'w-full text-xl p-2 xl:mt-2 xl:py-2 xl:text-sm font-semibold xl:bg-neutral-800 text-red-600 xl:hover:bg-black xl:rounded-b-2xl transition-colors',
    logoutButtonText: 'hidden xl:block',
    mainContent: 'flex-1 px-15 py-4 overflow-auto bg-gray-100',
};
