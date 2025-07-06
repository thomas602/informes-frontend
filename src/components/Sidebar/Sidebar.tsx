import type { Props as ContainerProps } from './Sidebar.container';
import { Styles } from './Sidebar.styled';
import { useNavigate, useLocation } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import { ThemeSwitcherContainer } from '../ThemeSwitcher/ThemeSwitcher.container';
import { useState } from 'react';

interface Props extends ContainerProps {}

const menuItems = [
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

export const Sidebar = ({ children }: Props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { logout, user } = useAuth();

    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const isActive = (path: string) => {
        return location.pathname.includes(path);
    };

    const getNavItemClass = (path: string) => {
        return isActive(path) ? Styles.navItemActive : Styles.navItem;
    };

    const getSubMenuClass = (path: string) => {
        return isActive(path) ? Styles.navSubItemActive : Styles.navSubItem;
    };

    return (
        <div className={Styles.layout}>
            <aside className={Styles.sidebar}>
                <div className={Styles.sidebarContent}>
                    <div className={Styles.sidebarHeader}>
                        <h3 className={Styles.sidebarTitle}>Informes</h3>
                        <ThemeSwitcherContainer />
                    </div>
                    <nav className={Styles.nav}>
                        <ul className={Styles.navList}>
                            {menuItems.map(item => (
                                <div key={item.path} className={Styles.navItemContainer}>
                                    <li
                                        key={item.path}
                                        className={getNavItemClass(item.path)}
                                        onClick={() => handleNavigation(item.path)}>
                                        <i className={`${item.icon} ${Styles.navItemIcon}`}></i>
                                        <span className={Styles.navItemText}>{item.label}</span>
                                        {item.subMenus && (
                                            <i
                                                className={`fa-solid fa-chevron-down ${
                                                    Styles.navItemIcon
                                                } w-full text-right transition-discrete duration-150 ${
                                                    subMenuOpen ? 'rotate-x-180' : ''
                                                }`}
                                                onClick={() => setSubMenuOpen(!subMenuOpen)}></i>
                                        )}
                                    </li>
                                    {subMenuOpen && item.subMenus && (
                                        <ul className={Styles.subList}>
                                            {item.subMenus.map(subMenu => (
                                                <li
                                                    key={subMenu.path}
                                                    className={getSubMenuClass(subMenu.path)}
                                                    onClick={() => handleNavigation(subMenu.path)}>
                                                    <i
                                                        className={`${subMenu.icon} ${Styles.navItemIcon}`}></i>
                                                    <span className={Styles.navItemText}>
                                                        {subMenu.label}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </ul>
                    </nav>

                    {/* User info and logout section */}
                    <div className={Styles.userSection}>
                        <div className={Styles.userInfo}>
                            <div className={Styles.userName}>{user?.name}</div>
                            <div className={Styles.userEmail}>{user?.email}</div>
                        </div>
                        <button onClick={handleLogout} className={Styles.logoutButton}>
                            <i className={`fa-solid fa-sign-out-alt ${Styles.navItemIcon}`}></i>
                            <p className={Styles.logoutButtonText}>Cerrar sesión</p>
                        </button>
                    </div>
                </div>
            </aside>
            <main className={Styles.mainContent}>{children}</main>
        </div>
    );
};
