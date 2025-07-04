import type { Props as ContainerProps } from './Sidebar.container';
import { Styles } from './Sidebar.styled';
import { useNavigate, useLocation } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';

interface Props extends ContainerProps {}

export const Sidebar = ({ children }: Props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { logout, user } = useAuth();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    const getNavItemClass = (path: string) => {
        return isActive(path) ? Styles.navItemActive : Styles.navItem;
    };

    return (
        <div className={Styles.layout}>
            <aside className={Styles.sidebar}>
                <div className={Styles.sidebarContent}>
                    <h3 className={Styles.sidebarTitle}>Informes</h3>
                    {/* <div className={Styles.sidebarSeparator}> */}
                    <nav className={Styles.nav}>
                        <ul className={Styles.navList}>
                            <li
                                className={getNavItemClass('/')}
                                onClick={() => handleNavigation('/')}>
                                <i className={`fa-solid fa-house ${Styles.navItemIcon}`}></i>
                                <span className={Styles.navItemText}>Inicio</span>
                            </li>
                            <li
                                className={getNavItemClass('/courses')}
                                onClick={() => handleNavigation('/courses')}>
                                <i className={`fa-solid fa-users ${Styles.navItemIcon}`}></i>
                                <span className={Styles.navItemText}>Cursos</span>
                            </li>
                            <li
                                className={getNavItemClass('/students')}
                                onClick={() => handleNavigation('/students')}>
                                <i className={`fa-solid fa-user ${Styles.navItemIcon}`}></i>
                                <span className={Styles.navItemText}>Alumnos</span>
                            </li>
                            <li className={Styles.navItem}>
                                <i className={`fa-solid fa-book ${Styles.navItemIcon}`}></i>
                                <span className={Styles.navItemText}>Materias</span>
                            </li>
                            <li className={Styles.navItem}>
                                <i className={`fa-solid fa-user-circle ${Styles.navItemIcon}`}></i>
                                <span className={Styles.navItemText}>Profesores</span>
                            </li>
                            <li className={Styles.navItem}>
                                <i className={`fa-solid fa-file-pen ${Styles.navItemIcon}`}></i>
                                <span className={Styles.navItemText}>Calificaciones</span>
                            </li>
                        </ul>
                    </nav>
                    {/* </div> */}
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
