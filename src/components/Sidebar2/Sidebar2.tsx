import { useAuth } from '../../contexts/AuthContext';
import { ThemeSwitcherContainer } from '../ThemeSwitcher/ThemeSwitcher.container';
import type { Props as ContainerProps } from './Sidebar2.container';
import { Styles } from './Sidebar2.styled';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';

interface Props extends ContainerProps {}

const menus = [
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

export const Sidebar2 = (props: Props) => {
    const { children } = props;
    const [isOpen, setIsOpen] = useState(true);
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
                            isOpen ? '' : 'w-full text-center text-white dark:text-zinc-800'
                        }`}
                        aria-hidden='true'></i>
                    <input
                        className={`${Styles.searchInput} ${isOpen ? 'block' : 'hidden'}`}
                        type='text'
                        placeholder='Buscar'
                    />
                </div>

                <ul className={Styles.navList}>
                    {menus.map(menu => (
                        <li
                            key={menu.path}
                            className={`${Styles.navItem} ${
                                isActive(menu.path) ? Styles.navItemActive : ''
                            }`}
                            onClick={() => handleNavigation(menu.path)}>
                            <i
                                className={`${menu.icon} ${Styles.navItemIcon} ${
                                    isOpen ? '' : 'w-full text-center'
                                }`}></i>
                            <span className={`${isOpen ? 'block' : 'hidden'}`}>{menu.label}</span>
                        </li>
                    ))}
                </ul>
                <ThemeSwitcherContainer />
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
            <div className={Styles.mainContent}>{children}</div>
        </div>
    );
};
