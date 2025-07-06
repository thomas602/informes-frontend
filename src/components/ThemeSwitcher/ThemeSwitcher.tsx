import type { Props as ContainerProps } from './ThemeSwitcher.container';
import { Styles } from './ThemeSwitcher.styled';

interface Props extends ContainerProps {
    theme: string;
    toggleTheme: () => void;
}

export const ThemeSwitcher = (props: Props) => {
    const { theme, toggleTheme } = props;
    return (
        <>
            <button onClick={toggleTheme} className={Styles.themeSwitcherButton}>
                {theme === 'dark' ? (
                    <i className='fa-solid fa-sun'></i>
                ) : (
                    <i className='fa-solid fa-moon'></i>
                )}
            </button>
        </>
    );
};
