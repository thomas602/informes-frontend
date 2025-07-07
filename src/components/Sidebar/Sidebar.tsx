import { useAuth } from '../../contexts/AuthContext';
import { ThemeSwitcherContainer } from '../ThemeSwitcher/ThemeSwitcher.container';
import type { Props as ContainerProps } from './Sidebar.container';
import { Styles } from './Sidebar.styled';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';

interface Props extends ContainerProps {}

const initialMenus = [
    { path: '/dashboard', label: 'Inicio', icon: 'fa-solid fa-house' },
    { path: '/courses', label: 'Cursos', icon: 'fa-solid fa-book' },
    { path: '/students', label: 'Alumnos', icon: 'fa-solid fa-user' },
    {
        path: '/incidences',
        label: 'Incidencias',
        icon: 'fa-solid fa-exclamation-triangle',
        subMenus: [
            { path: '/incidences/regulations', label: 'Regulaciones', icon: 'fa-solid fa-pen' },
            {
                path: '/incidences/reports',
                label: 'Reportes',
                icon: 'fa-solid fa-file-pen',
            },
        ],
    },
    {
        path: '/attendance',
        label: 'Presentismo',
        icon: 'fa fa-calendar',
    },
];

export const Sidebar = (props: Props) => {
    const { children } = props;
    const [menus, setMenus] = useState(initialMenus);
    const [isOpen, setIsOpen] = useState(true);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const { logout, user } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    const isActive = (path: string) => {
        return location.pathname.includes(path);
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    console.log(user);

    return (
        <div className={Styles.layout}>
            <div className={`${Styles.sidebar} ${isOpen ? 'w-72' : 'w-20'}`}>
                <i
                    className={`${Styles.sidebarCollapseIcon} ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden='true'
                    onClick={() => setIsOpen(!isOpen)}></i>
                <h1 className={`${Styles.sidebarTitle} ${isOpen ? 'block' : 'scale-0'}`}>
                    Informes
                </h1>
                <div className={`${Styles.search} ${isOpen ? 'gap-2 bg-white' : 'gap-0'}`}>
                    <i
                        className={`fa-solid fa-magnifying-glass text-2xl transition-all duration-200 ease-in-out ${
                            isOpen ? '' : 'w-full text-center text-whit'
                        }`}
                        aria-hidden='true'></i>
                    <input
                        className={`${Styles.searchInput} ${isOpen ? 'block' : 'hidden'}`}
                        type='text'
                        placeholder='Buscar'
                        onChange={e => {
                            setMenus(
                                initialMenus.filter(
                                    menu =>
                                        menu.label
                                            .toLowerCase()
                                            .includes(e.target.value.toLowerCase()) ||
                                        menu.subMenus?.some(subMenu =>
                                            subMenu.label
                                                .toLowerCase()
                                                .includes(e.target.value.toLowerCase()),
                                        ),
                                ),
                            );
                        }}
                    />
                </div>

                <ul className={Styles.navList}>
                    {menus.map(menu => (
                        <>
                            <li
                                key={menu.path}
                                className={`${Styles.navItem} ${
                                    isActive(menu.path)
                                        ? Styles.navItemActive
                                        : 'hover:bg-white/20 dark:hover:bg-black/20'
                                }`}
                                onClick={() => {
                                    if (menu.subMenus) {
                                        if (!isOpen) {
                                            setIsOpen(true);
                                        }
                                        if (!isSubMenuOpen) {
                                            setIsSubMenuOpen(true);
                                        }
                                        if (isOpen && isSubMenuOpen) {
                                            setIsSubMenuOpen(false);
                                        }
                                    } else {
                                        handleNavigation(menu.path);
                                    }
                                }}>
                                <div className='flex flex-row gap-0'>
                                    <i
                                        className={`${menu.icon} fa-fw ${Styles.navItemIcon} ${
                                            isOpen ? '' : 'w-full text-center'
                                        }`}></i>
                                    <p
                                        className={`${Styles.navItemLabel} ${
                                            isOpen ? 'block ml-2' : 'hidden'
                                        }`}>
                                        {menu.label}
                                    </p>
                                </div>
                                {menu.subMenus && isOpen && (
                                    <i
                                        className={`fa-solid fa-chevron-down absolute right-5 transition-discrete duration-150 ${
                                            isSubMenuOpen ? 'rotate-x-180' : ''
                                        }`}
                                        aria-hidden='true'
                                        onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}></i>
                                )}
                            </li>
                            {isSubMenuOpen && menu.subMenus && isOpen && (
                                <ul className={Styles.subMenu}>
                                    {menu.subMenus.map(subMenu => (
                                        <li
                                            key={subMenu.path}
                                            className={`${Styles.subMenuItem} ${
                                                isActive(subMenu.path)
                                                    ? Styles.subMenuItemActive
                                                    : 'hover:bg-white/20 dark:hover:bg-black/20'
                                            }`}
                                            onClick={() => handleNavigation(subMenu.path)}>
                                            {subMenu.label}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </>
                    ))}
                </ul>
                <ThemeSwitcherContainer />
                {/* User info and logout section */}
                <div className={Styles.userSection}>
                    <div className={Styles.userInfo}>
                        <div className={Styles.userAvatar}>
                            <img
                                src={user?.avatar}
                                alt='User avatar'
                                className='w-full h-full object-cover rounded-full'
                            />
                        </div>
                        <div className={`${isOpen ? 'block' : 'hidden'}`}>
                            <p className={Styles.userName}>{user?.name}</p>
                            <p className={Styles.userEmail}>{user?.email}</p>
                        </div>
                    </div>
                    <div onClick={handleLogout} className={Styles.logoutButton}>
                        <i className={`fa-solid fa-sign-out-alt ${Styles.navItemIcon}`}></i>
                        <p className={`${Styles.logoutButtonText} ${isOpen ? 'block' : 'hidden'}`}>
                            Cerrar sesión
                        </p>
                    </div>
                </div>
            </div>
            <div className={Styles.mainContent}>{children}</div>
        </div>
    );
};
